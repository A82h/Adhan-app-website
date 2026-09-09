import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { 
  User, 
  Smartphone, 
  Cpu, 
  Cloud, 
  ArrowDown, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Lock,
  Globe
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const DataFlowVisual: React.FC = () => {
  const { t, direction } = useLanguage();
  const flow = t.subpages.dataFlow;

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full">
      {/* Header Info */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <Badge variant="emerald" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
          {flow.badge}
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {flow.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {flow.subtitle}
        </p>
      </div>

      {/* Step 1: User */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
              Origin
            </span>
            <h4 className="text-base font-bold text-slate-900">{flow.userStep.title}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{flow.userStep.desc}</p>
          </div>
        </div>

        {/* Down Connector */}
        <div className="py-2 flex flex-col items-center text-slate-400">
          <div className="w-0.5 h-5 bg-slate-300"></div>
          <ArrowDown className="w-4 h-4 text-slate-400 -mt-1" />
        </div>

        {/* Step 2: Android App */}
        <div className="w-full max-w-md p-4 sm:p-5 rounded-2xl bg-[#064E3B] text-white shadow-md flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-white flex items-center justify-center shrink-0 border border-emerald-600/40">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                Android Client
              </span>
              <span className="text-[10px] bg-emerald-900/80 text-emerald-200 px-2 py-0.5 rounded font-mono">
                Local-First
              </span>
            </div>
            <h4 className="text-base font-bold text-white mt-0.5">{flow.appStep.title}</h4>
            <p className="text-xs text-emerald-100/90 mt-0.5">{flow.appStep.desc}</p>
          </div>
        </div>

        {/* Down Connector */}
        <div className="py-2 flex flex-col items-center text-slate-400">
          <div className="w-0.5 h-5 bg-slate-300"></div>
          <ArrowDown className="w-4 h-4 text-slate-400 -mt-1" />
        </div>

        {/* Step 3: Local Processing (Primary Hub) */}
        <div className="w-full rounded-2xl bg-white border-2 border-emerald-600/30 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#064E3B] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {flow.localProcessing.title}
                </h4>
                <p className="text-xs text-slate-500">{flow.localProcessing.desc}</p>
              </div>
            </div>
            <Badge variant="emerald" size="sm" icon={<Lock className="w-3 h-3" />}>
              {flow.localProcessing.badge}
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {flow.localProcessing.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1 hover:bg-emerald-50/40 transition-colors"
              >
                <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                  <span>{item.name}</span>
                </div>
                <p className="text-xs text-slate-600 ps-6 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Down Connector to External */}
        <div className="py-2 flex flex-col items-center text-slate-400">
          <div className="w-0.5 h-5 bg-slate-300"></div>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full my-1">
            On-Demand Trigger
          </span>
          <div className="w-0.5 h-4 bg-slate-300"></div>
          <ArrowDown className="w-4 h-4 text-slate-400 -mt-1" />
        </div>

        {/* Step 4: Optional External Services */}
        <div className="w-full rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {flow.externalServices.title}
                </h4>
                <p className="text-xs text-slate-500">{flow.externalServices.desc}</p>
              </div>
            </div>
            <Badge variant="navy" size="sm" icon={<Globe className="w-3 h-3" />}>
              {flow.externalServices.badge}
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {flow.externalServices.items.map((srv, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-slate-900">
                    {srv.name}
                  </span>
                  <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                    {srv.protocol}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Table (How the App Works) */}
      <div className="pt-6 border-t border-slate-200 space-y-4">
        <h4 className="text-lg font-bold text-slate-900">
          {flow.summaryTable.title}
        </h4>
        
        {/* Responsive Table / Card Container */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4 text-start">
                    {flow.summaryTable.headers.feature}
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 text-start">
                    {flow.summaryTable.headers.type}
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 text-start">
                    {flow.summaryTable.headers.processing}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {flow.summaryTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-3.5 sm:p-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium font-mono ${
                          row.isLocal
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-blue-50 text-blue-800 border border-blue-200'
                        }`}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-600 text-xs sm:text-sm">
                      {row.processing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
