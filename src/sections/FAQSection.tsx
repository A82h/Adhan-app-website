import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/common/SectionHeader';
import { FAQAccordion } from '../components/showcase/FAQAccordion';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageContainer id="faq" className="border-b border-slate-200/60">
      <SectionHeader
        number={t.sections.s12.number}
        title={t.sections.s12.title}
        subtitle={t.sections.s12.subtitle}
        centered
      />

      <FAQAccordion items={t.faq.items} />
    </PageContainer>
  );
};
