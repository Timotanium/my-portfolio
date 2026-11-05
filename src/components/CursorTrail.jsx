import { useEffect, useRef } from "react";

// Color palette tuned to the portfolio's neon cyber/indigo aesthetic
const PIXEL_COLORS = [
  { r: 99, g: 102, b: 241 },   // Indigo 500
  { r: 129, g: 140, b: 248 }, // Indigo 400
  { r: 165, g: 180, b: 252 }, // Indigo 300
  { r: 168, g: 85, b: 247 },  // Purple 500
  { r: 192, g: 132, b: 252 }, // Purple 400
  { r: 56, g: 189, b: 248 },  // Sky 400
  { r: 248, g: 250, b: 252 }, // Crisp White Spark
];

// Discrete square pixel sizes: smaller and subtler to keep reading unobstructed
const PIXEL_SIZES = [2, 2.5, 3, 4, 5, 6];

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const lastMouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const spawnPixel = (x, y, vx, vy) => {
      const color = PIXEL_COLORS[Math.floor(Math.random() * PIXEL_COLORS.length)];
      const size = PIXEL_SIZES[Math.floor(Math.random() * PIXEL_SIZES.length)];

      // Random flutter/ejection angle with gentler spread
      const spreadAngle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.4 + 0.4;

      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        // Gentler momentum influence so trail stays closer to cursor path
        vx: vx * 0.18 + Math.cos(spreadAngle) * speed,
        vy: vy * 0.18 + Math.sin(spreadAngle) * speed - 0.45,
        size,
        color,
        alpha: 0.75, // Semi-transparent start so it doesn't mask text
        fadeSpeed: Math.random() * 0.024 + 0.02, // Dissolves more quickly
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.12,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.07 + 0.03,
        wobbleAmp: Math.random() * 0.9 + 0.3,
      });
    };

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      const lastX = lastMouseRef.current.x ?? currentX;
      const lastY = lastMouseRef.current.y ?? currentY;

      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const dist = Math.hypot(dx, dy);

      // Thinned-out spawn rate for a lighter, more delicate trail
      const steps = Math.min(Math.max(Math.floor(dist / 16), 1), 6);
      for (let i = 0; i < steps; i++) {
        const t = (i + 1) / steps;
        const interpX = lastX + dx * t;
        const interpY = lastY + dy * t;

        spawnPixel(interpX, interpY, dx * 0.08, dy * 0.08);

        // Occasional extra speck only on high-speed gestures
        if (dist > 45 && Math.random() > 0.75) {
          spawnPixel(interpX, interpY, dx * 0.08, dy * 0.08);
        }
      }

      // Compact maximum active particle ceiling
      if (particlesRef.current.length > 95) {
        particlesRef.current.splice(0, particlesRef.current.length - 95);
      }

      lastMouseRef.current = { x: currentX, y: currentY };
    };

    const handleMouseLeave = () => {
      lastMouseRef.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Fluttering physics: air resistance, buoyancy, and sinusoidal wobble
        p.wobblePhase += p.wobbleSpeed;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.vy -= 0.035; // gentle upward buoyancy like digital embers / flakes

        p.x += p.vx + Math.sin(p.wobblePhase) * p.wobbleAmp;
        p.y += p.vy + Math.cos(p.wobblePhase) * (p.wobbleAmp * 0.5);
        p.rotation += p.rotSpeed;
        p.alpha -= p.fadeSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Render crisp rotating pixel square
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
    />
  );
}
