import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { FeatureBlock } from '../components/showcase/FeatureBlock';
import { Clock, Compass, BookOpen, Sparkles, Radio, WifiOff } from 'lucide-react';

export const CoreFeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const featuresList = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t.features.prayer.title,
      description: t.features.prayer.desc,
      technicalBadge: t.features.prayer.technical,
      statusBadge: 'Verified Feature',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: t.features.qibla.title,
      description: t.features.qibla.desc,
      technicalBadge: t.features.qibla.technical,
      statusBadge: 'Verified Feature',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t.features.quran.title,
      description: t.features.quran.desc,
      technicalBadge: t.features.quran.technical,
      statusBadge: 'Verified Feature',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t.features.azkar.title,
      description: t.features.azkar.desc,
      technicalBadge: t.features.azkar.technical,
      statusBadge: 'Verified Feature',
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: t.features.live.title,
      description: t.features.live.desc,
      technicalBadge: t.features.live.technical,
      statusBadge: 'Verified Feature',
    },
    {
      icon: <WifiOff className="w-6 h-6" />,
      title: t.features.offline.title,
      description: t.features.offline.desc,
      technicalBadge: t.features.offline.technical,
      statusBadge: 'Offline First',
    },
  ];

  return (
    <PageContainer id="features" className="border-b border-slate-200/60 bg-white/50">
      <SectionHeader
        number={t.sections.s03.number}
        title={t.sections.s03.title}
        subtitle={t.sections.s03.subtitle}
        badge={t.common.phaseLabel}
        badgeVariant="navy"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresList.map((item, idx) => (
          <FeatureBlock
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
            technicalBadge={item.technicalBadge}
            statusBadge={item.statusBadge}
          />
        ))}
      </div>
    </PageContainer>
  );
};
