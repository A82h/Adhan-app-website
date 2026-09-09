import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { Compass, ShieldCheck, Cpu } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-[#064E3B]" />,
      title: t.intro.corePillars.p1.title,
      desc: t.intro.corePillars.p1.desc,
    },
    {
      icon: <Compass className="w-6 h-6 text-[#064E3B]" />,
      title: t.intro.corePillars.p2.title,
      desc: t.intro.corePillars.p2.desc,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#064E3B]" />,
      title: t.intro.corePillars.p3.title,
      desc: t.intro.corePillars.p3.desc,
    },
  ];

  return (
    <PageContainer id="intro" className="border-b border-slate-200/60">
      <SectionHeader
        number={t.sections.s02.number}
        title={t.sections.s02.title}
        subtitle={t.sections.s02.subtitle}
        badge={t.common.platformLabel + ': Android'}
        badgeVariant="emerald"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-6 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-semibold text-slate-900 text-lg sm:text-xl">
            {t.intro.heading}
          </p>
          <p>{t.intro.body1}</p>
        </div>
        <div className="lg:col-span-6 space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          <p>{t.intro.body2}</p>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs text-emerald-950 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.common.sourceOfTruthNotice}</span>
          </div>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center">
              {pillar.icon}
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{pillar.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
