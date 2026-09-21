import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage, LANGUAGE_OPTIONS, Language } from '../context/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'mobile' | 'footer';
  className?: string;
}

export default function LanguageSelector({ variant = 'navbar', className = '' }: LanguageSelectorProps) {
  const { language, setLanguage, currentOption } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Footer pill version
  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full ${className}`}>
        {LANGUAGE_OPTIONS.map((opt) => {
          const isActive = language === opt.code;
          return (
            <button
              key={opt.code}
              type="button"
              onClick={() => handleSelect(opt.code)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#FD8548] text-white shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              title={opt.label}
              aria-label={`Cambiar idioma a ${opt.label}`}
            >
              <span className="text-sm">{opt.flag}</span>
              <span>{opt.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Mobile compact toggle
  if (variant === 'mobile') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold shadow-sm active:scale-95 transition-all"
          aria-expanded={isOpen}
          aria-label="Seleccionar idioma"
        >
          <span className="text-sm leading-none">{currentOption.flag}</span>
          <span className="leading-none text-[11px] font-bold">{currentOption.shortLabel}</span>
          <ChevronDown className={`w-3 h-3 text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a1640] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50 py-1.5 backdrop-blur-xl">
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors cursor-pointer ${
                    isSelected ? 'bg-white/15 text-white font-bold' : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{opt.flag}</span>
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#FD8548]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Default desktop navbar dropdown
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 bg-gray-50/80 hover:bg-gray-100 text-gray-700 text-xs font-medium transition-all shadow-xs active:scale-98 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Seleccionar idioma"
      >
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="font-semibold tracking-wide text-gray-800">{currentOption.shortLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
            Idioma / Language / Idioma
          </div>
          {LANGUAGE_OPTIONS.map((opt) => {
            const isSelected = language === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelect(opt.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm text-left transition-colors cursor-pointer ${
                  isSelected ? 'bg-orange-50/80 text-[#FD8548] font-bold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{opt.flag}</span>
                  <div>
                    <span className="block text-xs font-semibold">{opt.label}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#FD8548]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
