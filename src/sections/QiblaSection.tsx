import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { Compass, CheckCircle2, Navigation, Activity } from 'lucide-react';

export const QiblaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="qibla" className="border-b border-slate-200/60 bg-white/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Visual Card (5 cols) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col items-center text-center space-y-6">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#047857] flex items-center justify-center relative">
              <Compass className="w-16 h-16 text-[#10B981] animate-pulse" />
              <div className="absolute top-1 text-[10px] font-mono font-bold text-amber-400">
                N
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-emerald-400">
                134.2° SE
              </div>
              <p className="text-xs text-slate-400">
                Mecca Bearing Vector (Great-Circle Distance)
              </p>
            </div>

            <div className="w-full grid grid-cols-2 gap-2 text-start pt-2 border-t border-slate-800 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block">Sensor Fusion</span>
                <span className="font-mono text-slate-200">TYPE_ROTATION_VECTOR</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block">Calibration</span>
                <span className="font-mono text-emerald-400">High Accuracy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Details (7 cols) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <SectionHeader
            number={t.sections.s05.number}
            title={t.sections.s05.title}
            subtitle={t.sections.s05.subtitle}
            badge={t.qiblaSection.technicalBadge}
            badgeVariant="emerald"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.qiblaSection.description}
          </p>

          <ul className="space-y-3 pt-2">
            {t.qiblaSection.details.map((detail, idx) => (
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
