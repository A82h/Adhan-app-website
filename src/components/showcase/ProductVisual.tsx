import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  Moon,
  Compass,
  BookOpen,
  Clock,
  Sparkles,
  Shield,
  Volume2,
  CheckCircle2,
  Radio,
  Fingerprint,
} from 'lucide-react';

export const ProductVisual: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'prayer' | 'quran' | 'azkar' | 'qibla'>('prayer');
  const [tasbeehCount, setTasbeehCount] = useState(12);

  const incrementTasbeeh = () => {
    setTasbeehCount((prev) => (prev >= 33 ? 1 : prev + 1));
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]">
      {/* Background radial atmosphere */}
      <div
        className="absolute -inset-3 rounded-[48px] bg-gradient-to-b from-[#047857]/25 to-[#0B131F]/30 blur-2xl opacity-75 -z-10"
        aria-hidden="true"
      />

      {/* Android Hardware Chassis Frame */}
      <div className="relative rounded-[42px] border-[7px] border-[#1E293B] bg-[#0B131F] p-3.5 shadow-2xl shadow-slate-950/60">
        {/* Speaker Bezel & Camera Pinhole */}
        <div className="flex items-center justify-center gap-2 mb-2.5">
          <div className="w-14 h-1 bg-slate-700 rounded-full" />
          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full border border-slate-700/80" />
        </div>

        {/* AMOLED Screen Simulation */}
        <div className="rounded-[30px] bg-[#0A0F1D] border border-slate-800/90 text-slate-100 overflow-hidden flex flex-col h-[540px] select-none">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-mono text-slate-400 bg-[#0A0F1D]">
            <span>12:45</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Top App Header Inside Mockup */}
          <div className="px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/80 backdrop-blur-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#064E3B] text-white flex items-center justify-center shadow-xs">
                <Moon className="w-3.5 h-3.5 text-[#C5A880]" />
              </div>
              <div>
                <span className="font-bold text-xs text-white block leading-none">
                  {t.common.appName}
                </span>
                <span className="text-[9px] text-slate-400 font-mono">
                  {language === 'ar' ? 'أداء أصلي فائق السرعة' : language === 'fr' ? 'Application native' : 'Fast Native Android'}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-semibold">
              Offline Ready
            </span>
          </div>

          {/* Interactive Screen Content Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs scrollbar-none">
            {activeTab === 'prayer' && (
              <div className="space-y-3">
                {/* Hero Prayer Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#064E3B] to-[#0A382C] border border-[#047857]/50 text-white space-y-2 shadow-md">
                  <div className="flex items-center justify-between text-[11px] text-emerald-200">
                    <span className="font-medium">{t.hero.preview.nextPrayerLabel}</span>
                    <span className="font-mono bg-black/30 px-2 py-0.5 rounded text-[10px]">
                      {t.hero.preview.nextPrayerTime}
                    </span>
                  </div>
                  <div className="text-xl font-bold tracking-tight">
                    {t.hero.preview.nextPrayerName}
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-emerald-700/40 text-[11px]">
                    <span className="text-emerald-300/90">{t.hero.preview.countdownLabel}:</span>
                    <span className="font-mono font-bold text-amber-300">
                      {t.hero.preview.countdownValue}
                    </span>
                  </div>
                </div>

                {/* Location & Calculation method indicator */}
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
                  <span>{t.hero.preview.locationLabel}</span>
                  <span className="text-emerald-400 font-bold">
                    {language === 'ar' ? 'حساب فلكي محلي' : language === 'fr' ? 'Calcul astronomique' : 'Astronomical Math'}
                  </span>
                </div>

                {/* Prayer List Preview */}
                <div className="space-y-1 font-medium">
                  <div className="flex justify-between items-center px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300">
                    <span>{t.hero.preview.fajr.split(' ')[0]}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{t.hero.preview.fajr.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300">
                    <span>{t.hero.preview.dhuhr.split(' ')[0]}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{t.hero.preview.dhuhr.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 rounded-xl bg-[#064E3B]/40 border border-emerald-700/60 text-emerald-200">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {t.hero.preview.asr.split(' ')[0]}
                    </span>
                    <span className="font-mono font-bold text-[11px]">{t.hero.preview.asr.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300">
                    <span>{t.hero.preview.maghrib.split(' ')[0]}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{t.hero.preview.maghrib.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300">
                    <span>{t.hero.preview.isha.split(' ')[0]}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{t.hero.preview.isha.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quran' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                  <div className="flex justify-between items-center text-[11px] text-[#C5A880] font-medium border-b border-slate-800 pb-2">
                    <span>{t.hero.preview.dailyAyahSurah}</span>
                    <span className="font-mono text-slate-400 text-[10px]">Uthmani Text</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-slate-100 text-center font-serif py-1.5">
                    {t.hero.preview.dailyAyahText}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] space-y-2">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{language === 'ar' ? 'مشغل صوتي مدمج' : language === 'fr' ? 'Lecteur audio intégré' : 'Integrated Audio Player'}</span>
                    </span>
                    <span className="font-mono text-emerald-400">
                      {language === 'ar' ? 'نقاء عالي' : language === 'fr' ? 'Haute fidélité' : 'High Fidelity'}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'azkar' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#064E3B]/80 to-slate-900 border border-emerald-800/50 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-300">
                    {t.hero.preview.azkarCardTitle}
                  </span>
                  <p className="text-xs text-slate-100 leading-relaxed font-serif text-center py-1">
                    {t.hero.preview.azkarSample}
                  </p>
                </div>

                {/* Interactive Tasbeeh Button */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-3">
                  <div className="text-2xl font-bold font-mono text-emerald-400">
                    {tasbeehCount} / 33
                  </div>
                  <button
                    type="button"
                    onClick={incrementTasbeeh}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Fingerprint className="w-4 h-4" />
                    <span>{language === 'ar' ? 'انقر للتسبيح (لمسي)' : 'Tap to Count (Haptic)'}</span>
                  </button>
                  <span className="text-[10px] text-slate-400 block font-mono">
                    {language === 'ar' ? 'يتم حفظ العدد محليًا على جهازك' : language === 'fr' ? 'Enregistré localement sur l’appareil' : 'Saved Locally on Device'}
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'qibla' && (
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center py-5 text-center space-y-3">
                <div className="w-24 h-24 rounded-full border-4 border-dashed border-emerald-500/80 flex items-center justify-center text-emerald-400 relative">
                  <Compass className="w-12 h-12 animate-pulse text-emerald-400" />
                  <span className="absolute top-1 text-[9px] font-mono font-bold text-amber-400">
                    N
                  </span>
                </div>
                <div>
                  <div className="font-bold text-lg text-emerald-400 font-mono">
                    {t.hero.preview.qiblaBearing}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {t.hero.preview.meccaDistance}
                  </div>
                </div>
                <div className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                  {language === 'ar' ? 'مستشعرات البوصلة المدمجة بالهاتف' : language === 'fr' ? 'Capteurs de boussole intégrés' : 'Integrated Device Compass Sensors'}
                </div>
              </div>
            )}
          </div>

          {/* Mock Navigation Bar Inside Screen */}
          <div className="p-1.5 border-t border-slate-800/90 bg-slate-950 grid grid-cols-4 gap-1 text-[10px]">
            <button
              type="button"
              onClick={() => setActiveTab('prayer')}
              className={`py-1.5 rounded-lg flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                activeTab === 'prayer'
                  ? 'bg-[#064E3B] text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{t.nav.prayer.split(' ')[0]}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quran')}
              className={`py-1.5 rounded-lg flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                activeTab === 'quran'
                  ? 'bg-[#064E3B] text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.nav.quran.split(' ')[0]}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('azkar')}
              className={`py-1.5 rounded-lg flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                activeTab === 'azkar'
                  ? 'bg-[#064E3B] text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.azkar.split(' ')[0]}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('qibla')}
              className={`py-1.5 rounded-lg flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                activeTab === 'qibla'
                  ? 'bg-[#064E3B] text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{t.nav.qibla}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Honest Architectural Caption under Mockup */}
      <div className="mt-3.5 text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-[11px] font-medium border border-slate-200 shadow-xs">
          <Shield className="w-3.5 h-3.5 text-[#047857]" />
          <span>{language === 'ar' ? 'تطبيق معتمد يحترم الخصوصية 100%' : language === 'fr' ? 'Application sécurisée et confidentielle' : '100% Privacy-Focused Android App'}</span>
        </div>
        <p className="text-[11px] text-slate-500">
          {t.common.productConceptNotice}
        </p>
      </div>
    </div>
  );
};
