import React, { useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ActiveView } from '../../types';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { X, Shield, Compass, BookOpen, HelpCircle, LifeBuoy, FileText, CheckCircle, Server, Youtube, Instagram, ExternalLink } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: ActiveView;
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeView,
  onNavigateView,
}) => {
  const { t } = useLanguage();

  // Escape key handler and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavClick = (view: ActiveView, hash?: string) => {
    onNavigateView(view, hash);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.common.openMenu}
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 end-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#064E3B] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                IC
              </div>
              <span className="font-bold text-slate-900 text-base">{t.common.appName}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.common.closeMenu}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer ${
                activeView === 'home'
                  ? 'bg-[#ECFDF5] text-[#065F46] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4 text-[#064E3B]" />
              {t.nav.home}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', '#features')}
              className="w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#064E3B]" />
              {t.nav.features}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', '#intro')}
              className="w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-[#064E3B]" />
              {t.nav.howItWorks}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('privacy')}
              className={`w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer ${
                activeView === 'privacy'
                  ? 'bg-[#ECFDF5] text-[#065F46] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Shield className="w-4 h-4 text-[#064E3B]" />
              {t.nav.privacy}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('permissions')}
              className={`w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer ${
                activeView === 'permissions'
                  ? 'bg-[#ECFDF5] text-[#065F46] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-[#064E3B]" />
              {t.nav.permissions}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('third-party')}
              className={`w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer ${
                activeView === 'third-party'
                  ? 'bg-[#ECFDF5] text-[#065F46] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Server className="w-4 h-4 text-[#064E3B]" />
              {t.nav.thirdParty}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', '#faq')}
              className="w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#064E3B]" />
              {t.nav.faq}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', '#support')}
              className="w-full text-start px-3.5 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors min-h-[44px] cursor-pointer"
            >
              <LifeBuoy className="w-4 h-4 text-[#064E3B]" />
              {t.nav.support}
            </button>
          </nav>
        </div>

        {/* Footer Language, Social, and Info */}
        <div className="pt-6 border-t border-slate-200 mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t.common.language}
            </span>
            <LanguageSwitcher />
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            <a
              id="mobile-menu-youtube-link"
              href="https://youtube.com/@amencanada?si=4nUADcaFDZVhPGTk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-red-50/70 hover:bg-red-50 text-slate-800 border border-red-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">YouTube</span>
                  <span className="text-[10px] text-slate-600 font-medium">@amencanada</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-red-500" />
            </a>

            <a
              id="mobile-menu-instagram-link"
              href="https://www.instagram.com/islamic_companion_60?stkn=cnUwdXh6a3NodWdh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-pink-50/70 hover:bg-pink-50 text-slate-800 border border-pink-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">Instagram</span>
                  <span className="text-[10px] text-slate-600 font-medium">@islamic_companion_60</span>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-pink-500" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-medium bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
            <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{t.common.tagline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
