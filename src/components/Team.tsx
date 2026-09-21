import { motion } from 'motion/react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';
import jesusPesoa from '../assets/images/jesus_pesoa.png';
import facundoRomero from '../assets/images/facundo_romero.png';
import gabrielRojas from '../assets/images/gabriel_rojas.png';
import degradee from '../assets/images/degradee.png';

const teamMembersMeta = [
  { name: 'Dr. Jesús Pesoa', image: jesusPesoa },
  { name: 'Dr. Facundo Romero', image: facundoRomero },
  { name: 'Dr. Gabriel Rojas', image: gabrielRojas },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-16 md:py-24 bg-[#1a1640] relative overflow-hidden">
      <MolecularBackground variant="process" className="opacity-25" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{t.team.tag}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {t.team.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-6">
              {t.team.subtitle}
            </p>
          </div>
          <div className="max-w-md border-l-2 border-[#C800D6] pl-4 sm:pl-6 py-2">
            <p className="text-lg sm:text-xl text-white italic font-light">
              "{t.team.quote}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.team.members.map((member, index) => {
            const meta = teamMembersMeta[index] || { name: '', image: jesusPesoa };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 flex flex-col h-full hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col items-center mb-6 sm:mb-8 relative">
                  <div className="relative w-40 h-[12.5rem] sm:w-[13.8rem] sm:h-[16rem] rounded-2xl mb-4 sm:mb-5 shadow-lg group overflow-hidden cursor-pointer">
                    <img 
                      src={meta.image} 
                      alt={meta.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out" 
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-60 saturate-50 transition-all duration-500 mix-blend-color z-10"
                      style={{ backgroundImage: `url(${degradee})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 saturate-50 transition-all duration-500 mix-blend-overlay z-20"
                      style={{ backgroundImage: `url(${degradee})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                  </div>
                </div>
                
                <h4 className="text-[#6A00C8] font-bold tracking-widest uppercase text-xs mb-2">
                  {member.role}
                </h4>
                <h5 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {meta.name}
                </h5>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                  {member.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
