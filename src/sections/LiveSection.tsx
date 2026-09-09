import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { Radio, CheckCircle2, Tv, Video } from 'lucide-react';

export const LiveSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="live" className="border-b border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeader
            number={t.sections.s08.number}
            title={t.sections.s08.title}
            subtitle={t.sections.s08.subtitle}
            badge={t.liveSection.technicalBadge}
            badgeVariant="navy"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.liveSection.description}
          </p>

          <ul className="space-y-3 pt-2">
            {t.liveSection.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Live Stream Showcase Card */}
        <div className="lg:col-span-5">
          <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-base">{t.sections.s08.title}</h4>
                  <span className="text-xs text-slate-400 font-medium">{t.liveSection.technicalBadge}</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                LIVE 24/7
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Tv className="w-3.5 h-3.5" />
                  <span>Makkah Channel</span>
                </div>
                <p className="text-[11px] text-slate-400">Grand Mosque Holy Kaaba continuous broadcast</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                  <Video className="w-3.5 h-3.5" />
                  <span>Madinah Channel</span>
                </div>
                <p className="text-[11px] text-slate-400">The Prophet's Mosque continuous broadcast</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono text-center">
              Adaptive Bitrate (360p / 720p / 1080p)
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
