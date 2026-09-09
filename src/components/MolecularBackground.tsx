import { motion } from 'motion/react';
import { useId } from 'react';

interface MolecularBackgroundProps {
  variant?: 'about' | 'whyus' | 'services' | 'process';
  className?: string;
}

// Genera puntos para un hexágono regular centrado en (cx, cy) con radio r
function getHexPoints(cx: number, cy: number, r: number) {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(' ');
}

// Configuración de la red hexagonal inspirada en el logo de AVICH
const configs = {
  about: {
    hexRings: [
      { cx: 90, cy: 120, r: 44, color: 'grad-purple', strokeWidth: 1.2, fill: 'grad-purple', fillOpacity: 0.02, delay: 0 },
      { cx: 155, cy: 82, r: 28, color: 'grad-orange', strokeWidth: 1, fill: 'grad-orange', fillOpacity: 0.015, delay: 1.2 },
      { cx: 155, cy: 158, r: 28, color: '#a83d95', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 2 },
      { cx: 35, cy: 152, r: 22, color: '#481b7e', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 3 },
      { cx: 890, cy: 190, r: 52, color: 'grad-full', strokeWidth: 1.3, fill: 'grad-full', fillOpacity: 0.02, delay: 0.8 },
      { cx: 970, cy: 144, r: 34, color: 'grad-orange', strokeWidth: 1, fill: '#c87247', fillOpacity: 0.015, delay: 2.2 },
      { cx: 970, cy: 236, r: 34, color: '#78368c', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 1.5 },
      { cx: 810, cy: 236, r: 30, color: 'grad-purple', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 3.5 },
      { cx: 510, cy: 170, r: 26, color: '#a83d95', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 1.8 },
      { cx: 220, cy: 450, r: 48, color: 'grad-full', strokeWidth: 1.2, fill: 'grad-full', fillOpacity: 0.02, delay: 1 },
      { cx: 295, cy: 406, r: 32, color: '#c87247', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 2.5 },
      { cx: 820, cy: 470, r: 44, color: 'grad-orange', strokeWidth: 1.1, fill: 'grad-orange', fillOpacity: 0.015, delay: 1.7 },
      { cx: 886, cy: 432, r: 28, color: '#481b7e', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 3.1 },
    ],
    bonds: [
      { x1: 90, y1: 120, x2: 155, y2: 82, color: '#672985' },
      { x1: 90, y1: 120, x2: 155, y2: 158, color: '#78368c' },
      { x1: 90, y1: 120, x2: 35, y2: 152, color: '#481b7e' },
      { x1: 890, y1: 190, x2: 970, y2: 144, color: '#c87247' },
      { x1: 890, y1: 190, x2: 970, y2: 236, color: '#8d3588' },
      { x1: 890, y1: 190, x2: 810, y2: 236, color: '#672985' },
      { x1: 220, y1: 450, x2: 295, y2: 406, color: '#c87247' },
      { x1: 820, y1: 470, x2: 886, y2: 432, color: '#a83d95' },
    ]
  },
  whyus: {
    hexRings: [
      { cx: 180, cy: 160, r: 54, color: 'grad-full', strokeWidth: 1.4, fill: 'grad-full', fillOpacity: 0.025, delay: 0 },
      { cx: 265, cy: 110, r: 36, color: 'grad-orange', strokeWidth: 1.1, fill: '#c87247', fillOpacity: 0.015, delay: 1.5 },
      { cx: 265, cy: 210, r: 36, color: '#78368c', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 2.5 },
      { cx: 95, cy: 210, r: 32, color: '#481b7e', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 0.8 },
      { cx: 820, cy: 280, r: 48, color: 'grad-purple', strokeWidth: 1.2, fill: 'grad-purple', fillOpacity: 0.02, delay: 1.2 },
      { cx: 890, cy: 240, r: 30, color: 'grad-orange', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 2.8 },
      { cx: 750, cy: 320, r: 28, color: '#a83d95', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 3.2 },
      { cx: 480, cy: 380, r: 38, color: 'grad-orange', strokeWidth: 1.1, fill: '#d9895c', fillOpacity: 0.015, delay: 2.1 },
      { cx: 535, cy: 348, r: 24, color: '#481b7e', strokeWidth: 0.8, fill: 'transparent', fillOpacity: 0, delay: 0.5 },
    ],
    bonds: [
      { x1: 180, y1: 160, x2: 265, y2: 110, color: '#c87247' },
      { x1: 180, y1: 160, x2: 265, y2: 210, color: '#a83d95' },
      { x1: 180, y1: 160, x2: 95, y2: 210, color: '#481b7e' },
      { x1: 820, y1: 280, x2: 890, y2: 240, color: '#c87247' },
      { x1: 820, y1: 280, x2: 750, y2: 320, color: '#672985' },
      { x1: 480, y1: 380, x2: 535, y2: 348, color: '#d9895c' },
    ]
  },
  services: {
    hexRings: [
      { cx: 110, cy: 240, r: 46, color: 'grad-full', strokeWidth: 1.2, fill: 'grad-full', fillOpacity: 0.02, delay: 0.5 },
      { cx: 180, cy: 200, r: 32, color: 'grad-purple', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 1.8 },
      { cx: 180, cy: 280, r: 30, color: '#c87247', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 2.7 },
      { cx: 550, cy: 80, r: 38, color: 'grad-orange', strokeWidth: 1.1, fill: '#c87247', fillOpacity: 0.015, delay: 1.1 },
      { cx: 610, cy: 45, r: 24, color: '#a83d95', strokeWidth: 0.8, fill: 'transparent', fillOpacity: 0, delay: 2.9 },
      { cx: 940, cy: 300, r: 52, color: 'grad-full', strokeWidth: 1.3, fill: 'grad-full', fillOpacity: 0.02, delay: 0.9 },
      { cx: 1015, cy: 256, r: 34, color: '#c87247', strokeWidth: 1, fill: 'transparent', fillOpacity: 0, delay: 2.4 },
      { cx: 865, cy: 344, r: 32, color: '#481b7e', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 3.4 },
      { cx: 380, cy: 470, r: 42, color: 'grad-purple', strokeWidth: 1.1, fill: 'grad-purple', fillOpacity: 0.015, delay: 1.6 },
      { cx: 445, cy: 432, r: 28, color: 'grad-orange', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 2.3 },
      { cx: 720, cy: 490, r: 40, color: 'grad-orange', strokeWidth: 1, fill: '#d9895c', fillOpacity: 0.015, delay: 0.8 },
    ],
    bonds: [
      { x1: 110, y1: 240, x2: 180, y2: 200, color: '#672985' },
      { x1: 110, y1: 240, x2: 180, y2: 280, color: '#c87247' },
      { x1: 550, y1: 80, x2: 610, y2: 45, color: '#a83d95' },
      { x1: 940, y1: 300, x2: 1015, y2: 256, color: '#c87247' },
      { x1: 940, y1: 300, x2: 865, y2: 344, color: '#481b7e' },
      { x1: 380, y1: 470, x2: 445, y2: 432, color: '#a83d95' },
      { x1: 720, y1: 490, x2: 660, y2: 455, color: '#d9895c' },
    ]
  },
  process: {
    hexRings: [
      { cx: 920, cy: 120, r: 50, color: 'grad-full', strokeWidth: 1.3, fill: 'grad-full', fillOpacity: 0.025, delay: 0.4 },
      { cx: 995, cy: 76, r: 34, color: 'grad-orange', strokeWidth: 1, fill: '#c87247', fillOpacity: 0.015, delay: 1.9 },
      { cx: 995, cy: 164, r: 32, color: '#78368c', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 2.6 },
      { cx: 845, cy: 164, r: 30, color: '#481b7e', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 1.1 },
      { cx: 860, cy: 380, r: 46, color: 'grad-purple', strokeWidth: 1.2, fill: 'grad-purple', fillOpacity: 0.02, delay: 1.3 },
      { cx: 930, cy: 340, r: 30, color: 'grad-orange', strokeWidth: 0.9, fill: 'transparent', fillOpacity: 0, delay: 2.8 },
      { cx: 790, cy: 420, r: 28, color: '#a83d95', strokeWidth: 0.8, fill: 'transparent', fillOpacity: 0, delay: 0.7 },
      { cx: 120, cy: 380, r: 42, color: 'grad-orange', strokeWidth: 1, fill: '#c87247', fillOpacity: 0.015, delay: 2.0 },
      { cx: 185, cy: 342, r: 26, color: '#672985', strokeWidth: 0.8, fill: 'transparent', fillOpacity: 0, delay: 3.1 },
      { cx: 500, cy: 500, r: 36, color: 'grad-full', strokeWidth: 1, fill: 'grad-full', fillOpacity: 0.015, delay: 1.5 },
    ],
    bonds: [
      { x1: 920, y1: 120, x2: 995, y2: 76, color: '#c87247' },
      { x1: 920, y1: 120, x2: 995, y2: 164, color: '#a83d95' },
      { x1: 920, y1: 120, x2: 845, y2: 164, color: '#481b7e' },
      { x1: 860, y1: 380, x2: 930, y2: 340, color: '#c87247' },
      { x1: 860, y1: 380, x2: 790, y2: 420, color: '#78368c' },
      { x1: 120, y1: 380, x2: 185, y2: 342, color: '#672985' },
    ]
  }
};

