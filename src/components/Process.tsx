import { motion } from 'motion/react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative py-16 md:py-24 bg-[#FD8548] text-white overflow-hidden">
      {/* Trama molecular con temática naranja: pentágonos blancos/violetas y líneas finas estables */}
      <MolecularBackground variant="process" theme="orange" className="opacity-85" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado: Título y tag alineados arriba de la sección */}
        {/* Encabezado: Título y tag alineados arriba de la sección en una sola línea */}
        <div className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38307E] text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>{t.process.tag}</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight md:whitespace-nowrap">
            {t.process.title}
          </h3>
        </div>

        {/* Bloque alineado: El itemizado (pasos 1 a 4) y la tarjeta de Estándares y valores arrancan y terminan juntos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Columna Izquierda: Pasos 1 a 4 */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-0 divide-y divide-white/25">
              {t.process.steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 sm:gap-6 py-5 sm:py-6 first:pt-0 last:pb-0 relative"
                >
                  {/* Violet accent circle */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#38307E] flex items-center justify-center text-white font-bold text-base sm:text-xl shrink-0 shadow-lg border-2 border-white/40">
                    {index + 1}
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">{step.title}</h4>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Estándares y valores alineada desde 1 (Definición) hasta 4 (Informe y registro) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-white/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1a1640] flex flex-col justify-between h-full"
            >
              <div>
                <h4 className="text-[#6A00C8] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">
                  {t.process.cardTag}
                </h4>
                <h5 className="text-xl sm:text-2xl font-bold text-[#1a1640] mb-3 sm:mb-5 leading-snug">
                  {t.process.cardTitle}
                </h5>
                <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                  {t.process.cardDesc}
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
                  {t.process.tags.map((tagItem, idx) => (
                    <span key={idx} className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#6A00C8]/25 bg-purple-50 text-[#6A00C8] text-xs sm:text-sm font-semibold">
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3.5 pt-4 border-t border-purple-100">
                {t.process.values.map((val, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6A00C8] shrink-0" />
                    <span className="text-gray-800 text-sm font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
