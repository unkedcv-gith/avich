import { useEffect, useRef } from 'react';

interface MolecularBackgroundProps {
  variant?: 'about' | 'whyus' | 'services' | 'process';
  theme?: 'light' | 'orange' | 'lilac';
  className?: string;
}

export default function MolecularBackground({
  variant = 'about',
  theme = 'light',
  className = ''
}: MolecularBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Resize handler
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    resize();

    // Particle structure definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      rotation: number;
      vRot: number;
    }

    const particles: Particle[] = [];

    // Distinct palettes tailored by theme (balanced, softer opacity for background integration)
    const getThemeColors = () => {
      if (theme === 'orange') {
        return [
          'rgba(255, 255, 255, 0.55)', // Soft clean white
          'rgba(255, 255, 255, 0.42)', // Translucent white
          'rgba(56, 48, 126, 0.55)',   // Deep indigo-violet accent
          'rgba(106, 0, 200, 0.50)',   // Brand violet accent
          'rgba(200, 0, 214, 0.48)'    // Magenta accent
        ];
      }
      if (theme === 'lilac') {
        return [
          'rgba(255, 255, 255, 0.55)', // Soft clean white
          'rgba(255, 255, 255, 0.42)', // Translucent white
          'rgba(253, 133, 72, 0.55)',  // Copper/orange accent
          'rgba(255, 255, 255, 0.48)', // White
          'rgba(26, 22, 64, 0.50)'     // Deep violet
        ];
      }
      // Light theme (default) - directly matching logo violet & copper with softer opacity
      return [
        'rgba(106, 0, 200, 0.48)', // Brand violet
        'rgba(56, 48, 126, 0.48)', // Indigo violet
        'rgba(200, 0, 214, 0.44)', // Magenta violet
        'rgba(253, 133, 72, 0.50)', // Accent copper/orange
        'rgba(106, 0, 200, 0.48)'  // Brand violet
      ];
    };

    // Substantially reduced particle density: clean, airy, not crowded
    const getParticleCount = (w: number) => {
      let multiplier = 1;
      if (variant === 'services') multiplier = 1.1;
      if (variant === 'about') multiplier = 1;

      if (w < 640) return Math.max(5, Math.floor(7 * multiplier));
      if (w < 1024) return Math.max(8, Math.floor(12 * multiplier));
      return Math.max(12, Math.floor(17 * multiplier));
    };

    const initParticles = () => {
      particles.length = 0;
      const count = getParticleCount(width);
      const palette = getThemeColors();

      for (let i = 0; i < count; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)];

        // Varied sizes like in the logo: small, medium, and signature large pentagons
        const sizeRand = Math.random();
        let radius = 4.5;
        if (sizeRand < 0.55) {
          // Small nodes (4px to 6px)
          radius = Math.random() * 2 + 4;
        } else if (sizeRand < 0.85) {
          // Medium pentagons (8px to 11px)
          radius = Math.random() * 3 + 8;
        } else {
          // Large prominent pentagons as in the AVICH logo (14px to 18px)
          radius = Math.random() * 4 + 14;
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // Calm, smooth, steady drifting speed (no nervous vibrations)
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          radius,
          color,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.002
        });
      }
    };

    initParticles();

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Main animation draw loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Disable any shadows completely ("Que no tengan sombritas")
      ctx.shadowBlur = 0;

      // 1. Connection lines: ultra-thin, steady, with zero flickering
      const maxDistance = 160;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Smooth cosine falloff eliminates boundary popping/flickering entirely
            const ratio = dist / maxDistance;
            const smoothFactor = Math.cos(ratio * Math.PI * 0.5);

            if (smoothFactor > 0.03) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);

              // Stable theme line colors
              if (theme === 'orange') {
                ctx.strokeStyle = `rgba(255, 255, 255, ${(smoothFactor * 0.45).toFixed(3)})`;
              } else if (theme === 'lilac') {
                ctx.strokeStyle = `rgba(255, 255, 255, ${(smoothFactor * 0.4).toFixed(3)})`;
              } else {
                ctx.strokeStyle = `rgba(106, 0, 200, ${(smoothFactor * 0.35).toFixed(3)})`;
              }

              // Fine lines as requested ("lineas finitas y sin titileos")
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        // 2. Interactive mouse lines (subtle & fine)
        if (mouse.x > -500) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const smoothFactor = Math.cos((dist / 150) * Math.PI * 0.5);
            if (smoothFactor > 0.05) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(mouse.x, mouse.y);
              if (theme === 'orange' || theme === 'lilac') {
                ctx.strokeStyle = `rgba(255, 255, 255, ${(smoothFactor * 0.35).toFixed(3)})`;
              } else {
                ctx.strokeStyle = `rgba(106, 0, 200, ${(smoothFactor * 0.3).toFixed(3)})`;
              }
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Render regular PENTAGONS (5 sides) of varying sizes without shadows
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Smooth boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Regular 5-sided pentagon drawing
        ctx.beginPath();
        const sides = 5;
        for (let k = 0; k < sides; k++) {
          const angle = (2 * Math.PI / sides) * k - Math.PI / 2 + p.rotation;
          const px = p.x + p.radius * Math.cos(angle);
          const py = p.y + p.radius * Math.sin(angle);
          if (k === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();
        ctx.fillStyle = p.color;
        // Strictly flat without any shadow blur
        ctx.shadowBlur = 0;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [variant, theme]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Background ambient lighting */}
      {theme === 'orange' ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#38307E]/20 blur-[130px]" />
        </>
      ) : theme === 'lilac' ? (
        <>
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FD8548]/15 blur-[120px]" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#6A00C8]/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FD8548]/4 blur-[130px]" />
        </>
      )}

      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-65 pointer-events-auto"
      />
    </div>
  );
}
