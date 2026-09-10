import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show a welcome tooltip briefly 3 seconds after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const closeTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  const phoneNumber = "5492241555555"; // Example Argentine format, user can change this easily
  const message = "Hola, me gustaría recibir más información sobre los servicios de AVICH.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex items-center gap-3 select-none pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:block pointer-events-auto bg-white text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] border border-gray-100 relative"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              ¿En qué podemos ayudarte?
            </div>
            {/* Arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#25D366] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)] border border-gray-100 transition-shadow active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        {/* Exact official outline WhatsApp logo matching the user's reference */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-7 h-7 md:w-8 h-8 text-[#25D366]"
        >
          <path d="M12.004 2c-5.518 0-10 4.482-10 10 0 1.767.46 3.427 1.264 4.883l-1.343 4.908 5.034-1.32c1.413.754 3.016 1.183 4.711 1.183 5.518 0 10-4.482 10-10s-4.482-10-10-10zm0 18.258c-1.572 0-3.048-.432-4.32-1.184l-.31-.182-3.1.813.827-3.023-.2-.319c-.832-1.332-1.272-2.875-1.272-4.48 0-4.553 3.705-8.258 8.258-8.258s8.258 3.705 8.258 8.258-3.705 8.258-8.258 8.258zm3.84-5.263c-.211-.106-1.25-.618-1.444-.688-.193-.07-.334-.106-.475.106-.14.212-.544.688-.667.83-.123.14-.246.158-.457.053-.21-.106-.889-.327-1.693-1.045-.625-.558-1.047-1.247-1.17-1.459-.123-.211-.013-.326.092-.431.095-.095.211-.247.316-.371.106-.124.14-.212.211-.353.07-.141.035-.265-.017-.371-.053-.106-.475-1.146-.65-1.57-.17-.41-.344-.354-.475-.36l-.404-.008c-.141 0-.37.053-.563.265-.193.212-.738.724-.738 1.764 0 1.04.756 2.046.861 2.187.106.141 1.488 2.273 3.605 3.184.504.217.897.347 1.203.444.506.161.966.138 1.33.084.405-.06 1.25-.512 1.426-1.006.175-.494.175-.918.123-1.006-.053-.088-.193-.141-.404-.247z"/>
        </svg>
      </motion.a>
    </div>
  );
}
