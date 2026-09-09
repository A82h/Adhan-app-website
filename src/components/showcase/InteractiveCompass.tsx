import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Compass, ShieldCheck, RefreshCw, Navigation, Cpu } from 'lucide-react';

export const InteractiveCompass: React.FC = () => {
  const { language } = useLanguage();
  const [rotation, setRotation] = useState(134); // Makkah azimuth approximation for testing
  const [selectedCity, setSelectedCity] = useState<'mecca' | 'cairo' | 'london' | 'paris' | 'jakarta'>('cairo');

  const cityBearings = {
    cairo: { name: 'Cairo / القاهرة', angle: 136, dist: '1,280 km' },
    london: { name: 'London / لندن', angle: 119, dist: '4,790 km' },
    paris: { name: 'Paris / باريس', angle: 122, dist: '4,450 km' },
    jakarta: { name: 'Jakarta / جاكرتا', angle: 295, dist: '7,920 km' },
    mecca: { name: 'Mecca / مكة المكرمة', angle: 0, dist: '0 km' },
  };

  const handleCityChange = (city: keyof typeof cityBearings) => {
    setSelectedCity(city);
    setRotation(cityBearings[city].angle);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {language === 'ar' ? 'محاكي بوصلة القبلة الدقيقة' : language === 'fr' ? 'Simulateur de boussole Qibla' : 'Precise Qibla Simulator'}
            </h4>
            <span className="text-[11px] text-slate-500 font-mono">
              Sensor.TYPE_ROTATION_VECTOR
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% Offline
        </span>
      </div>

      {/* City Selector */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {(Object.keys(cityBearings) as Array<keyof typeof cityBearings>).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => handleCityChange(key)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              selectedCity === key
                ? 'bg-[#064E3B] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cityBearings[key].name}
          </button>
        ))}
      </div>

      {/* Compass Dial Graphic */}
      <div className="flex flex-col items-center justify-center my-2">
        <div className="relative w-56 h-56 rounded-full border-4 border-slate-100 bg-slate-900 flex items-center justify-center shadow-inner overflow-hidden">
          {/* Degree markers */}
          <div className="absolute inset-2 rounded-full border border-slate-800 flex items-center justify-center pointer-events-none">
            <span className="absolute top-2 text-[10px] font-mono font-bold text-red-400">N</span>
            <span className="absolute right-2 text-[10px] font-mono font-bold text-slate-400">E</span>
            <span className="absolute bottom-2 text-[10px] font-mono font-bold text-slate-400">S</span>
            <span className="absolute left-2 text-[10px] font-mono font-bold text-slate-400">W</span>
          </div>

          {/* Compass Needle (Rotates smoothly based on state) */}
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="relative flex flex-col items-center justify-center h-44">
              {/* Qibla Indicator Arrow pointing to Kaaba */}
              <div className="w-4 h-20 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-full shadow-lg flex items-center justify-center text-slate-900">
                <Navigation className="w-3 h-3 text-slate-950 fill-current rotate-180" />
              </div>
              <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-950 z-10 shadow-md" />
              <div className="w-3 h-20 bg-slate-700/60 rounded-b-full" />
            </div>
          </div>

          {/* Center Overlay readout */}
          <div className="absolute bottom-4 px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-emerald-400 font-bold">
            {rotation}° Azimuth
          </div>
        </div>

        {/* Technical Vector details */}
        <div className="w-full mt-6 grid grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 text-[11px] block">{language === 'ar' ? 'المسافة التقريبية' : 'Great-Circle Vector'}</span>
            <span className="font-bold text-slate-900 font-mono text-sm">{cityBearings[selectedCity].dist}</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 text-[11px] block">{language === 'ar' ? 'معالجة المستشعر' : 'Sensor Engine'}</span>
            <span className="font-bold text-emerald-700 font-mono text-sm flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              On-Device
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
