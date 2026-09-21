import { motion } from 'motion/react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

export default function WorkModel() {
  const { t } = useLanguage();

  return (
    <section id="work-model" className="py-16 md:py-24 bg-[#1a1640] relative overflow-hidden">
      <MolecularBackground variant="about" className="opacity-25" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{t.workModel.tag}</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            {t.workModel.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-300">
            {t.workModel.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Modalidad 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col h-full"
          >
            <h4 className="text-[#C800D6] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">{t.workModel.m1.tag}</h4>
            <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{t.workModel.m1.title}</h5>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t.workModel.m1.desc}
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
              {t.workModel.m1.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C800D6] shrink-0" />
                  <span className="text-gray-200 text-sm sm:text-base">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-400">
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
            className="bg-[#38307E] border border-[#6A00C8]/30 rounded-2xl md:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col h-full shadow-2xl"
          >
            <h4 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">{t.workModel.m2.tag}</h4>
            <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{t.workModel.m2.title}</h5>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t.workModel.m2.desc}
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
              {t.workModel.m2.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FD8548] shrink-0 rotate-45" />
                  <span className="text-gray-200 text-sm sm:text-base">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-400">
                {t.workModel.m2.footer}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
          <div className="w-6 h-6 rounded-full border-2 border-[#FD8548] text-[#FD8548] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-xs font-bold">!</span>
          </div>
          <p className="text-gray-300 text-sm md:text-base">
            <strong className="text-white font-semibold">{t.workModel.noteBold}</strong> {t.workModel.noteText}
          </p>
        </div>
      </div>
    </section>
  );
}
