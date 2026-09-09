import React from 'react';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: 'emerald' | 'navy' | 'gold' | 'neutral';
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  badge,
  badgeVariant = 'navy',
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs font-bold tracking-wider text-[#047857] bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#A7F3D0]">
          {number}
        </span>
        {badge && (
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
