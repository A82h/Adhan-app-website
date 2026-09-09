import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ActiveView } from '../types';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { DataFlowVisual } from '../components/showcase/DataFlowVisual';
import { 
  Shield, 
  ArrowRight, 
  ArrowLeft, 
  Lock, 
  MapPin, 
  Database, 
  Trash2, 
  Tv, 
  CreditCard, 
  Baby, 
  Clock, 
  Info,
  CheckCircle2,
  AlertTriangle,
  FileText
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateView }) => {
  const { t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;
  const policy = t.subpages.privacyPolicy;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
      {/* Navigation Breadcrumb / Back button */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigateView('home')}
          icon={<ArrowIcon className="w-4 h-4" />}
          iconPosition="start"
        >
          {t.common.backToHome}
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigateView('permissions')}
          >
            {t.nav.permissions}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigateView('third-party')}
          >
            {t.nav.thirdParty}
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="emerald" size="md" icon={<Shield className="w-3.5 h-3.5" />}>
            {policy.badge}
          </Badge>
          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            {policy.effectiveDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {policy.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          {policy.intro}
        </p>

        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {policy.auditBasisNotice}
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-mono">
          {policy.tocTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {policy.toc.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-start px-3 py-2 rounded-lg text-xs sm:text-sm text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></div>
              <span className="truncate">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. Information The App Does Not Require */}
      <section id="no-account" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.noAccount.title}
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 font-semibold text-sm sm:text-base">
            {policy.noAccount.statement}
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {policy.noAccount.details}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
              Items Not Requested or Stored:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {policy.noAccount.notRequiredList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Location Data */}
      <section id="location" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.location.title}
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            {policy.location.statement}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                ACCESS_FINE_LOCATION
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {policy.location.fineLocation}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-mono text-xs font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">
                ACCESS_COARSE_LOCATION
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {policy.location.coarseLocation}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2">
            <div className="font-semibold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Location Processing Policy:</span>
            </div>
            <p className="leading-relaxed text-slate-700">
              {policy.location.processingNote}
            </p>
            <p className="leading-relaxed text-slate-600 pt-1 border-t border-slate-200">
              {policy.location.optionalNote}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Data Stored Locally */}
      <section id="local-data" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.localData.title}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {policy.localData.statement}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {policy.localData.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 flex items-center gap-2.5 font-medium"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
            {policy.localData.storageNote}
          </p>
        </div>
      </section>

      {/* 4. Data Deletion */}
      <section id="data-deletion" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.dataDeletion.title}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {policy.dataDeletion.statement}
          </p>

          <div className="space-y-2">
            {policy.dataDeletion.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="font-semibold text-slate-900 block mb-1">No Remote Deletion Mechanism:</span>
            <p className="leading-relaxed">{policy.dataDeletion.noRemoteNote}</p>
          </div>
        </div>
      </section>

      {/* 5. Advertising */}
      <section id="advertising" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Tv className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.advertising.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-mono uppercase text-slate-500 font-semibold block">
                Advertising SDK
              </span>
              <span className="text-sm font-bold text-slate-900">
                {policy.advertising.sdkName}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-mono uppercase text-slate-500 font-semibold block">
                Ad Format Detected
              </span>
              <span className="text-sm font-bold text-emerald-800">
                {policy.advertising.adType}
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {policy.advertising.statement}
          </p>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-1">
            <span className="font-bold block">{policy.advertising.noOtherTypesNote}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {policy.advertising.dataNote}
          </p>
        </div>
      </section>

      {/* 6. Payments & Subscriptions */}
      <section id="payments" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.payments.title}
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-900 text-sm sm:text-base">
            {policy.payments.statement}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {policy.payments.details}
          </p>
        </div>
      </section>

      {/* 7. Security Architecture */}
      <section id="security" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.security.title}
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            {policy.security.statement}
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            {policy.security.details}
          </p>
        </div>
      </section>

      {/* 8. Children's Privacy */}
      <section id="children" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Baby className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.children.title}
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            {policy.children.statement}
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            {policy.children.details}
          </p>
        </div>
      </section>

      {/* 9. Retention & External Governance */}
      <section id="retention" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.retention.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono uppercase text-emerald-800 font-semibold block">
                Local Storage Retention
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {policy.retention.localRetention}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono uppercase text-slate-500 font-semibold block">
                Third-Party Processing
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {policy.retention.externalRetention}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Firebase / Analytics Statement */}
      <section id="firebase" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.firebase.title}
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 font-semibold text-sm sm:text-base">
            {policy.firebase.statement}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {policy.firebase.details}
          </p>
        </div>
      </section>

      {/* 11. Technical Verification Disclosures */}
      <section id="verification" className="scroll-mt-24 space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-amber-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {policy.technicalVerification.title}
            </h2>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300/80 text-amber-950 font-mono text-xs sm:text-sm">
            {policy.technicalVerification.statement}
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            {policy.technicalVerification.details}
          </p>
        </div>
      </section>

      {/* Embedded Data Flow Section */}
      <section className="pt-8 border-t border-slate-200">
        <DataFlowVisual />
      </section>
    </div>
  );
};
