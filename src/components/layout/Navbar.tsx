import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ActiveView } from '../../types';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Menu, Moon, Shield, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeView: ActiveView;
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigateView }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: ActiveView, hash?: string) => {
    onNavigateView(view, hash);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Name */}
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] rounded-xl p-1 cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#111C2E] text-white flex items-center justify-center shadow-xs border border-[#047857]/30">
                <Moon className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-slate-900 leading-tight">
                  {t.common.appName}
                </span>
                <span className="text-[11px] font-medium text-emerald-800 tracking-tight hidden sm:block">
                  {t.common.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <button
                type="button"
                onClick={() => handleNav('home')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer min-h-[44px] ${
                  activeView === 'home'
                    ? 'text-[#064E3B] bg-[#ECFDF5] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {t.nav.home}
              </button>

              <button
                type="button"
                onClick={() => handleNav('home', '#features')}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                {t.nav.features}
              </button>

              <button
                type="button"
                onClick={() => handleNav('home', '#intro')}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                {t.nav.howItWorks}
              </button>

              <button
                type="button"
                onClick={() => handleNav('privacy')}
                className={`px-2.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer min-h-[44px] ${
                  activeView === 'privacy'
                    ? 'text-[#064E3B] bg-[#ECFDF5] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-[#064E3B]" />
                {t.nav.privacy}
              </button>

              <button
                type="button"
                onClick={() => handleNav('permissions')}
                className={`px-2.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer min-h-[44px] ${
                  activeView === 'permissions'
                    ? 'text-[#064E3B] bg-[#ECFDF5] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {t.nav.permissions}
              </button>

              <button
                type="button"
                onClick={() => handleNav('third-party')}
                className={`px-2.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer min-h-[44px] ${
                  activeView === 'third-party'
                    ? 'text-[#064E3B] bg-[#ECFDF5] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {t.nav.thirdParty}
              </button>

              <button
                type="button"
                onClick={() => handleNav('home', '#faq')}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                {t.nav.faq}
              </button>

              <button
                type="button"
                onClick={() => handleNav('home', '#support')}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                {t.nav.support}
              </button>
            </nav>

            {/* Desktop Actions (Prominent Privacy Badge, Status & Language) */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleNav('privacy')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-semibold hover:bg-emerald-100 transition-all cursor-pointer shadow-xs"
                title={t.nav.privacy}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.nav.privacy}</span>
              </button>
              <LanguageSwitcher />
            </div>

            {/* Mobile Actions (Quick Privacy Button, Language Switcher & Hamburger) */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={() => handleNav('privacy')}
                aria-label={t.nav.privacy}
                className="p-2 rounded-xl text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                title={t.nav.privacy}
              >
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </button>
              <LanguageSwitcher compact />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label={t.common.openMenu}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeView={activeView}
        onNavigateView={onNavigateView}
      />
    </>
  );
};
