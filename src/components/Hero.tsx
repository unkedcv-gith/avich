import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/videos/hero.mp4';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-[#1a1640]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#38307E]/70 to-[#6A00C8]/55 z-10 mix-blend-multiply"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10 md:mt-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs md:text-sm lg:text-base mb-3 sm:mb-4">
            {t.hero.badge}
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
            {t.hero.title}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-sm mx-auto sm:max-w-none">
            <a 
              href="#services" 
              className="hidden sm:inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FD8548] rounded-full hover:bg-[#e0753d] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t.hero.ctaServices}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-all"
            >
              {t.hero.ctaAbout}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