export default function MolecularBackground({
  variant = 'about',
  className = ''
}: MolecularBackgroundProps) {
  const uniqueId = useId().replace(/:/g, '');
  const data = configs[variant] || configs.about;

  const gradFull = `url(#full-${uniqueId})`;
  const gradPurple = `url(#purp-${uniqueId})`;
  const gradOrange = `url(#oran-${uniqueId})`;

  const resolveColor = (c: string) => {
    if (c === 'grad-full') return gradFull;
    if (c === 'grad-purple') return gradPurple;
    if (c === 'grad-orange') return gradOrange;
    return c;
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Resplandores ambientales ultra tenues y desaturados */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#481b7e]/8 via-[#78368c]/5 to-transparent blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-gradient-to-bl from-[#c87247]/6 via-[#a83d95]/4 to-transparent blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-[#672985]/6 via-[#481b7e]/5 to-transparent blur-3xl" />

      {/* SVG con trama hexagonal molecular transparente y orgánica */}
      <svg
        viewBox="0 0 1100 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-35 md:opacity-45"
      >
        <defs>
          <linearGradient id={`full-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#481b7e" />
            <stop offset="45%" stopColor="#672985" />
            <stop offset="70%" stopColor="#a83d95" />
            <stop offset="100%" stopColor="#c87247" />
          </linearGradient>

          <linearGradient id={`purp-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#481b7e" />
            <stop offset="50%" stopColor="#78368c" />
            <stop offset="100%" stopColor="#a83d95" />
          </linearGradient>

          <linearGradient id={`oran-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a83d95" />
            <stop offset="45%" stopColor="#c87247" />
            <stop offset="100%" stopColor="#d9895c" />
          </linearGradient>
        </defs>

        {/* 1. Enlaces moleculares (líneas con movimiento y flujo sutil) */}
        <g className="opacity-40">
          {data.bonds.map((bond, idx) => (
            <motion.line
              key={`b-${idx}`}
              x1={bond.x1}
              y1={bond.y1}
              x2={bond.x2}
              y2={bond.y2}
              stroke={resolveColor(bond.color)}
              strokeWidth={0.9}
              strokeDasharray="4 3"
              animate={{
                strokeDashoffset: [0, -28],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 7 + (idx % 3),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </g>

        {/* 2. Células y hexágonos estilo laboratorio - limpios, sin círculos internos */}
        {data.hexRings.map((hex, idx) => {
          const dx = ((idx * 13) % 15) - 7;
          const dy = ((idx * 19) % 15) - 7;
          const rot = (idx % 2 === 0 ? 1 : -1) * 6;

          return (
            <motion.g
              key={`h-${idx}`}
              animate={{
                x: [0, dx, 0, -dx * 0.7, 0],
                y: [0, dy, 0, -dy * 0.7, 0],
                rotate: [0, rot, 0, -rot, 0],
                scale: [1, 1.025, 0.985, 1],
              }}
              transition={{
                duration: 10 + (idx % 4) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: hex.delay,
              }}
              style={{ transformOrigin: `${hex.cx}px ${hex.cy}px` }}
            >
              {/* Hexágono regular limpio */}
              <polygon
                points={getHexPoints(hex.cx, hex.cy, hex.r)}
                stroke={resolveColor(hex.color)}
                strokeWidth={hex.strokeWidth}
                fill={hex.fill === 'transparent' ? 'transparent' : resolveColor(hex.fill)}
                fillOpacity={hex.fillOpacity}
                strokeLinejoin="round"
                className="opacity-70"
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
