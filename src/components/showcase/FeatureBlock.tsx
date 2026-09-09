import React from 'react';
import { Badge } from '../common/Badge';

export interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technicalBadge?: string;
  statusBadge?: string;
  className?: string;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  icon,
  title,
  description,
  technicalBadge,
  statusBadge,
  className = '',
}) => {
  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#047857]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center border border-[#A7F3D0] group-hover:scale-105 transition-transform">
            {icon}
          </div>
          {statusBadge && (
            <Badge variant="neutral" size="sm">
              {statusBadge}
            </Badge>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {technicalBadge && (
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60 break-words">
            {technicalBadge}
          </span>
        </div>
      )}
    </div>
  );
};
