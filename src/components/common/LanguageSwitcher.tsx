import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Language } from '../../types';
import { Globe, Check, ChevronDown } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; nativeName: string; dir: 'rtl' | 'ltr' }[] = [
    { code: 'ar', label: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
    { code: 'en', label: 'English', nativeName: 'English', dir: 'ltr' },
    { code: 'fr', label: 'French', nativeName: 'Français', dir: 'ltr' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        id="language-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t.common.language}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] transition-colors cursor-pointer min-h-[44px]"
      >
        <Globe className="w-4 h-4 text-[#064E3B] shrink-0" aria-hidden="true" />
        <span className="font-medium text-xs sm:text-sm">
          {compact ? currentLang.code.toUpperCase() : currentLang.nativeName}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-labelledby="language-menu-button"
          className="absolute end-0 mt-2 w-44 rounded-xl bg-white border border-slate-200 shadow-lg shadow-slate-900/5 py-1.5 z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-100"
        >
          {languages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(item.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm text-start transition-colors cursor-pointer min-h-[44px] ${
                  isSelected
                    ? 'bg-[#ECFDF5] text-[#065F46] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.nativeName}</span>
                  <span className="text-xs text-slate-400">{item.label}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#065F46] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
