import { useEffect, useRef, useCallback } from "react";

const HOLI_COLORS = [
  "rgba(255, 20, 147, A)",   // pink
  "rgba(233, 30, 144, A)",   // magenta
  "rgba(255, 107, 53, A)",   // orange
  "rgba(251, 191, 36, A)",   // yellow
  "rgba(16, 185, 129, A)",   // green
  "rgba(20, 184, 166, A)",   // teal
  "rgba(59, 130, 246, A)",   // blue
  "rgba(139, 92, 246, A)",   // purple
  "rgba(124, 58, 237, A)",   // violet
  "rgba(255, 51, 102, A)",   // red
];

function getColor(alpha) {
  const color = HOLI_COLORS[Math.floor(Math.random() * HOLI_COLORS.length)];
  return color.replace("A", alpha.toString());
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HoliColorThrow() {
  const canvasRef = useRef(null);
  const splashesRef = useRef([]);
  const frameRef = useRef(null);
  const lastSpawnRef = useRef(0);

  const spawnSplash = useCallback((w, h) => {
    const baseAlpha = randomBetween(0.06, 0.14);
    return {
      x: randomBetween(0, w),
      y: randomBetween(0, h),
      radius: 0,
      maxRadius: randomBetween(120, 350),
      growSpeed: randomBetween(0.4, 1.2),
      color: getColor(baseAlpha),
      fadeColor: getColor(0),
      alpha: baseAlpha,
      phase: "grow", // grow -> hold -> fade
      holdTimer: 0,
      holdDuration: randomBetween(100, 250),
      fadeSpeed: randomBetween(0.001, 0.003),
      driftX: randomBetween(-0.3, 0.3),
      driftY: randomBetween(-0.3, 0.3),
      // secondary splatter blobs
      splatters: Array.from({ length: Math.floor(randomBetween(3, 7)) }, () => ({
        angle: randomBetween(0, Math.PI * 2),
        dist: randomBetween(0.5, 1.3),
        size: randomBetween(0.15, 0.4),
      })),
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w, h;

    function resize() {
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      canvas.width = w;
      canvas.height = h;
    }

    resize();
    window.addEventListener("resize", resize);

    // seed initial splashes so it doesn't start blank
    for (let i = 0; i < 8; i++) {
      const s = spawnSplash(w, h);
      s.radius = s.maxRadius * randomBetween(0.5, 1);
      s.phase = "hold";
      s.holdTimer = s.holdDuration * 0.5;
      splashesRef.current.push(s);
    }

    function drawSplash(s) {
      const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
      gradient.addColorStop(0, s.color);
      gradient.addColorStop(0.6, s.color);
      gradient.addColorStop(1, s.fadeColor);

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // draw splatter blobs
      for (const sp of s.splatters) {
        const sx = s.x + Math.cos(sp.angle) * s.radius * sp.dist;
        const sy = s.y + Math.sin(sp.angle) * s.radius * sp.dist;
        const sr = s.radius * sp.size;
        if (sr < 2) continue;

        const spGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
        spGrad.addColorStop(0, s.color);
        spGrad.addColorStop(1, s.fadeColor);

        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fillStyle = spGrad;
        ctx.fill();
      }
    }

    function animate(timestamp) {
      ctx.clearRect(0, 0, w, h);

      // spawn new splash every ~1.5–3 seconds
      if (timestamp - lastSpawnRef.current > randomBetween(1500, 3000)) {
        if (splashesRef.current.length < 20) {
          splashesRef.current.push(spawnSplash(w, h));
        }
        lastSpawnRef.current = timestamp;
      }

      const alive = [];

      for (const s of splashesRef.current) {
        // drift
        s.x += s.driftX;
        s.y += s.driftY;

        if (s.phase === "grow") {
          s.radius += s.growSpeed;
          if (s.radius >= s.maxRadius) {
            s.phase = "hold";
          }
        } else if (s.phase === "hold") {
          s.holdTimer++;
          if (s.holdTimer >= s.holdDuration) {
            s.phase = "fade";
          }
        } else if (s.phase === "fade") {
          s.alpha -= s.fadeSpeed;
          if (s.alpha <= 0) continue; // remove
          const col = s.color.replace(/[\d.]+\)$/, `${Math.max(0, s.alpha)})`);
          s.color = col;
          s.fadeColor = col.replace(/[\d.]+\)$/, "0)");
        }

        drawSplash(s);
        alive.push(s);
      }

      splashesRef.current = alive;
      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [spawnSplash]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
