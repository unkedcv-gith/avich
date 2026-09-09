import { motion } from 'motion/react';
import MolecularBackground from './MolecularBackground';

export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Definición",
      desc: "Entendemos el producto, la indicación y el mercado de destino, y definimos qué estudios exige el registro."
    },
    {
      num: "2",
      title: "Protocolo",
      desc: "Diseñamos el protocolo según guías VICH-GCP y la normativa local, con diseño estadístico y comité de ética cuando corresponde."
    },
    {
      num: "3",
      title: "Ejecución",
      desc: "Conducimos el estudio a campo o en clínica, con monitoreo, registros trazables y control de calidad de los datos."
    },
    {
      num: "4",
      title: "Informe y registro",
      desc: "Entregamos el informe final auditable. En Paquete Completo, presentamos y seguimos el expediente ante el organismo regulatorio."
    }
  ];

  return (
    <section id="process" className="relative py-16 md:py-24 bg-[#110e2d] overflow-hidden">
      <MolecularBackground variant="process" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          
          <div className="lg:col-span-7">
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">Cómo trabajamos</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
              De la idea al registro, en cuatro pasos.
            </h3>
            
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 py-5 sm:py-8 border-b border-white/10 last:border-0 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FD8548] flex items-center justify-center text-[#1a1640] font-bold text-base sm:text-xl shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 sticky top-24"
            >
              <h4 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">Estándares y valores</h4>
              <h5 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Trabajamos según las guías VICH de Buenas Prácticas Clínicas.
              </h5>
              <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                VICH es el programa internacional que armoniza los requisitos técnicos para el registro de productos veterinarios entre la Unión Europea, Japón y Estados Unidos. Sus guías son el marco de referencia de nuestro trabajo.
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 text-white text-xs sm:text-sm">VICH GL9 · GCP</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 text-white text-xs sm:text-sm">SENASA</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 text-white text-xs sm:text-sm">Normativa regional</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4">
                {['Credibilidad', 'Confianza', 'Confidencialidad', 'Transparencia', 'Ética', 'Agilidad'].map((val, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C800D6]" />
                    <span className="text-gray-300 text-sm">{val}</span>
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
