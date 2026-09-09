import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { ShieldCheck } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="transparency" className="border-b border-slate-200/60 bg-white/40 space-y-10">
      <SectionHeader
        number={t.sections.s11.number}
        title={t.sections.s11.title}
        subtitle={t.sections.s11.subtitle}
        badge={t.transparency.sourceOfTruthBadge}
        badgeVariant="emerald"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {t.transparency.heading}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.transparency.description}
          </p>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <span className="font-bold block">{t.transparency.noSpeculativeTitle}</span>
            <p>
              {t.transparency.noSpeculativeDesc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>{t.transparency.telemetryTitle}</span>
            </div>
            <p className="leading-relaxed">
              {t.transparency.telemetryDesc}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-900 text-white font-mono text-xs flex items-center justify-between">
              <span>{t.transparency.specificationsTitle}</span>
              <span className="text-emerald-400">{t.transparency.specificationsStatus}</span>
            </div>
            <div className="divide-y divide-slate-100 text-sm">
              {t.transparency.specs.map((spec, idx) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/70 transition-colors">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded text-start sm:text-end">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

