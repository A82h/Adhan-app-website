import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { WifiOff, CheckCircle2, Database, ShieldCheck, BatteryCharging } from 'lucide-react';

export const OfflineSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="offline" className="border-b border-slate-200/60 bg-white/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Offline Architecture Specs (5 cols) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
                <WifiOff className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base">{t.offlineComparison.cardTitle}</h4>
                <span className="text-xs text-slate-400 font-mono">{t.offlineComparison.cardBadge}</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t.offlineComparison.localRoomTitle}</div>
                  <div className="text-slate-400 text-[11px]">{t.offlineComparison.localRoomDesc}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t.offlineComparison.sensorMathTitle}</div>
                  <div className="text-slate-400 text-[11px]">{t.offlineComparison.sensorMathDesc}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t.offlineComparison.lowPowerTitle}</div>
                  <div className="text-slate-400 text-[11px]">{t.offlineComparison.lowPowerDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Details (7 cols) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <SectionHeader
            number={t.sections.s11.number}
            title={t.sections.s11.title}
            subtitle={t.sections.s11.subtitle}
            badge={t.offlineComparison.offlineColBadge}
            badgeVariant="emerald"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.offlineComparison.description}
          </p>

          <ul className="space-y-3 pt-2">
            {t.offlineComparison.offlineItems.map((detail, idx) => (
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
