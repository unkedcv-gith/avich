import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import biogenesisLogo from '../logos/logo-biogenesisbago.jpg';
import boehLogo from '../logos/logo-boeh.jpg';
import chemoLogo from '../logos/logo-chemo.jpg';
import senasaLogo from '../logos/logo-senasa.jpg';
import { useLanguage } from '../context/LanguageContext';

interface ClientLogo {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const { t } = useLanguage();

  const clientLogos: ClientLogo[] = [
    {
      id: 'biogenesisbago',
      name: 'Biogénesis Bagó',
      subtitle: 'La evolución de la salud animal',
      image: biogenesisLogo
    },
    {
      id: 'boehringer-ingelheim',
      name: 'Boehringer Ingelheim',
      subtitle: 'Salud Animal',
      image: boehLogo
    },
    {
      id: 'senasa',
      name: 'SENASA',
      subtitle: 'Sanidad y Calidad Agroalimentaria',
      image: senasaLogo
    },
    {
      id: 'chemo',
      name: 'Chemo',
      subtitle: 'Salud Animal',
      image: chemoLogo
    }
  ];

  // Auto-advance logic for mobile carousel
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

  return (
    <section id="clients" className="py-16 md:py-20 bg-white relative overflow-hidden border-t border-b border-purple-100">
      {/* Background Molecular Mesh */}
      <MolecularBackground variant="services" className="opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FD8548] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2"
          >
            {t.clients.tag}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1640] leading-tight"
          >
            {t.clients.title}
          </motion.h3>
          <p className="text-gray-600 text-sm md:text-base mt-3 max-w-xl mx-auto">
            {t.clients.subtitle}
          </p>
        </div>

        {/* --- 1. DESKTOP & TABLET 4-LOGO GRID --- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="h-28 lg:h-32 rounded-2xl bg-white border border-purple-200 hover:border-[#FD8548]/50 transition-all duration-300 flex items-center justify-center p-5 group shadow-xs hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={client.image}
                alt={client.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* --- 2. MOBILE INTERACTIVE CAROUSEL SLIDER --- */}
        <div
          className="block md:hidden relative"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className="overflow-hidden py-2"
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
              <div className="w-full max-w-[270px] h-28 rounded-2xl bg-white border border-purple-200 flex items-center justify-center p-4 shadow-xs overflow-hidden">
                <img
                  src={clientLogos[currentIndex].image}
                  alt={clientLogos[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full w-auto object-contain mix-blend-multiply"
                />
              </div>
              <p className="text-[#1a1640] font-semibold text-base mt-4">
                {clientLogos[currentIndex].name}
              </p>
              <p className="text-xs text-[#FD8548] font-medium tracking-wider uppercase">
                {clientLogos[currentIndex].subtitle}
              </p>
            </motion.div>

            {/* Navigation Buttons for Mobile */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-purple-200 text-[#1a1640] flex items-center justify-center active:scale-95 shadow-md transition-all z-10"
              aria-label={t.clients.prevAria}
            >
              <ChevronLeft className="w-5 h-5 text-[#1a1640]" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-purple-200 text-[#1a1640] flex items-center justify-center active:scale-95 shadow-md transition-all z-10"
              aria-label={t.clients.nextAria}
            >
              <ChevronRight className="w-5 h-5 text-[#1a1640]" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {clientLogos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-[#FD8548]' : 'w-2 bg-gray-300 hover:bg-gray-400'
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
