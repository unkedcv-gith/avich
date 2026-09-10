import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import MolecularBackground from './MolecularBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    species: 'Bovinos',
    modality: 'No lo sé todavía',
    productDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        species: 'Bovinos',
        modality: 'No lo sé todavía',
        productDetails: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#38307E] relative overflow-hidden">
      <MolecularBackground variant="process" className="opacity-15" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">✓</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">¡Consulta enviada!</h4>
                <p className="text-gray-600 max-w-sm">Gracias por contactarnos. Un especialista de AVICH se pondrá en contacto con vos a la brevedad.</p>
              </div>
            ) : (
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6A00C8]/20 focus:border-[#6A00C8] transition-colors" 
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Laboratorio / empresa</label>
                    <input 
                      type="text" 
                      id="company" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6A00C8]/20 focus:border-[#6A00C8] transition-colors" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6A00C8]/20 focus:border-[#6A00C8] transition-colors" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="species" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Especie de destino</label>
                    <select
                      id="species"
                      value={formData.species}
                      onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6A00C8]/20 focus:border-[#6A00C8] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.65em_auto] bg-[right_1rem_center] bg-no-repeat pr-10"
                    >
                      <option value="Bovinos">Bovinos</option>
                      <option value="Ovinos">Ovinos</option>
                      <option value="Caprinos">Caprinos</option>
                      <option value="Equinos">Equinos</option>
                      <option value="Aves">Aves</option>
                      <option value="Caninos">Caninos</option>
                      <option value="Felinos">Felinos</option>
                      <option value="Varias / a definir">Varias / a definir</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="modality" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Modalidad</label>
                    <select
                      id="modality"
                      value={formData.modality}
                      onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6A00C8]/20 focus:border-[#6A00C8] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.65em_auto] bg-[right_1rem_center] bg-no-repeat pr-10"
                    >
                      <option value="No lo sé todavía">No lo sé todavía</option>
                      <option value="Soporte Técnico">Soporte Técnico</option>
                      <option value="Paquete Completo">Paquete Completo</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="productDetails" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Qué producto querés desarrollar o registrar</label>
                  <textarea 
                    id="productDetails" 
                    rows={4} 
                    required
                    value={formData.productDetails}
                    onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6A00C8]/20 focus:border-[#6A00C8] transition-colors resize-none" 
                    placeholder="Tipo de producto, indicación, etapa en la que está..."
                  ></textarea>
                </div>
                
                <div className="space-y-4">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-[#FD8548] text-white rounded-full px-8 py-3.5 font-bold text-base hover:bg-[#e0753d] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    Enviar consulta
                  </button>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Toda consulta se maneja bajo confidencialidad. Podemos firmar un acuerdo de confidencialidad antes de la primera reunión.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
