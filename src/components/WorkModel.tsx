import { motion } from 'motion/react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

export default function WorkModel() {
  const { t } = useLanguage();

  return (
    <section id="work-model" className="py-16 md:py-24 bg-[#6A00C8] text-white relative overflow-hidden">
      {/* Trama molecular con temática lila: pentágonos blancos/naranjas y líneas finas estables */}
      <MolecularBackground variant="about" theme="lilac" className="opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm border border-white/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FD8548]" />
            <span>{t.workModel.tag}</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            {t.workModel.title}
          </h3>
          <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
            {t.workModel.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Modalidad 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-white/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col h-full shadow-2xl text-[#1a1640]"
          >
            <h4 className="text-[#6A00C8] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">{t.workModel.m1.tag}</h4>
            <h5 className="text-2xl sm:text-3xl font-bold text-[#1a1640] mb-4 sm:mb-6">{t.workModel.m1.title}</h5>
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t.workModel.m1.desc}
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
              {t.workModel.m1.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#6A00C8] shrink-0" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 sm:pt-8 border-t border-purple-100">
              <p className="text-xs sm:text-sm text-gray-500">
                {t.workModel.m1.footer}
              </p>
            </div>
          </motion.div>

          {/* Modalidad 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-white/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col h-full shadow-2xl text-[#1a1640]"
          >
            <h4 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">{t.workModel.m2.tag}</h4>
            <h5 className="text-2xl sm:text-3xl font-bold text-[#1a1640] mb-4 sm:mb-6">{t.workModel.m2.title}</h5>
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t.workModel.m2.desc}
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
              {t.workModel.m2.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FD8548] shrink-0" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 sm:pt-8 border-t border-purple-100">
              <p className="text-xs sm:text-sm text-gray-500">
                {t.workModel.m2.footer}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Note box */}
        <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 shadow-lg text-white">
          <div className="w-6 h-6 rounded-full border-2 border-white text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
            <span>!</span>
          </div>
          <p className="text-white/95 text-sm md:text-base font-normal leading-relaxed">
            <strong className="text-white font-bold">{t.workModel.noteBold}</strong> {t.workModel.noteText}
          </p>
        </div>
      </div>
    </section>
  );
}
