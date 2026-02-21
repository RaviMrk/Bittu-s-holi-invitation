import { useEffect, useRef } from "react";

const IDLE_TIMEOUT = 5000;
const SCROLL_SPEED = 4;
const SCROLL_INTERVAL = 16;

export default function AutoScroll() {
  const timerRef = useRef(null);
  const scrollRef = useRef(null);
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    function stopAutoScroll() {
      isAutoScrolling.current = false;
      if (scrollRef.current) {
        clearInterval(scrollRef.current);
        scrollRef.current = null;
      }
    }

    function startAutoScroll() {
      if (scrollRef.current) return;
      isAutoScrolling.current = true;

      scrollRef.current = setInterval(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= maxScroll - 2) {
          stopAutoScroll();
          return;
        }
        window.scrollBy(0, SCROLL_SPEED);
      }, SCROLL_INTERVAL);
    }

    function resetIdleTimer() {
      if (isAutoScrolling.current) return;
      stopAutoScroll();
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(startAutoScroll, IDLE_TIMEOUT);
    }

    function onUserInteract() {
      if (isAutoScrolling.current) {
        stopAutoScroll();
      }
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(startAutoScroll, IDLE_TIMEOUT);
    }

    const interactEvents = ["touchstart", "touchmove", "mousemove", "mousedown", "keydown"];
    const scrollEvents = ["wheel", "touchmove"];

    interactEvents.forEach((e) => window.addEventListener(e, onUserInteract, { passive: true }));
    
    window.addEventListener("wheel", (e) => {
      if (isAutoScrolling.current) {
        stopAutoScroll();
      }
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(startAutoScroll, IDLE_TIMEOUT);
    }, { passive: true });

    timerRef.current = setTimeout(startAutoScroll, IDLE_TIMEOUT);

    return () => {
      interactEvents.forEach((e) => window.removeEventListener(e, onUserInteract));
      if (timerRef.current) clearTimeout(timerRef.current);
      stopAutoScroll();
    };
  }, []);

  return null;
}
