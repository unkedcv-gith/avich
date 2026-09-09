import { motion } from 'motion/react';
import { PawPrint, Tractor, CheckCircle2 } from 'lucide-react';
import felinosIcon from '../assets/icons/felinos.svg';
import caninosIcon from '../assets/icons/caninos.svg';
import caprinosIcon from '../assets/icons/caprinos.svg';
import equinosIcon from '../assets/icons/equinos.svg';
import bovinosIcon from '../assets/icons/bovinos.svg';
import ovinosIcon from '../assets/icons/ovinos.svg';
import avesIcon from '../assets/icons/aves.svg';

export default function Species() {
  const productionItems = [
    { name: "Bovinos", icon: <img src={bovinosIcon} alt="Bovinos" className="w-8 h-8 md:w-11 md:h-11" /> },
    { name: "Ovinos", icon: <img src={ovinosIcon} alt="Ovinos" className="w-8 h-8 md:w-11 md:h-11" /> },
    { name: "Caprinos", icon: <img src={caprinosIcon} alt="Caprinos" className="w-8 h-8 md:w-11 md:h-11" /> },
    { name: "Equinos", icon: <img src={equinosIcon} alt="Equinos" className="w-8 h-8 md:w-11 md:h-11" /> },
    { name: "Aves", icon: <img src={avesIcon} alt="Aves" className="w-8 h-8 md:w-11 md:h-11" /> }
  ];
  
  const companionItems = [
    { name: "Caninos", icon: <img src={caninosIcon} alt="Caninos" className="w-8 h-8 md:w-11 md:h-11" /> },
    { name: "Felinos", icon: <img src={felinosIcon} alt="Felinos" className="w-8 h-8 md:w-11 md:h-11" /> }
  ];

  return (
    <section id="species" className="py-16 md:py-24 bg-[#1a1640] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">Especies</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Producción y compañía,<br/> con el mismo rigor.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Production Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#28225e] hover:bg-[#2c2668] rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-12 text-white border border-[#38307E] hover:border-[#FD8548]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 overflow-hidden"
          >
            {/* Ambient subtle light */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FD8548]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FD8548]/15 transition-colors" />

            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 group-hover:bg-[#FD8548]/20 transition-all duration-300"
              >
                <Tractor className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#FD8548] transition-colors" />
              </motion.div>
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Animales de producción</h4>
                <p className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">Ensayos a corral y a campo</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6 sm:mb-10">
              {productionItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="group/pill cursor-pointer bg-white/10 hover:bg-white/20 border border-white/10 hover:border-[#FD8548]/50 rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2.5 text-sm sm:text-base transition-all duration-200 hover:shadow-md hover:shadow-black/20"
                >
                  <div className="shrink-0 transition-transform duration-300 group-hover/pill:scale-115 group-hover/pill:rotate-3">
                    {item.icon}
                  </div>
                  <span className="font-medium tracking-wide group-hover/pill:text-white transition-colors">{item.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/pill:bg-[#FD8548] transition-colors" />
                </motion.div>
              ))}
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Estudios a corral y a campo en establecimientos productivos, con manejo de lotes, tiempos de retiro y trazabilidad de cada animal.
            </p>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#FD8548] shrink-0" />
              <span>Monitoreo de bioseguridad y trazabilidad individual garantizada</span>
            </div>
          </motion.div>

          {/* Companion Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="group relative bg-[#C800D6] hover:bg-[#b800c6] rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-12 text-white transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 overflow-hidden"
          >
            {/* Ambient subtle light */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none group-hover:bg-white/25 transition-colors" />

            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 group-hover:bg-white/30 transition-all duration-300"
              >
                <PawPrint className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Animales de compañía</h4>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-0.5">Ensayos clínicos y veterinarias asociadas</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6 sm:mb-10">
              {companionItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="group/pill cursor-pointer bg-white/20 hover:bg-white/30 border border-white/10 hover:border-white/40 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 flex items-center gap-2.5 text-sm sm:text-base transition-all duration-200 hover:shadow-md hover:shadow-black/20"
                >
                  <div className="shrink-0 transition-transform duration-300 group-hover/pill:scale-115 group-hover/pill:rotate-3">
                    {item.icon}
                  </div>
                  <span className="font-medium tracking-wide">{item.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/pill:bg-white transition-colors" />
                </motion.div>
              ))}
            </div>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Ensayos clínicos con propietarios y clínicas veterinarias asociadas, con consentimiento informado y seguimiento individual.
            </p>

            <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-2 text-xs sm:text-sm text-white/80 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Consentimiento informado y apego a normas éticas y de bienestar animal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
