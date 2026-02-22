import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, "invitation.pdf");
const MOBILE_WIDTH = 390;
const DEV_PORT = 5199;
const DEV_URL = `http://localhost:${DEV_PORT}`;

async function waitForServer(url, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start within ${timeout}ms`);
}

async function main() {
  console.log("Starting Vite dev server...");
  const vite = spawn("npx", ["vite", "--port", String(DEV_PORT)], {
    cwd: __dirname,
    stdio: "pipe",
    shell: true,
  });

  try {
    await waitForServer(DEV_URL);
    console.log("Dev server ready.");

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: MOBILE_WIDTH, height: 844, deviceScaleFactor: 2 });
    await page.goto(DEV_URL, { waitUntil: "networkidle0", timeout: 30000 });

    // Scroll through the entire page to trigger all whileInView animations
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    const step = 300;
    for (let y = 0; y < bodyHeight; y += step) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await new Promise((r) => setTimeout(r, 200));
    }
    // Scroll to bottom then back to top
    await page.evaluate((h) => window.scrollTo(0, h), bodyHeight);
    await new Promise((r) => setTimeout(r, 1000));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 500));

    // Freeze all animations and convert fixed → absolute so full-page screenshot works
    await page.evaluate(() => {
      // Pause all CSS animations & transitions
      const style = document.createElement("style");
      style.textContent = `
        *, *::before, *::after {
          animation-play-state: paused !important;
          transition: none !important;
        }
      `;
      document.head.appendChild(style);

      // Hide orbiting particles around the photo
      document.querySelectorAll('[style*="orbit"]').forEach((el) => {
        el.style.display = "none";
      });

      // Convert fixed-position elements to absolute so they appear in full-page screenshot
      document.querySelectorAll("*").forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.position === "fixed") {
          el.style.position = "absolute";
        }
      });
    });

    await new Promise((r) => setTimeout(r, 500));

    // Take a full-page screenshot (captures canvas, gradients, everything pixel-perfect)
    console.log("Taking full-page screenshot...");
    const screenshotBuffer = await page.screenshot({
      fullPage: true,
      type: "png",
      omitBackground: false,
    });

    await browser.close();

    // Get image dimensions
    const imgWidth = MOBILE_WIDTH * 2; // deviceScaleFactor=2
    const finalHeight = await getImageHeight(screenshotBuffer, imgWidth);

    // Build PDF from the screenshot image
    console.log("Building PDF...");
    const pdfDoc = await PDFDocument.create();
    const pngImage = await pdfDoc.embedPng(screenshotBuffer);

    const pdfWidth = MOBILE_WIDTH;
    const pdfHeight = (pngImage.height / pngImage.width) * pdfWidth;

    const pdfPage = pdfDoc.addPage([pdfWidth, pdfHeight]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: pdfWidth,
      height: pdfHeight,
    });

    const pdfBytes = await pdfDoc.save();
    writeFileSync(OUTPUT_PATH, pdfBytes);
    console.log(`PDF saved to: ${OUTPUT_PATH} (${(pdfBytes.length / 1024 / 1024).toFixed(1)} MB)`);
  } finally {
    vite.kill("SIGTERM");
  }
}

async function getImageHeight(buffer, width) {
  // Read PNG height from IHDR chunk (bytes 16-19 for height in PNG spec)
  const height = buffer.readUInt32BE(20);
  return height;
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
