import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#38307E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          
          <div className="text-white">
            <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">Contacto</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Trabajemos juntos</h3>
            <p className="text-gray-300 text-lg mb-10 max-w-md">
              Escribinos para conocer más sobre nuestro modelo de trabajo y cómo podemos ayudar en el registro de tus productos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FD8548]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">contacto@avich.com.ar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FD8548]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ubicación</p>
                  <p className="text-lg font-medium">Chascomús, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Nombre completo</label>
                  <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38307E]/20 focus:border-[#38307E] transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Laboratorio / Empresa</label>
                  <input type="text" id="company" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38307E]/20 focus:border-[#38307E] transition-colors" placeholder="Tu laboratorio" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38307E]/20 focus:border-[#38307E] transition-colors" placeholder="correo@empresa.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#38307E]/20 focus:border-[#38307E] transition-colors resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#FD8548] text-white rounded-xl px-6 py-3.5 sm:py-4 font-bold text-base sm:text-lg hover:bg-[#e0753d] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md">
                Enviar mensaje
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
