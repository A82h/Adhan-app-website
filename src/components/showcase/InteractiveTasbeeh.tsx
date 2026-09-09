import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { RotateCcw, Fingerprint, Sparkles, Volume2, VolumeX, CheckCircle2 } from 'lucide-react';

export const InteractiveTasbeeh: React.FC = () => {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState<number | 'infinity'>(33);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedDhikr, setSelectedDhikr] = useState(0);
  const [justCompleted, setJustCompleted] = useState(false);

  const dhikrList = [
    {
      ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
      en: 'Subhan-Allahi wa bihamdihi, Subhan-Allahil-Azeem',
      fr: 'Gloire et louange à Allah, Gloire à Allah l’Immense',
    },
    {
      ar: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      en: 'Astaghfirullah wa atoobu ilayh',
      fr: 'Je demande pardon à Allah et je me repens à Lui',
    },
    {
      ar: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
      en: 'La hawla wa la quwwata illa billahil-Aliyyil-Azeem',
      fr: 'Il n’y a de puissance ni de force qu’en Allah le Très Haut',
    },
    {
      ar: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ',
      en: 'Allahumma salli wa sallim ala Nabiyyina Muhammad',
      fr: 'Ô Allah, prie et salue notre Prophète Muhammad',
    },
  ];

  const handleTap = () => {
    const nextCount = count + 1;
    setCount(nextCount);

    if (target !== 'infinity' && nextCount === target) {
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 1500);
    }
  };

  const resetCount = () => {
    setCount(0);
    setJustCompleted(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {language === 'ar' ? 'السبحة الإلكترونية التفاعلية' : language === 'fr' ? 'Chapelet électronique interactif' : 'Interactive Smart Tasbeeh'}
            </h4>
            <span className="text-[11px] text-slate-500 font-mono">
              Room Local Store • Haptic Feedback
            </span>
          </div>
        </div>

        {/* Target Cycle Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-mono">
          <button
            type="button"
            onClick={() => { setTarget(33); setCount(0); }}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              target === 33 ? 'bg-white font-bold text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            33
          </button>
          <button
            type="button"
            onClick={() => { setTarget(99); setCount(0); }}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              target === 99 ? 'bg-white font-bold text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            99
          </button>
          <button
            type="button"
            onClick={() => { setTarget('infinity'); }}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              target === 'infinity' ? 'bg-white font-bold text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ∞
          </button>
        </div>
      </div>

      {/* Selected Dhikr Display */}
      <div className="rounded-2xl bg-emerald-50/60 border border-emerald-100/80 p-4 mb-5 text-center">
        <p className="font-serif text-base text-emerald-950 font-medium leading-relaxed">
          {language === 'ar' ? dhikrList[selectedDhikr].ar : language === 'fr' ? dhikrList[selectedDhikr].fr : dhikrList[selectedDhikr].en}
        </p>
        <div className="flex justify-center gap-1.5 mt-3">
          {dhikrList.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => { setSelectedDhikr(idx); setCount(0); }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                selectedDhikr === idx ? 'w-6 bg-emerald-600' : 'bg-emerald-200 hover:bg-emerald-300'
              }`}
              aria-label={`Dhikr ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Counter Main Circle & Tap Target */}
      <div className="flex flex-col items-center justify-center my-4">
        <div className="relative">
          {/* Completion Celebration Ring */}
          {justCompleted && (
            <div className="absolute -inset-4 rounded-full border-4 border-emerald-500 animate-ping opacity-75" />
          )}

          <button
            type="button"
            onClick={handleTap}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-[#064E3B] to-[#047857] text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-950/20 active:scale-95 transition-all cursor-pointer group relative overflow-hidden"
          >
            {/* Subtle light sweep */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <span className="text-4xl font-extrabold font-mono tracking-tight group-active:scale-110 transition-transform">
              {count}
            </span>

            <span className="text-[11px] text-emerald-200 font-medium mt-1 flex items-center gap-1">
              <Fingerprint className="w-3.5 h-3.5" />
              {language === 'ar' ? 'المس للتسبيح' : language === 'fr' ? 'Toucher' : 'Tap'}
            </span>

            {target !== 'infinity' && (
              <span className="text-[10px] text-emerald-300/80 font-mono mt-0.5">
                {language === 'ar' ? `الهدف: ${target}` : `Target: ${target}`}
              </span>
            )}
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 mt-5">
          <button
            type="button"
            onClick={resetCount}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'ar' ? 'إعادة ضبط' : language === 'fr' ? 'Réinitialiser' : 'Reset'}</span>
          </button>

          <span className="text-[11px] text-slate-400 font-mono">
            {language === 'ar' ? 'اهتزاز لمسي محاكي' : 'Simulated Haptics'}
          </span>
        </div>
      </div>
    </div>
  );
};
