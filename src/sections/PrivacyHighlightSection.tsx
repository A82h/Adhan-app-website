import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ActiveView } from '../types';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { ShieldCheck, UserX, EyeOff, MapPinOff, ArrowRight, ArrowLeft } from 'lucide-react';

interface PrivacyHighlightSectionProps {
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const PrivacyHighlightSection: React.FC<PrivacyHighlightSectionProps> = ({
  onNavigateView,
}) => {
  const { t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const icons = [
    <UserX className="w-6 h-6 text-[#064E3B]" key="1" />,
    <EyeOff className="w-6 h-6 text-[#064E3B]" key="2" />,
    <MapPinOff className="w-6 h-6 text-[#064E3B]" key="3" />,
  ];

  return (
    <PageContainer id="privacy-section" className="border-b border-slate-200/60">
      <SectionHeader
        number={t.sections.s13.number}
        title={t.sections.s13.title}
        subtitle={t.sections.s13.subtitle}
        badge={t.privacyOverview.badge}
        badgeVariant="emerald"
      />

      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#ECFDF5]/50 to-[#FAF9F6] border border-[#A7F3D0]/80 shadow-xs mb-8">
        <div className="max-w-3xl space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.privacyOverview.heading}
          </h3>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.privacyOverview.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {t.privacyOverview.pillars.slice(0, 3).map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center">
                {icons[idx]}
              </div>
              <h4 className="font-bold text-slate-900 text-base">{point.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigateView('privacy')}
            icon={<ArrowIcon className="w-4 h-4" />}
            iconPosition="end"
          >
            {t.privacyOverview.ctaText}
          </Button>

          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.common.sourceOfTruthNotice}</span>
          </span>
        </div>
      </div>
    </PageContainer>
  );
};
