import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ActiveView } from '../../types';
import { Moon, Shield, FileText, Server, CheckCircle2, ShieldCheck, Lock, Youtube, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateView }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B131F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: App Identity & Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#064E3B] text-white flex items-center justify-center border border-[#047857]/40 shadow-sm">
                <Moon className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{t.common.appName}</h3>
                <p className="text-xs text-emerald-400 font-medium">{t.common.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {t.footer.description}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#C5A880] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{t.common.phaseBadge}</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {t.footer.systemNotice}
              </p>
            </div>
          </div>

          {/* Col 2: Internal Verified Pages (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-slate-200">
              {t.footer.navigationHeader}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-nav-privacy"
                  type="button"
                  onClick={() => onNavigateView('privacy')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>{t.nav.privacy}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-permissions"
                  type="button"
                  onClick={() => onNavigateView('permissions')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <FileText className="w-4 h-4 text-[#10B981]" />
                  <span>{t.nav.permissions}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-thirdparty"
                  type="button"
                  onClick={() => onNavigateView('third-party')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <Server className="w-4 h-4 text-[#10B981]" />
                  <span>{t.nav.thirdParty}</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  type="button"
                  onClick={() => onNavigateView('home', '#faq')}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer py-1"
                >
                  <span>{t.nav.faq}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Privacy Guarantees + Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-slate-200">
              {t.footer.transparencyHeader}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-200">100% On-Device Privacy</span>
                  <span className="text-slate-400 text-[10px]">No external telemetry or tracking</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-semibold text-slate-200">Native Android Quality</span>
                  <span className="text-slate-400 text-[10px]">Offline-first & battery-efficient</span>
                </div>
              </div>

              {/* Social Channels Link Cards */}
              <div className="pt-2 space-y-2">
                <span className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  {t.footer.socialHeader}
                </span>

                {/* YouTube */}
                <a
                  id="footer-youtube-card"
                  href="https://youtube.com/@amencanada?si=4nUADcaFDZVhPGTk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-pointer"
                  title="YouTube: @amencanada"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-red-600/15 text-red-500 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                      <Youtube className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                        YouTube
                      </span>
                      <span className="block text-[10px] text-slate-400 group-hover:text-slate-300 truncate">
                        @amencanada
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 transition-colors shrink-0 ms-2" />
                </a>

                {/* Instagram */}
                <a
                  id="footer-instagram-card"
                  href="https://www.instagram.com/islamic_companion_60?stkn=cnUwdXh6a3NodWdh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-pointer"
                  title="Instagram: @islamic_companion_60"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-pink-600/15 text-pink-500 group-hover:bg-linear-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white flex items-center justify-center transition-all shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="block text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                        Instagram
                      </span>
                      <span className="block text-[10px] text-slate-400 group-hover:text-slate-300 truncate">
                        @islamic_companion_60
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400 transition-colors shrink-0 ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.rightsReserved}</p>

          <div className="flex items-center gap-4">
            {/* Social Icons Strip */}
            <div className="flex items-center gap-2">
              <a
                id="footer-youtube-social-icon"
                href="https://youtube.com/@amencanada?si=4nUADcaFDZVhPGTk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel @amencanada"
                title="YouTube (@amencanada)"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600/20 text-slate-400 hover:text-red-400 border border-slate-800 hover:border-red-500/40 flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="footer-instagram-social-icon"
                href="https://www.instagram.com/islamic_companion_60?stkn=cnUwdXh6a3NodWdh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Account @islamic_companion_60"
                title="Instagram (@islamic_companion_60)"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600/20 text-slate-400 hover:text-pink-400 border border-slate-800 hover:border-pink-500/40 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            
            {/* Phase Badge Removed */}
          </div>
        </div>
      </div>
    </footer>
  );
};
