import { motion } from 'motion/react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';
import jesusPesoa from '../assets/images/jesus_pesoa.png';
import degradee from '../assets/images/degradee.png';

const teamMembersMeta = [
  { name: 'Dr. Jesús Pesoa', image: jesusPesoa },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-16 md:py-24 bg-[#f8f7fd] relative overflow-hidden">
      <MolecularBackground variant="process" className="opacity-75" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">{t.team.tag}</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1640] leading-tight text-balance">
              {t.team.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
              {t.team.subtitle}
            </p>
            <div className="mt-6 pt-6 border-t border-[#6A00C8]/15">
              <p className="text-base sm:text-lg text-[#1a1640] italic font-medium leading-relaxed">
                "{t.team.quote}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            {t.team.members.map((member, index) => {
              const meta = teamMembersMeta[index] || { name: '', image: jesusPesoa };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-[#6A00C8]/15 hover:border-[#6A00C8]/30 rounded-2xl md:rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative w-44 h-56 sm:w-48 sm:h-64 shrink-0 rounded-2xl shadow-lg group overflow-hidden cursor-pointer">
                    <img 
                      src={meta.image} 
                      alt={meta.name}
                      referrerPolicy="no-referrer"
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
                  
                  <div className="flex flex-col text-center sm:text-left">
                    <h4 className="text-[#6A00C8] font-bold tracking-widest uppercase text-xs mb-2">
                      {member.role}
                    </h4>
                    <h5 className="text-xl sm:text-2xl font-bold text-[#1a1640] mb-3">
                      {meta.name}
                    </h5>
                    <p className={`text-gray-600 text-sm sm:text-base leading-relaxed ${member.tags.length > 0 ? 'mb-5' : ''}`}>
                      {member.desc}
                    </p>
                    
                    {member.tags.length > 0 && (
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-auto">
                        {member.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-50 border border-purple-100 rounded-full text-xs text-[#38307E] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
