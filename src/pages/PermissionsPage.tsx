import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ActiveView } from '../types';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Filter
} from 'lucide-react';

interface PermissionsPageProps {
  onNavigateView: (view: ActiveView, hash?: string) => void;
}

export const PermissionsPage: React.FC<PermissionsPageProps> = ({ onNavigateView }) => {
  const { t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;
  const permissions = t.subpages.permissions;
  const [activeCategory, setActiveCategory] = useState<'all' | 'location' | 'alarms' | 'media' | 'system'>('all');

  const filteredList = activeCategory === 'all'
    ? permissions.list
    : permissions.list.filter(item => item.category === activeCategory);

  const getStatusBadge = (status: 'optional' | 'required' | 'normal' | 'special', label: string) => {
    switch (status) {
      case 'required':
        return <Badge variant="emerald" size="sm">{label}</Badge>;
      case 'optional':
        return <Badge variant="neutral" size="sm">{label}</Badge>;
      case 'normal':
        return <Badge variant="navy" size="sm">{label}</Badge>;
      case 'special':
        return <Badge variant="gold" size="sm">{label}</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{label}</Badge>;
    }
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
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
            onClick={() => onNavigateView('third-party')}
          >
            {t.nav.thirdParty}
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="navy" size="md" icon={<FileText className="w-3.5 h-3.5" />}>
            {permissions.badge}
          </Badge>
          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            {permissions.auditedBadge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {permissions.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          {permissions.subtitle}
        </p>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {permissions.intro}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono uppercase text-slate-400 font-semibold me-2 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5" />
          {permissions.filterLabel}
        </span>
        {(['all', 'location', 'alarms', 'media', 'system'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer min-h-[38px] ${
              activeCategory === cat
                ? 'bg-[#064E3B] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {permissions.filterLabels[cat]}
          </button>
        ))}
      </div>

      {/* Responsive View: Desktop/Tablet Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-sm">
            <thead className="bg-slate-100/90 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th scope="col" className="p-4 text-start font-mono text-xs uppercase tracking-wider w-1/4">
                  {permissions.tableHeaders.permission}
                </th>
                <th scope="col" className="p-4 text-start w-1/3">
                  {permissions.tableHeaders.purpose}
                </th>
                <th scope="col" className="p-4 text-start w-1/6">
                  {permissions.tableHeaders.required}
                </th>
                <th scope="col" className="p-4 text-start w-1/4">
                  {permissions.tableHeaders.ifDenied}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 align-top">
                    <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80 inline-block break-all">
                      {item.name}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 text-xs sm:text-sm leading-relaxed align-top">
                    {item.purpose}
                  </td>
                  <td className="p-4 align-top">
                    {getStatusBadge(item.status, item.statusLabel)}
                  </td>
                  <td className="p-4 text-slate-600 text-xs leading-relaxed align-top">
                    <div className="flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item.ifDenied}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Responsive View: Mobile Card Stack (Under 768px, eliminates horizontal overflow) */}
      <div className="md:hidden space-y-4">
        {filteredList.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 break-all">
                {item.name}
              </span>
              {getStatusBadge(item.status, item.statusLabel)}
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                {permissions.tableHeaders.purpose}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.purpose}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                {permissions.tableHeaders.ifDenied}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{item.ifDenied}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Clarification Box */}
      <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-emerald-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
          <ShieldCheck className="w-5 h-5 text-[#064E3B]" />
          <span>{permissions.clarificationBox.title}</span>
        </div>
        <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
          {permissions.clarificationBox.desc}
        </p>
      </div>
    </div>
  );
};
