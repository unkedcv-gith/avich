import { motion } from 'motion/react';
import logo from '../assets/images/marca.svg';
import fondoWeb from '../assets/images/fondo_web.jpg';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="differentiators" className="relative py-16 md:py-24 bg-[#110e2d] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fondoWeb} 
          alt="Fondo AVICH" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#110e2d] via-[#110e2d]/85 to-[#110e2d]/50 mix-blend-multiply"></div>
      </div>

      {/* Trama viva molecular con colores del logo */}
      <MolecularBackground variant="whyus" className="z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <img src={logo} alt="AVICH" className="w-full max-w-[280px] md:max-w-[400px] h-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.whyUs.vichFooter}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">{t.whyUs.tag}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              {t.whyUs.title}
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                {t.whyUs.p1.beforeVich}
                <strong className="text-white font-semibold">{t.whyUs.p1.vichBold}</strong>
                {t.whyUs.p1.afterVich}
                <strong className="text-white font-semibold">{t.whyUs.p1.aBold}</strong>
                {t.whyUs.p1.afterA}
              </p>
              <p>
                {t.whyUs.p2}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
