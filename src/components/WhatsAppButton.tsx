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
        className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-shadow active:scale-95 border-2 border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        {/* Original WhatsApp Vector Logo */}
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 md:w-9 md:h-9 text-white drop-shadow-sm"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.015 14.017 1 11.381 1c-5.441 0-9.867 4.372-9.87 9.802 0 1.63.45 3.22 1.302 4.634L1.764 21.61l6.233-1.626zm10.743-4.144c-.258-.129-1.527-.754-1.763-.84-.236-.086-.408-.129-.58.129-.172.258-.666.84-.817.994-.15.155-.301.172-.56.043-.257-.129-1.088-.401-2.072-1.28-.766-.683-1.283-1.527-1.433-1.786-.151-.258-.016-.398.113-.526.116-.116.258-.301.387-.452.129-.15.172-.258.258-.43.086-.172.043-.322-.021-.451-.065-.129-.58-1.397-.795-1.913-.21-.505-.44-.436-.605-.441l-.516-.01c-.172 0-.452.065-.688.322-.236.258-.903.882-.903 2.15s.924 2.494 1.053 2.666c.129.172 1.819 2.778 4.406 3.893.615.265 1.096.424 1.471.543.618.197 1.18.169 1.623.1.495-.077 1.527-.624 1.742-1.226.215-.602.215-1.118.15-1.226-.064-.108-.236-.172-.494-.301z"/>
        </svg>
      </motion.a>
    </div>
  );
}
