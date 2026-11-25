import { motion } from 'motion/react';
import logo from '../assets/images/marca.svg';
import fondoWeb from '../assets/images/fondo_web.jpg';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="differentiators" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fondoWeb} 
          alt="Fondo AVICH" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-purple-50/80"></div>
      </div>

      {/* Trama viva molecular con colores del logo */}
      <MolecularBackground variant="whyus" className="z-[1] opacity-75" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <img src={logo} alt="AVICH" className="w-full max-w-[280px] md:max-w-[400px] h-auto object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">{t.whyUs.tag}</h2>
            <div className="bg-white border border-[#6A00C8]/15 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-3 sm:space-y-3.5">
                {t.whyUs.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6A00C8] shrink-0" />
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1a1640] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
