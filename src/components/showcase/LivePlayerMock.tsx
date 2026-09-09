import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Radio, Play, Pause, Volume2, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';

export const LivePlayerMock: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeChannel, setActiveChannel] = useState<'makkah' | 'madinah'>('makkah');
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Radio className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {language === 'ar' ? 'مشغل البث المباشر للحرمين الشريفين' : language === 'fr' ? 'Lecteur du direct des Deux Saintes Mosquées' : 'Holy Sanctuaries Live Player'}
            </h4>
            <span className="text-[11px] text-slate-500 font-medium">
              {language === 'ar' ? 'بث مباشر فائق النقاء وسلس' : language === 'fr' ? 'Flux direct haute fidélité fluide' : 'Smooth High-Definition Live Stream'}
            </span>
          </div>
        </div>

        {/* Channel Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveChannel('makkah')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              activeChannel === 'makkah'
                ? 'bg-[#064E3B] font-bold text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ar' ? 'مكة المكرمة' : 'Makkah'}
          </button>
          <button
            type="button"
            onClick={() => setActiveChannel('madinah')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              activeChannel === 'madinah'
                ? 'bg-[#064E3B] font-bold text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ar' ? 'المدينة المنورة' : 'Madinah'}
          </button>
        </div>
      </div>

      {/* Video Stream Stage Mockup */}
      <div className="relative rounded-2xl bg-slate-950 overflow-hidden text-white aspect-video flex flex-col justify-between p-4 shadow-lg border border-slate-800">
        {/* Top Badges inside Video Stage */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              LIVE
            </span>
            <span className="text-xs font-bold text-slate-100">
              {activeChannel === 'makkah'
                ? (language === 'ar' ? 'قناة القرآن الكريم — مكة المكرمة' : 'Makkah Live Stream')
                : (language === 'ar' ? 'قناة السنة النبوية — المدينة المنورة' : 'Madinah Live Stream')}
            </span>
          </div>

          <span className="text-[10px] font-mono text-emerald-400 bg-black/50 px-2 py-0.5 rounded border border-emerald-500/30">
            1080p • HLS
          </span>
        </div>

        {/* Ambient Visual Atmosphere inside Screen */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
          <div className="text-center space-y-2 p-4">
            <div className="w-16 h-16 rounded-full bg-emerald-700/30 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-300">
              <Sparkles className="w-8 h-8 animate-pulse text-[#C5A880]" />
            </div>
            <p className="text-sm font-medium text-slate-200">
              {activeChannel === 'makkah'
                ? (language === 'ar' ? 'بث مباشر من المسجد الحرام والطواف حول الكعبة المشرفة' : 'Direct broadcast of the Holy Kaaba and congregational prayers')
                : (language === 'ar' ? 'بث مباشر من المسجد النبوي الشريف والروضة المباركة' : 'Direct broadcast of the Prophet’s Mosque courtyard and Rawdah')}
            </p>
          </div>
        </div>

        {/* Bottom Video Controls Mock */}
        <div className="flex items-center justify-between z-10 pt-2 border-t border-slate-800/80 text-xs">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause stream' : 'Play stream'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Volume2 className="w-4 h-4 text-slate-400" />
              <span className="text-[11px] font-mono">Live Audio Feed</span>
            </div>
          </div>

          <span className="text-[10px] text-slate-400 font-mono">
            {language === 'ar' ? 'يتطلب اتصال إنترنت' : 'Requires Internet'}
          </span>
        </div>
      </div>

      {/* Required Transparency Disclaimer Banner */}
      <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-bold block">
            {language === 'ar' ? 'إشعار الشفافية للبث المباشر:' : 'Transparency Notice on Live Broadcasting:'}
          </span>
          <p className="text-amber-800 leading-relaxed text-[11px]">
            {t.liveSection.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};
