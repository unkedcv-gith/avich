import { motion } from 'motion/react';
import { FlaskConical, ShieldCheck, Activity, Map, FileText, Presentation, ArrowRight } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const serviceIcons = [
    <FlaskConical className="w-6 h-6 text-[#C800D6]" />,
    <ShieldCheck className="w-6 h-6 text-[#C800D6]" />,
    <Activity className="w-6 h-6 text-[#C800D6]" />,
    <Map className="w-6 h-6 text-[#C800D6]" />,
    <FileText className="w-6 h-6 text-[#C800D6]" />,
    <Presentation className="w-6 h-6 text-[#C800D6]" />
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 bg-[#110e2d] overflow-hidden">
      <MolecularBackground variant="services" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">{t.services.tag}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {t.services.title}
          </h3>
          <p className="text-lg text-gray-300">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.services.items.map((service, index) => (
            <motion.a
              key={index}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#C800D6]/50 rounded-2xl md:rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#C800D6]/10 flex flex-col justify-between block"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 group-hover:bg-[#C800D6]/20 flex items-center justify-center border border-white/10 group-hover:border-[#C800D6]/40 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {serviceIcons[index]}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#FD8548]/40 group-hover:bg-[#FD8548]/10 text-gray-400 group-hover:text-[#FD8548] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-[#FD8548] transition-colors" />
                    <span>{service.label}</span>
                  </div>
                </div>

                <h5 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-white transition-colors">{service.title}</h5>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/5 group-hover:border-white/15 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                <span className="font-medium text-[11px] sm:text-xs group-hover:text-[#FD8548] transition-colors">{t.services.consultProtocol}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FD8548] transform group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
