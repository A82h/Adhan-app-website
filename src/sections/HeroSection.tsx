import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ProductVisual } from '../components/showcase/ProductVisual';
import { Sparkles, Shield, Cpu, UserX, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
  onExploreFeatures?: () => void;
  onExploreOffline?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreFeatures,
  onExploreOffline,
}) => {
  const { t, direction } = useLanguage();

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle organic light backdrop */}
      <div
        className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-50/60 via-slate-50/30 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Left/Right Editorial Content */}
          <div className="lg:col-span-7 space-y-7 text-start">
            {/* Phase Badge & Audited Badge */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>{t.hero.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                <Shield className="w-3 h-3 text-slate-500" />
                <span>{t.common.phaseBadge}</span>
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.25] font-serif">
              {t.hero.title}
            </h1>

            {/* Paragraph Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Micro Feature Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-snug">
                  {t.hero.indicators.native}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-snug">
                  {t.hero.indicators.localFirst}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <UserX className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-snug">
                  {t.hero.indicators.noAccount}
                </span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#features"
                onClick={onExploreFeatures}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#064E3B] hover:bg-[#047857] text-white font-bold text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>

              <a
                href="#offline"
                onClick={onExploreOffline}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-all cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Platform & Privacy Notice */}
            <div className="pt-2 text-xs text-slate-500 font-medium flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>{t.common.platformLabel}</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.common.offlineFirstBadge}</span>
              </span>
            </div>
          </div>

          {/* Right/Left Interactive Product Concept Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <ProductVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
