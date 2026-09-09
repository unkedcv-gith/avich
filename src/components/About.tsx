import { motion } from 'motion/react';
import { FlaskConical, ShieldCheck, Factory, Globe2, ArrowRight } from 'lucide-react';
import MolecularBackground from './MolecularBackground';

export default function About() {
  const aboutCards = [
    {
      icon: <FlaskConical className="w-4 h-4" />,
      tag: "Qué estudiamos",
      title: "Eficacia, seguridad, farmacocinética y estudios de campo",
      preview: "Medicamentos, vacunas y nuevas tecnologías",
      detail: "Diseño y ejecución de protocolos de alta rigurosidad para aprobación y registro de productos veterinarios."
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      tag: "Bajo qué marco",
      title: "Guías VICH de Buenas Prácticas Clínicas",
      preview: "VICH GL9 (GCP) y normativa local vigente",
      detail: "Armonización técnica internacional que asegura que cada informe sea auditable ante organismos de control."
    },
    {
      icon: <Factory className="w-4 h-4" />,
      tag: "Para quién",
      title: "Laboratorios que desarrollan o registran productos",
      preview: "En Argentina y toda la región",
      detail: "Flexibilidad para empresas que requieren capacidad de campo o tercerización integral de punta a punta."
    },
    {
      icon: <Globe2 className="w-4 h-4" />,
      tag: "Ante quién",
      title: "Organismos regulatorios oficiales",
      preview: "En Argentina, SENASA y entes regionales",
      detail: "Confección y seguimiento proactivo de expedientes para optimizar tiempos de dictamen regulatorio."
    }
  ];

  return (
    <section id="about" className="relative bg-[#1a1640] overflow-hidden">
      <MolecularBackground variant="about" />
      {/* Metrics Banner */}
      <div className="bg-[#28225e] border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="text-center md:text-left md:pr-8 py-6 md:py-0">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2 whitespace-nowrap">
                <span className="text-[#FD8548]">+</span>20 años
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                de trayectoria de nuestro equipo en la industria veterinaria
              </p>
            </div>
            <div className="text-center md:text-left md:px-8 py-6 md:py-0">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2 whitespace-nowrap">
                <span className="text-[#FD8548]">2</span> modalidades
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Soporte Técnico o Paquete Completo: el laboratorio elige cómo trabajar
              </p>
            </div>
            <div className="text-center md:text-left md:pl-8 py-6 md:py-0">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2 whitespace-nowrap">
                <span className="text-[#FD8548]">7</span> especies
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                animales de producción y de compañía, en ensayos clínicos y de campo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">Quiénes Somos</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Una CRO veterinaria hecha por veterinarios.
            </h3>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                AVICH es una <strong className="text-white font-semibold">Contract Research Organization</strong> especializada en productos veterinarios. Somos un equipo interdisciplinario con más de 20 años en la industria, especializado en la conducción de estudios clínicos en animales de producción y de compañía.
              </p>
              <p>
                Trabajamos junto a universidades y profesionales de toda la región para ofrecer un servicio integral: desde el diseño del protocolo hasta el registro, cumpliendo los requisitos vigentes de los entes reguladores de cada país.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {aboutCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="group relative cursor-pointer bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#FD8548]/40 p-5 sm:p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FD8548]/10 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FD8548]/10 text-[#FD8548] group-hover:bg-[#FD8548] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-medium text-gray-400 group-hover:text-[#FD8548] flex items-center gap-1 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">
                      <span>Ver más</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  
                  <h4 className="text-xs font-bold text-[#FD8548] uppercase tracking-widest mb-1.5 transition-colors">
                    {card.tag}
                  </h4>
                  <h5 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-gray-100 transition-colors">
                    {card.title}
                  </h5>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 group-hover:border-[#FD8548]/30 transition-colors">
                  <p className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-[#FD8548] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD8548] shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    <span>{card.preview}</span>
                  </p>

                  {/* Sutil texto adicional revelado al pasar el cursor */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="text-[11px] sm:text-xs text-gray-400 pt-2 leading-relaxed">
                      {card.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
