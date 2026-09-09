import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { LifeBuoy, AlertCircle, ShieldCheck, Mail } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="support" className="bg-white/40">
      <SectionHeader
        number={t.sections.s13.number}
        title={t.sections.s13.title}
        subtitle={t.sections.s13.subtitle}
        badge="Phase 1 Foundation"
        badgeVariant="navy"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center border border-[#A7F3D0]">
            <LifeBuoy className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{t.support.heading}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{t.support.description}</p>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            {t.support.technicalChannel}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-950/60 text-amber-400 flex items-center justify-center border border-amber-800/50">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Upcoming Launch Stages</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{t.support.notice}</p>
          <div className="flex items-center gap-2 pt-2 text-xs text-[#C5A880] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Phase 2 (Content & Privacy Expansion) & Phase 3 (Store Links & Media Assets)</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
