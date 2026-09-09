import logo from '../assets/images/marca.svg';

export default function Footer() {
  return (
    <footer className="bg-[#1a1640] pt-10 pb-28 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 whitespace-nowrap">
          <img src={logo} alt="AVICH Logo" className="h-8 sm:h-10 w-auto shrink-0" />
          <span className="text-white/40 font-light text-xl shrink-0">|</span>
          <span className="font-semibold text-white tracking-wide text-xs sm:text-base">
            Veterinary Research
          </span>
        </div>

        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} AVICH. Todos los derechos reservados.</p>
          <p className="mt-1">Contract Research Organization (CRO) en Argentina.</p>
        </div>

      </div>
    </footer>
  );
}
