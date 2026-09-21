import { useState, useEffect } from 'react';
import { Home, FlaskConical, Send, PawPrint, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['contact', 'clients', 'news', 'differentiators', 'team', 'species', 'services', 'about'];
          let current = 'hero';

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.5) {
                current = section;
                break;
              }
            }
          }
          setActiveSection((prev) => (prev !== current ? current : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      aria-label="Navegación móvil"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#130f30]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.5)] px-3 pt-2 pb-5 transform-gpu translate-z-0"
    >
      <div className="max-w-md mx-auto flex items-end justify-between relative">
        {/* 1. Inicio */}
        <button
          onClick={(e) => handleNavClick(e, 'hero')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeSection === 'hero' ? 'text-[#FD8548]' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">{t.mobileNav.home}</span>
        </button>

        {/* 2. Especies */}
        <a
          href="#species"
          onClick={(e) => handleNavClick(e, 'species')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeSection === 'species' ? 'text-[#FD8548]' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <PawPrint className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">{t.mobileNav.species}</span>
        </a>

        {/* 3. CENTRADO Y DESTACADO: Servicios */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-6">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={`w-14 h-14 rounded-full bg-gradient-to-tr from-[#FD8548] to-[#ff985a] text-white flex items-center justify-center shadow-lg shadow-[#FD8548]/40 border-4 border-[#130f30] active:scale-95 transition-all ${
              activeSection === 'services' ? 'ring-2 ring-[#FD8548] ring-offset-2 ring-offset-[#130f30]' : ''
            }`}
            aria-label={t.mobileNav.services}
          >
            <FlaskConical className="w-6 h-6" />
          </a>
          <span className={`text-[10px] font-bold mt-1 tracking-tight ${
            activeSection === 'services' ? 'text-[#FD8548]' : 'text-gray-300'
          }`}>
            {t.mobileNav.services}
          </span>
        </div>

        {/* 4. Equipo / Nosotros */}
        <a
          href="#team"
          onClick={(e) => handleNavClick(e, 'team')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeSection === 'team' ? 'text-[#FD8548]' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <ShieldCheck className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">{t.mobileNav.team}</span>
        </a>

        {/* 5. Contacto */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
            activeSection === 'contact' ? 'text-[#FD8548]' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Send className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">{t.mobileNav.contact}</span>
        </a>
      </div>
    </nav>
  );
}
