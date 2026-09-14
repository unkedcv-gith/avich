import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import biogenesisLogo from '../assets/images/logo-biogenesisbago.svg';

interface ClientLogo {
  id: string;
  name: string;
  subtitle: string;
  svg: JSX.Element;
}

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const clientLogos: ClientLogo[] = [
    {
      id: 'biogenesisbago',
      name: 'BIOGÉNESIS BAGÓ',
      subtitle: 'SALUD ANIMAL',
      svg: (
        <img 
          src={biogenesisLogo} 
          alt="Biogénesis Bagó" 
          className="h-12 md:h-15 w-auto max-w-[210px] object-contain drop-shadow-sm brightness-110 scale-110 md:scale-115" 
        />
      )
    },
    {
      id: 'pharmavet',
      name: 'PHARMAVET',
      subtitle: 'ANIMAL HEALTH',
      svg: (
        <svg viewBox="0 0 220 60" className="w-full h-12 md:h-14 fill-current">
          <defs>
            <linearGradient id="pharma-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38307E" />
              <stop offset="100%" stopColor="#FD8548" />
            </linearGradient>
          </defs>
          {/* Icon */}
          <g transform="translate(10, 8)">
            <rect x="2" y="10" width="38" height="24" rx="12" fill="none" stroke="url(#pharma-grad)" strokeWidth="3.5" />
            <path d="M 21,10 L 21,34" stroke="#FD8548" strokeWidth="2.5" />
            <path d="M 12,22 L 30,22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="21" cy="7" r="2.5" fill="#FD8548" />
            <circle cx="21" cy="37" r="2.5" fill="#6A00C8" />
          </g>
          {/* Typography */}
          <text x="60" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" letterSpacing="1" fill="#FFFFFF">
            PHARMAVET
          </text>
          <text x="61" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="2.5" fill="#FD8548">
            ANIMAL HEALTH
          </text>
        </svg>
      )
    },
    {
      id: 'agrosintesis',
      name: 'AGROSÍNTESIS',
      subtitle: 'DESARROLLOS VET',
      svg: (
        <svg viewBox="0 0 230 60" className="w-full h-12 md:h-14 fill-current">
          <defs>
            <linearGradient id="agro-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#25D366" />
              <stop offset="100%" stopColor="#FD8548" />
            </linearGradient>
          </defs>
          {/* Icon */}
          <g transform="translate(12, 10)">
            <polygon points="20,0 37,10 37,30 20,40 3,30 3,10" fill="none" stroke="url(#agro-grad)" strokeWidth="3" strokeLinejoin="round" />
            <path d="M 20,8 L 30,14 L 30,26 L 20,32 L 10,26 L 10,14 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
            <circle cx="20" cy="20" r="5" fill="#FD8548" />
          </g>
          {/* Typography */}
          <text x="60" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="1" fill="#FFFFFF">
            AGROSÍNTESIS
          </text>
          <text x="61" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8.5" letterSpacing="3" fill="#9AE6B4">
            DESARROLLOS VET
          </text>
        </svg>
      )
    },
    {
      id: 'lsa',
      name: 'LSA PHARMA',
      subtitle: 'SANIDAD ANIMAL',
      svg: (
        <svg viewBox="0 0 220 60" className="w-full h-12 md:h-14 fill-current">
          {/* Shield Icon */}
          <g transform="translate(10, 8)">
            <path d="M 20,2 L 38,9 C 38,26 28,38 20,42 C 12,38 2,26 2,9 Z" fill="none" stroke="#FD8548" strokeWidth="3" strokeLinejoin="round" />
            <path d="M 12,20 Q 17,12 20,20 Q 23,28 28,20" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="31" r="3" fill="#FD8548" />
          </g>
          {/* Typography */}
          <text x="58" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="2" fill="#FFFFFF">
            LSA PHARMA
          </text>
          <text x="59" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="3" fill="#C4B5FD">
            SANIDAD ANIMAL
          </text>
        </svg>
      )
    },
    {
      id: 'vetbiotech',
      name: 'VETBIOTECH',
      subtitle: 'SOLUCIONES VETERINARIAS',
      svg: (
        <svg viewBox="0 0 240 60" className="w-full h-12 md:h-14 fill-current">
          <defs>
            <linearGradient id="vetbio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6A00C8" />
              <stop offset="50%" stopColor="#FD8548" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          {/* Biotech Icon */}
          <g transform="translate(10, 8)">
            <path d="M 14,4 L 26,4 L 26,14 L 34,34 C 36,38 32,42 27,42 L 13,42 C 8,42 4,38 6,34 L 14,14 Z" fill="none" stroke="url(#vetbio-grad)" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="16" cy="32" r="3" fill="#FD8548" />
            <circle cx="24" cy="26" r="2.5" fill="#6A00C8" />
            <circle cx="20" cy="36" r="2" fill="#FFFFFF" />
          </g>
          {/* Typography */}
          <text x="58" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" letterSpacing="1.5" fill="#FFFFFF">
            VETBIOTECH
          </text>
          <text x="59" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="2" fill="#FD8548">
            SOLUCIONES VETERINARIAS
          </text>
        </svg>
      )
    }
  ];

  // Auto-advance logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, clientLogos.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogos.length) % clientLogos.length);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Create marquee loop (duplicated logos for endless continuous marquee view on desktop)
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-16 md:py-20 bg-[#151233] relative overflow-hidden border-t border-b border-white/5">
      {/* Background Molecular Mesh */}
      <MolecularBackground variant="services" className="opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FD8548] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2"
          >
            Trayectoria y Confianza
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight"
          >
            Clientes que confían en nosotros
          </motion.h3>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Acompañamos a laboratorios veterinarios líderes en cada fase del desarrollo, registro y cumplimiento normativo VICH.
          </p>
        </div>

        {/* --- 1. DESKTOP & TABLET INFINITE MARQUEE CAROUSEL --- */}
        <div 
          className="hidden md:block relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle side fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#151233] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#151233] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center">
            <motion.div 
              className="flex items-center gap-10 md:gap-16 whitespace-nowrap"
              animate={{ x: isPaused ? undefined : ['0%', '-33.333%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {marqueeLogos.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-52 md:w-60 h-24 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FD8548]/50 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center p-4 group cursor-pointer shadow-sm hover:shadow-[0_8px_25px_rgba(253,133,72,0.15)] hover:-translate-y-1"
                >
                  <div className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    {client.svg}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- 2. MOBILE INTERACTIVE CAROUSEL SLIDER --- */}
        <div className="block md:hidden relative">
          <div 
            className="overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 shadow-xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center py-4"
            >
              <div className="w-full max-w-[270px] h-24 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center p-3 shadow-inner overflow-hidden">
                {clientLogos[currentIndex].svg}
              </div>
              <p className="text-white font-semibold text-base mt-4">
                {clientLogos[currentIndex].name}
              </p>
              <p className="text-xs text-[#FD8548] font-medium tracking-wider uppercase">
                {clientLogos[currentIndex].subtitle}
              </p>
            </motion.div>

            {/* Navigation Buttons for Mobile */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all z-10"
              aria-label="Cliente anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all z-10"
              aria-label="Cliente siguiente"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {clientLogos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-[#FD8548]' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir al cliente ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
