import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { BookOpen, CheckCircle2, Play, Volume2 } from 'lucide-react';

export const QuranSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="quran" className="border-b border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeader
            number={t.sections.s06.number}
            title={t.sections.s06.title}
            subtitle={t.sections.s06.subtitle}
            badge={t.quranSection.technicalBadge}
            badgeVariant="gold"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.quranSection.description}
          </p>

          <ul className="space-y-3 pt-2">
            {t.quranSection.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Informational Quran Audio Engine Showcase */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t.quranSection.showcase.scriptureTitle}</h4>
                  <span className="text-xs text-slate-500 font-medium">{t.quranSection.showcase.recitationEngine}</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>

            {/* Authentic Quranic Scripture Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#FDFBF7] via-[#FFFDF9] to-[#FBF8F0] border border-[#E9DFCE] shadow-xs space-y-3">
              <div className="flex flex-col items-center justify-center gap-1 pb-2 border-b border-[#EFE5D5]/80">
                <span className="text-[11px] font-semibold text-[#854D0E] bg-[#FEF3C7]/60 px-2.5 py-0.5 rounded-full border border-[#FDE68A]/70">
                  {t.quranSection.showcase.sampleAyahNumber}
                </span>
                <h5 className="text-sm sm:text-base font-bold text-slate-800 tracking-wide pt-0.5">
                  {t.quranSection.showcase.sampleSurah}
                </h5>
              </div>

              <div className="py-2 px-1">
                <p
                  className="font-quran text-xl sm:text-2xl text-slate-900 leading-[2.3] sm:leading-[2.5] text-center font-normal select-text"
                  dir="rtl"
                >
                  {t.quranSection.showcase.sampleAyah}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>{t.quranSection.showcase.recitationEngine}</span>
                <span className="font-mono text-emerald-700 font-semibold">✓</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>{t.quranSection.showcase.searchFeature}</span>
                <span className="font-mono text-slate-800">✓</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>{t.quranSection.showcase.offlineModeText}</span>
                <span className="font-mono text-slate-800 font-semibold">100% Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
