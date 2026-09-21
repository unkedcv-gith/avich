import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PawPrint, Tractor, CheckCircle2, FlaskConical, FileText } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';
import felinosIcon from '../assets/icons/felinos.svg';
import caninosIcon from '../assets/icons/caninos.svg';
import caprinosIcon from '../assets/icons/caprinos.svg';
import equinosIcon from '../assets/icons/equinos.svg';
import bovinosIcon from '../assets/icons/bovinos.svg';
import ovinosIcon from '../assets/icons/ovinos.svg';
import avesIcon from '../assets/icons/aves.svg';

export default function Species() {
  const [selectedProduction, setSelectedProduction] = useState<number>(0);
  const [selectedCompanion, setSelectedCompanion] = useState<number>(0);
  const { t } = useLanguage();

  const productionIcons = [
    <img src={bovinosIcon} alt="Bovinos" className="w-8 h-8 md:w-11 md:h-11" />,
    <img src={ovinosIcon} alt="Ovinos" className="w-8 h-8 md:w-11 md:h-11" />,
    <img src={caprinosIcon} alt="Caprinos" className="w-8 h-8 md:w-11 md:h-11" />,
    <img src={equinosIcon} alt="Equinos" className="w-8 h-8 md:w-11 md:h-11" />,
    <img src={avesIcon} alt="Aves" className="w-8 h-8 md:w-11 md:h-11" />
  ];

  const companionIcons = [
    <img src={caninosIcon} alt="Caninos" className="w-8 h-8 md:w-11 md:h-11" />,
    <img src={felinosIcon} alt="Felinos" className="w-8 h-8 md:w-11 md:h-11" />
  ];

  const currentProduction = t.species.productionItems[selectedProduction] || t.species.productionItems[0];
  const currentCompanion = t.species.companionItems[selectedCompanion] || t.species.companionItems[0];

  return (
    <section id="species" className="py-16 md:py-24 bg-[#1a1640] relative overflow-hidden">
      <MolecularBackground variant="services" className="opacity-25" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">{t.species.tag}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 whitespace-pre-line">
            {t.species.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl font-light">
            {t.species.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Production Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#28225e] rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-10 text-white border border-[#38307E] transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient subtle light */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FD8548]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10"
                >
                  <Tractor className="w-6 h-6 md:w-8 md:h-8 text-[#FD8548]" />
                </motion.div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.species.productionTitle}</h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">{t.species.productionSub}</p>
                </div>
              </div>
              
              {/* Species Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
                {t.species.productionItems.map((item, index) => {
                  const isSelected = selectedProduction === index;
                  return (
                    <motion.button 
                      key={index} 
                      type="button"
                      onClick={() => setSelectedProduction(index)}
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`cursor-pointer rounded-full px-3.5 py-2 sm:px-4 sm:py-2 flex items-center gap-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                        isSelected 
                          ? 'bg-[#FD8548] text-white font-bold shadow-lg shadow-[#FD8548]/30 border-2 border-white/60 ring-2 ring-[#FD8548]/40' 
                          : 'bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10'
                      }`}
                    >
                      <div className="shrink-0 drop-shadow-sm">
                        {productionIcons[index]}
                      </div>
                      <span className="tracking-wide">{item.name}</span>
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-white animate-pulse' : 'bg-white/30'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Simulated Trial Description Section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentProduction.name}-${selectedProduction}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#141030]/95 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl mb-6 space-y-3.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD8548] bg-[#FD8548]/20 px-3 py-1 rounded-lg border border-[#FD8548]/40">
                      <FlaskConical className="w-4 h-4 text-[#FD8548]" />
                      {t.species.simulatedTrial} • {currentProduction.name}
                    </span>
                    <span className="text-xs text-gray-200 font-medium bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                      {currentProduction.trialType}
                    </span>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {currentProduction.trialTitle}
                  </h5>

                  <p className="text-sm text-gray-200 leading-relaxed font-normal">
                    {currentProduction.protocol}
                  </p>

                  <div className="pt-2 border-t border-white/15 flex flex-wrap gap-2">
                    {currentProduction.parameters.map((param, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="text-xs font-medium text-gray-100 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full shadow-sm"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#FD8548] shrink-0" />
              <span>{t.species.productionFooter}</span>
            </div>
          </motion.div>

          {/* Companion Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="group relative bg-[#C800D6] rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-10 text-white transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient subtle light */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/20"
                >
                  <PawPrint className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.species.companionTitle}</h4>
                  <p className="text-xs sm:text-sm text-white/85 font-light mt-0.5">{t.species.companionSub}</p>
                </div>
              </div>
              
              {/* Species Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
                {t.species.companionItems.map((item, index) => {
                  const isSelected = selectedCompanion === index;
                  return (
                    <motion.button 
                      key={index} 
                      type="button"
                      onClick={() => setSelectedCompanion(index)}
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`cursor-pointer rounded-full px-4 py-2 sm:px-5 sm:py-2 flex items-center gap-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                        isSelected 
                          ? 'bg-[#151036] text-white font-bold shadow-xl shadow-black/40 border-2 border-white ring-2 ring-white/30' 
                          : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                      }`}
                    >
                      <div className="shrink-0 drop-shadow-sm">
                        {companionIcons[index]}
                      </div>
                      <span className="tracking-wide text-white">{item.name}</span>
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-[#ff7ae0] animate-pulse' : 'bg-white/40'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Simulated Trial Description Section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentCompanion.name}-${selectedCompanion}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#141030]/95 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl mb-6 space-y-3.5 text-white"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ff7ae0] bg-[#ff7ae0]/20 px-3 py-1 rounded-lg border border-[#ff7ae0]/40">
                      <FileText className="w-4 h-4 text-[#ff7ae0]" />
                      {t.species.simulatedTrial} • {currentCompanion.name}
                    </span>
                    <span className="text-xs text-gray-200 font-medium bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                      {currentCompanion.trialType}
                    </span>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {currentCompanion.trialTitle}
                  </h5>

                  <p className="text-sm text-gray-200 leading-relaxed font-normal">
                    {currentCompanion.protocol}
                  </p>

                  <div className="pt-2 border-t border-white/15 flex flex-wrap gap-2">
                    {currentCompanion.parameters.map((param, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="text-xs font-medium text-gray-100 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full shadow-sm"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-xs sm:text-sm text-white/90">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>{t.species.companionFooter}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
