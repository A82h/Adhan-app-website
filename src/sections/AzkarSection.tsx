import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { Sparkles, CheckCircle2, Heart, Fingerprint } from 'lucide-react';

export const AzkarSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="azkar" className="border-b border-slate-200/60 bg-white/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Azkar Counter Preview (5 cols) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#064E3B] to-[#0B131F] text-white border border-[#047857]/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center text-[#C5A880]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">Haptic Azkar Counter</h4>
                  <span className="text-xs text-emerald-300 font-mono">Structured Hadith Datastore</span>
                </div>
              </div>
              <Fingerprint className="w-5 h-5 text-emerald-300" />
            </div>

            <div className="p-4 rounded-2xl bg-black/20 border border-emerald-700/30 text-center space-y-2">
              <span className="text-[11px] font-mono text-emerald-300 font-semibold uppercase">
                Daily Remembrance
              </span>
              <p className="text-sm font-medium text-slate-100 leading-relaxed">
                سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-emerald-500 text-slate-900 font-mono font-bold text-sm">
                  33 / 33
                </span>
                <span className="text-xs text-emerald-200">Completed with gentle vibration</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-emerald-900/50">
                <span className="text-slate-400 block text-[10px]">Categories</span>
                <span className="font-semibold text-slate-200">Morning, Evening, Sleep</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-emerald-900/50">
                <span className="text-slate-400 block text-[10px]">Local State</span>
                <span className="font-semibold text-emerald-400">Instant Memory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Details (7 cols) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <SectionHeader
            number={t.sections.s07.number}
            title={t.sections.s07.title}
            subtitle={t.sections.s07.subtitle}
            badge={t.azkarSection.technicalBadge}
            badgeVariant="emerald"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.azkarSection.description}
          </p>

          <ul className="space-y-3 pt-2">
            {t.azkarSection.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};
