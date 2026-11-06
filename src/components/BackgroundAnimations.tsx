import React, { useEffect, useRef } from 'react';

export const BackgroundAnimations: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Minimal sprinkles: sparse count (around 24-30 sprinkles max)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sprinkleCount = prefersReducedMotion ? 10 : Math.min(Math.floor(width / 50), 28);

    interface Sprinkle {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      maxAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      color: string;
    }

    const goldPalette = ['#F5B83D', '#FFD27A', '#FCE7A4'];

    const sprinkles: Sprinkle[] = Array.from({ length: sprinkleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.6, // tiny sprinkles (0.6px to 1.8px)
      speedY: -(Math.random() * 0.25 + 0.08), // slow, subtle upward drift
      speedX: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.25 + 0.08,
      maxAlpha: Math.random() * 0.35 + 0.15,
      twinkleSpeed: Math.random() * 0.015 + 0.008,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
    }));

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < sprinkles.length; i++) {
        const s = sprinkles[i];

        if (!prefersReducedMotion) {
          s.y += s.speedY;
          s.x += s.speedX + Math.sin(frame * 0.01 + s.twinkleOffset) * 0.1;

          // Wrap screen boundaries smoothly
          if (s.y < -5) s.y = height + 5;
          if (s.x < -5) s.x = width + 5;
          if (s.x > width + 5) s.x = -5;
        }

        // Gentle breathing twinkle
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const currentAlpha = Math.max(0.04, Math.min(s.maxAlpha, s.alpha + twinkle * 0.12));

        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Minimal Gold Animation Sprinkles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block opacity-85"
      />
    </div>
  );
};
