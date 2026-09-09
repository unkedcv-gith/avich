import { motion } from 'motion/react';
import { Settings, Package, Check, ArrowRight } from 'lucide-react';

export default function WorkModel() {
  return (
    <section id="work-model" className="py-16 md:py-24 bg-[#1a1640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">El Diferencial</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Un modelo de trabajo modular: el laboratorio elige cómo trabajar.
          </h3>
          <p className="text-base sm:text-lg text-gray-300">
            Dos formas de acompañar el desarrollo y registro de un producto, según cuánto quiera delegar cada cliente.
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
            <h4 className="text-[#C800D6] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">Modalidad 1</h4>
            <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Soporte Técnico</h5>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              AVICH diseña y ejecuta los estudios, y entrega los protocolos e informes listos para que el laboratorio los presente por su cuenta ante el organismo regulatorio.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C800D6] shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">Diseño de protocolo y ejecución del estudio</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C800D6] shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">Informe final auditable, listo para presentar</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C800D6] shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">El laboratorio conserva la gestión regulatoria</span>
              </li>
            </ul>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-400">
                Para laboratorios con área regulatoria propia que necesitan capacidad de ejecución a campo.
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
            <h4 className="text-[#FD8548] font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">Modalidad 2</h4>
            <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Paquete Completo</h5>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              AVICH se encarga de todo el proceso de punta a punta: diseño, ejecución, informes y la presentación del expediente ante el organismo regulatorio.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FD8548] shrink-0 rotate-45" />
                <span className="text-gray-200 text-sm sm:text-base">Todo lo del Soporte Técnico</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FD8548] shrink-0 rotate-45" />
                <span className="text-gray-200 text-sm sm:text-base">Armado y presentación del expediente de registro</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FD8548] shrink-0 rotate-45" />
                <span className="text-gray-200 text-sm sm:text-base">Seguimiento del trámite hasta la aprobación</span>
              </li>
            </ul>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-400">
                Para laboratorios que quieren un único interlocutor desde la idea hasta el registro.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
          <div className="w-6 h-6 rounded-full border-2 border-[#FD8548] text-[#FD8548] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-xs font-bold">!</span>
          </div>
          <p className="text-gray-300 text-sm md:text-base">
            <strong className="text-white font-semibold">Ambas modalidades trabajan bajo el mismo estándar.</strong> Cambia cuánto delega el laboratorio, no la calidad del estudio ni la confidencialidad con la que se maneja cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
