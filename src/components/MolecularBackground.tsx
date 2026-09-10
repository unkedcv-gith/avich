import { useEffect, useRef } from 'react';

interface MolecularBackgroundProps {
  variant?: 'about' | 'whyus' | 'services' | 'process';
  className?: string;
}

export default function MolecularBackground({
  variant = 'about',
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

    // Use ResizeObserver to track container boundaries perfectly
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
      isOrange: boolean;
    }

    const particles: Particle[] = [];
    
    // Palette directly matching the user image: Deep purples, rich violets, and accent copper/orange
    const purpleColors = [
      'rgba(106, 0, 200, 0.45)',   // Vibrant Purple
      'rgba(120, 54, 140, 0.4)',   // Deep Purple-Pink
      'rgba(72, 27, 126, 0.35)',   // Dark Violet
      'rgba(147, 51, 234, 0.4)'    // Lavender
    ];
    const orangeColor = 'rgba(253, 133, 72, 0.7)'; // #FD8548 (Vibrant copper/orange node)

    // Adjust particle density based on variant and container width
    const getParticleCount = (w: number) => {
      let multiplier = 1;
      if (variant === 'services') multiplier = 1.2;
      if (variant === 'about') multiplier = 0.9;
      
      if (w < 640) return Math.floor(16 * multiplier);
      if (w < 1024) return Math.floor(32 * multiplier);
      return Math.floor(48 * multiplier);
    };

    const initParticles = () => {
      particles.length = 0;
      const count = getParticleCount(width);
      for (let i = 0; i < count; i++) {
        const isOrange = Math.random() < 0.22; // ~22% orange nodes like the screenshot
        const color = isOrange ? orangeColor : purpleColors[Math.floor(Math.random() * purpleColors.length)];
        const radius = isOrange 
          ? Math.random() * 2 + 3.5  // Orange particles are slightly larger focal points (3.5px to 5.5px)
          : Math.random() * 1.5 + 2; // Purple particles are smaller (2px to 3.5px)
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // Extremely slow, organic, fluid drifting speeds
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          radius,
          color,
          isOrange
        });
      }
    };

    initParticles();

    // Mouse interactive coordinates
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

      // 1. Connection lines (filetes moleculares un poco más gruesos y visibles)
      const maxDistance = 130;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Transparency and slightly higher opacity multiplier
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Connective lines blend based on particle types
            if (p1.isOrange || p2.isOrange) {
              ctx.strokeStyle = `rgba(253, 133, 72, ${alpha * 0.9})`;
            } else {
              ctx.strokeStyle = `rgba(106, 0, 200, ${alpha})`;
            }
            
            ctx.lineWidth = 1.35; // Thicker lines (filetes) as requested
            ctx.stroke();
          }
        }

        // 2. Interactive mouse lines
        if (mouse.x > -500) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(253, 133, 72, ${alpha * 0.7})`;
            ctx.lineWidth = 1.1; // Thicker mouse lines
            ctx.stroke();
          }
        }
      }

      // 3. Render and update molecular nodes (rendered as HEXAGONS)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Smooth boundary bounces
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Clip correction to keep nodes within standard viewport
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw regular hexagon for node
        ctx.beginPath();
        const sides = 6;
        const hexRadius = p.radius * 1.35; // Slightly scaled up for hexagon readability
        for (let k = 0; k < sides; k++) {
          const angle = (Math.PI / 3) * k - Math.PI / 6; // Standard point-up hex orientation
          const hx = p.x + hexRadius * Math.cos(angle);
          const hy = p.y + hexRadius * Math.sin(angle);
          if (k === 0) {
            ctx.moveTo(hx, hy);
          } else {
            ctx.lineTo(hx, hy);
          }
        }
        ctx.closePath();
        ctx.fillStyle = p.color;

        // Add visual glow to copper/orange focal points just like the image
        if (p.isOrange) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(253, 133, 72, 0.65)';
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for next draw
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup listeners and render loops
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [variant]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Soft color washes in background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6A00C8]/5 via-[#38307E]/3 to-transparent blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FD8548]/4 via-[#6A00C8]/2 to-transparent blur-[150px]" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-45 md:opacity-55 pointer-events-auto"
      />
    </div>
  );
}
