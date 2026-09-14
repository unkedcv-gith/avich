import { useState, useEffect } from 'react';
import logo from '../assets/images/marca.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'Qué hacemos' },
    { id: 'services', label: 'Servicios' },
    { id: 'species', label: 'Especies' },
    { id: 'differentiators', label: 'Por qué elegirnos' },
    { id: 'news', label: 'Novedades' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-1' : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-center md:justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}>
          <div className="flex items-center justify-center">
            <a href="#" className="flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
              <img 
                src={logo} 
                alt="AVICH Logo" 
                className={`w-auto shrink-0 transition-all duration-300 ${isScrolled ? 'h-9 md:h-8' : 'h-11 md:h-10'}`} 
              />
              <span className="text-gray-400 font-light text-xl shrink-0">|</span>
              <span className={`font-semibold text-gray-700 tracking-wide transition-all duration-300 ${isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
                Veterinary Research
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`font-medium transition-colors ${activeSection === link.id ? 'text-[#6A00C8]' : 'text-gray-600 hover:text-[#6A00C8]'}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-6 py-2 rounded-full font-medium transition-all shadow-sm ${activeSection === 'contact' ? 'bg-[#6A00C8] text-white shadow-md' : 'bg-[#FD8548] text-white hover:bg-[#e0753d]'}`}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
