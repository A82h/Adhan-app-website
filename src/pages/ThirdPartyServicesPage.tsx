import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ActiveView } from '../types';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { 
  Server, 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  Lock,
  CheckCircle2,
  Tv,
  MapPin,
  Cloud,
  Volume2,
  BookOpen
} from 'lucide-react';

interface ThirdPartyServicesPageProps {
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const ThirdPartyServicesPage: React.FC<ThirdPartyServicesPageProps> = ({
  onNavigateView,
}) => {
  const { t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;
  const thirdParty = t.subpages.thirdParty;

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'ads':
        return <Tv className="w-5 h-5 text-amber-600" />;
      case 'weather':
        return <Cloud className="w-5 h-5 text-blue-600" />;
      case 'quran':
        return <BookOpen className="w-5 h-5 text-emerald-700" />;
      case 'audio':
        return <Volume2 className="w-5 h-5 text-purple-600" />;
      case 'streaming':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'maps':
        return <MapPin className="w-5 h-5 text-red-600" />;
      default:
        return <Server className="w-5 h-5 text-slate-600" />;
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
            onClick={() => onNavigateView('privacy')}
          >
            {t.nav.privacy}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigateView('permissions')}
          >
            {t.nav.permissions}
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="navy" size="md" icon={<Server className="w-3.5 h-3.5" />}>
            {thirdParty.badge}
          </Badge>
          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            {thirdParty.auditedBadge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {thirdParty.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          {thirdParty.subtitle}
        </p>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {thirdParty.intro}
        </p>
      </div>

      {/* Section 1: Audited External Services Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {thirdParty.integrationsHeading}
          </h2>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            {thirdParty.onDemandBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {thirdParty.services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {service.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-500 block">
                        {thirdParty.labels.provider}: {service.provider}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wider">
                      {thirdParty.labels.purpose}:
                    </span>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {service.purpose}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wider">
                      {thirdParty.labels.whenTriggered}:
                    </span>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {service.whenUsed}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wider">
                      {thirdParty.labels.dataInvolved}:
                    </span>
                    <p className="font-mono text-xs text-emerald-900 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 mt-1 inline-block">
                      {service.dataTransferred}
                    </p>
                  </div>
                </div>
              </div>

              {service.ownershipNote && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mt-2">
                  <span className="font-semibold text-slate-800 block mb-0.5">{thirdParty.labels.note}:</span>
                  {service.ownershipNote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Internet & Network Connections Comparison */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {thirdParty.networkArchitecture.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-1">
            {thirdParty.networkArchitecture.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offline Column */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#ECFDF5]/50 border border-emerald-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60">
              <div className="flex items-center gap-2 font-bold text-emerald-950 text-base">
                <WifiOff className="w-5 h-5 text-[#064E3B]" />
                <span>{thirdParty.networkArchitecture.localTitle}</span>
              </div>
              <Badge variant="emerald" size="sm">
                {thirdParty.networkArchitecture.localBadge}
              </Badge>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
              {thirdParty.networkArchitecture.localItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Column */}
          <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-200/60">
              <div className="flex items-center gap-2 font-bold text-blue-950 text-base">
                <Wifi className="w-5 h-5 text-blue-700" />
                <span>{thirdParty.networkArchitecture.onlineTitle}</span>
              </div>
              <Badge variant="navy" size="sm">
                {thirdParty.networkArchitecture.onlineBadge}
              </Badge>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-950">
              {thirdParty.networkArchitecture.onlineItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Technical Transparency Disclosures */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {thirdParty.technicalDisclosuresHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Firebase Disclosure */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{thirdParty.technicalDisclosures.firebaseTitle}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {thirdParty.technicalDisclosures.firebaseDesc}
            </p>
          </div>

          {/* Cleartext Traffic Disclosure */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>{thirdParty.technicalDisclosures.cleartextTitle}</span>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              {thirdParty.technicalDisclosures.cleartextDesc}
            </p>
          </div>

          {/* Google Maps Intent Disclosure */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <ExternalLink className="w-4 h-4 text-blue-600" />
              <span>{thirdParty.technicalDisclosures.mapsIntentTitle}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {thirdParty.technicalDisclosures.mapsIntentDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
