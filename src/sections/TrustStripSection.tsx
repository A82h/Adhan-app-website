import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { UserX, Cpu, WifiOff, Tv, CreditCard, ShieldCheck } from 'lucide-react';

export const TrustStripSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    UserX: <UserX className="w-5 h-5 text-emerald-700" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-700" />,
    WifiOff: <WifiOff className="w-5 h-5 text-emerald-700" />,
    Tv: <Tv className="w-5 h-5 text-emerald-700" />,
    CreditCardOff: <CreditCard className="w-5 h-5 text-emerald-700" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <section id="trust-facts" className="py-12 bg-slate-900 text-slate-100 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
            {t.sections.s02.number} • {t.sections.s02.subtitle}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.trustStrip.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.trustStrip.facts.map((fact, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-emerald-500/50 transition-colors flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center shrink-0">
                {iconMap[fact.icon] || <ShieldCheck className="w-5 h-5 text-emerald-400" />}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-100">
                  {fact.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
