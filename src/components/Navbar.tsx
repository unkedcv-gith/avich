import { useState, useEffect } from 'react';
import logo from '../assets/images/marca.svg';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const sections = ['about', 'services', 'species', 'differentiators', 'news', 'contact'];
          let current = "";

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 3) {
                current = section;
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
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

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'species', label: t.nav.species },
    { id: 'differentiators', label: t.nav.differentiators },
    { id: 'news', label: t.nav.news },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 transform-gpu translate-z-0 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-1' : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2 md:py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-14 md:h-20'}`}>
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
              <img 
                src={logo} 
                alt="AVICH Logo" 
                className={`w-auto shrink-0 transition-all duration-300 ${isScrolled ? 'h-8 md:h-8' : 'h-8 md:h-10'}`} 
              />
              <span className="text-gray-400 font-light text-xl shrink-0">|</span>
              <span className={`font-semibold text-gray-700 tracking-wide transition-all duration-300 ${isScrolled ? 'text-xs sm:text-sm' : 'text-xs sm:text-base'}`}>
                {t.nav.subtitle}
              </span>
            </a>
          </div>
          
          {/* Mobile language selector */}
          <div className="flex md:hidden items-center">
            <LanguageSelector variant="navbar" />
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-medium transition-colors text-sm lg:text-base ${activeSection === link.id ? 'text-[#6A00C8]' : 'text-gray-600 hover:text-[#6A00C8]'}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`px-5 lg:px-6 py-2 rounded-full font-medium transition-all shadow-sm text-sm lg:text-base ${activeSection === 'contact' ? 'bg-[#6A00C8] text-white shadow-md' : 'bg-[#FD8548] text-white hover:bg-[#e0753d]'}`}
            >
              {t.nav.contact}
            </a>
            
            {/* Desktop Language Selector */}
            <LanguageSelector variant="navbar" />
          </div>
        </div>
      </div>
    </nav>
  );
}
