import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { Clock, CheckCircle2, Bell, Shield } from 'lucide-react';

export const PrayerSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="prayer" className="border-b border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeader
            number={t.sections.s05.number}
            title={t.sections.s05.title}
            subtitle={t.sections.s05.subtitle}
            badge={t.prayerExperience.card.exactAlarmBadge}
            badgeVariant="emerald"
            className="mb-6"
          />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t.prayerExperience.description}
          </p>

          <ul className="space-y-3 pt-2">
            {t.prayerExperience.featuresList.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Informational Visual Card */}
        <div className="lg:col-span-5">
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#0B131F] to-[#1A2840] text-white border border-slate-700/60 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#064E3B] flex items-center justify-center text-[#C5A880]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">{t.prayerExperience.card.adhanEngineTitle}</h4>
                  <span className="text-xs text-slate-400 font-medium">{t.prayerExperience.card.exactAlarmBadge}</span>
                </div>
              </div>
              <Badge variant="emerald" size="sm">
                {t.prayerExperience.card.activeStatus}
              </Badge>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">{t.prayerExperience.card.methodLabel}</span>
                <span className="font-medium text-slate-100">{t.prayerExperience.card.methodValue}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">{t.prayerExperience.card.batteryLabel}</span>
                <span className="font-medium text-emerald-400">{t.prayerExperience.card.batteryValue}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">{t.prayerExperience.card.locationLabel}</span>
                <span className="font-medium text-slate-100">{t.prayerExperience.card.locationValue}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center gap-3 text-xs text-slate-300">
              <Bell className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>{t.prayerExperience.card.audioPlayback}</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
