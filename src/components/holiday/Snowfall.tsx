"use client";

import { useEffect, useRef } from "react";

type Flake = { x: number; y: number; r: number; speed: number; drift: number; phase: number; alpha: number };

/**
 * Drifting snow over the whole page. Canvas rather than DOM nodes so a few
 * dozen flakes cost one paint instead of dozens of composited layers.
 *
 * Decorative: aria-hidden and pointer-events:none, so it never swallows a
 * click or reaches a screen reader. Under prefers-reduced-motion the flakes
 * are drawn once and left still.
 */
export function Snowfall({ density = 70 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let flakes: Flake[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fewer flakes on a phone: less paint cost, less visual noise.
      const count = Math.round(density * Math.min(1, width / 1280) ** 0.6);
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 2.2,
        speed: 0.25 + Math.random() * 0.75,
        drift: 0.25 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.35 + Math.random() * 0.45,
      }));
    };

    const paint = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const f of flakes) {
        ctx.globalAlpha = f.alpha;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(f.x + Math.sin(t / 1400 + f.phase) * f.drift * 12, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const step = (t: number) => {
      for (const f of flakes) {
        f.y += f.speed;
        if (f.y - f.r > height) {
          f.y = -f.r;
          f.x = Math.random() * width;
        }
      }
      paint(t);
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) paint(0);
      else raf = requestAnimationFrame(step);
    };

    const onResize = () => {
      seed();
      start();
    };

    // Stop burning frames while the tab is in the background.
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };

    seed();
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return <canvas ref={ref} className="snowfall" aria-hidden="true" />;
}
