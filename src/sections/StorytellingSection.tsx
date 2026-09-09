import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Sunrise,
  Bell,
  Compass,
  BookOpen,
  Sparkles,
  Fingerprint,
  Radio,
  CloudSun,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export const StorytellingSection: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <Sunrise key="1" className="w-5 h-5 text-emerald-700" />,
    <Bell key="2" className="w-5 h-5 text-emerald-700" />,
    <Compass key="3" className="w-5 h-5 text-emerald-700" />,
    <BookOpen key="4" className="w-5 h-5 text-emerald-700" />,
    <Sparkles key="5" className="w-5 h-5 text-emerald-700" />,
    <Fingerprint key="6" className="w-5 h-5 text-emerald-700" />,
    <Radio key="7" className="w-5 h-5 text-emerald-700" />,
    <CloudSun key="8" className="w-5 h-5 text-emerald-700" />,
    <ShieldCheck key="9" className="w-5 h-5 text-emerald-700" />,
  ];

  return (
    <section id="journey" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-semibold">
            <span>{t.sections.s03.number}</span>
            <span>•</span>
            <span>{t.sections.s03.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif">
            {t.storytelling.heading}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.storytelling.subheading}
          </p>
        </div>

        {/* 9-step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.storytelling.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-md hover:border-emerald-300/80 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {step.tag}
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-400">
                      {step.stepNumber}
                    </span>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Visual Step Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Phase {step.stepNumber}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
