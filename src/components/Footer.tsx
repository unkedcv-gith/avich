import { Lock } from 'lucide-react';
import logo from '../assets/images/marca.svg';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-[#1a1640] pt-10 pb-28 md:py-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 whitespace-nowrap">
          <img src={logo} alt="AVICH Logo" className="h-8 sm:h-10 w-auto shrink-0" />
          <span className="text-white/40 font-light text-xl shrink-0">|</span>
          <span className="font-semibold text-white tracking-wide text-xs sm:text-base">
            Veterinary Research
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-sm text-center md:text-right">
          <div>
            <p>&copy; {new Date().getFullYear()} AVICH. Todos los derechos reservados.</p>
            <p className="mt-1">Contract Research Organization (CRO) en Argentina.</p>
          </div>

          {/* Admin Access Lock Icon */}
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              aria-label="Acceso Administrador"
              title="Administración de Novedades"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-[#FD8548] transition-all duration-200 active:scale-95 group shrink-0 ml-2"
            >
              <Lock className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}
