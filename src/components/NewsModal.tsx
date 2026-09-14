import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Megaphone, Calendar, ArrowRight, Check } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

const newsList: NewsItem[] = [
  {
    id: 1,
    date: "Septiembre 2026",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Científico en laboratorio observando a través de microscopio",
    title: "Ampliamos nuestra capacidad analítica VICH para registros veterinarios",
    description: "Incorporamos tecnología de punta y equipamiento automatizado en nuestro laboratorio, superando las 15.000 muestras mensuales con máxima precisión y trazabilidad auditada para la región."
  },
  {
    id: 2,
    date: "Septiembre 2026",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ensayos de laboratorio y biotecnología veterinaria AVICH",
    title: "Nuevos protocolos de eficacia y seguridad para biológicos veterinarios",
    description: "Fortalecemos nuestra oferta de ensayos clínicos y de campo bajo estándares VICH GL9 (GCP), ofreciendo a los laboratorios acompañamiento integral de punta a punta en el proceso regulatorio."
  }
];

export default function NewsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Open modal on load after a brief smooth delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < newsList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  const currentNews = newsList[currentIndex];
  const isLast = currentIndex === newsList.length - 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur & Overlay (Clicking outside closes modal) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card with Glassmorphism Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#1a1640]/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-white overflow-hidden my-8"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#FD8548]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#6A00C8]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Header Tag & Close Button */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FD8548] text-xs font-bold uppercase tracking-wider">
                <Megaphone className="w-3.5 h-3.5 text-[#FD8548]" />
                Novedades ({currentIndex + 1}/{newsList.length})
              </div>

              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all duration-200"
                aria-label="Cerrar novedad"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* News Item Animated Content Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                {/* News Featured Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 border border-white/15 shadow-lg group">
                  <img
                    src={currentNews.image}
                    alt={currentNews.imageAlt}
                    className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1640]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-gray-300 font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    <Calendar className="w-3 h-3 text-[#FD8548]" />
                    {currentNews.date}
                  </div>
                </div>

                {/* News Title & Description */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                    {currentNews.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    {currentNews.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Footer with Dots and Next Button */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {newsList.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-[#FD8548]' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir a novedad ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FD8548] to-[#f26c23] hover:from-[#f26c23] hover:to-[#e05b12] text-white font-semibold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <span>{isLast ? "Entendido" : "Siguiente"}</span>
                {isLast ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
