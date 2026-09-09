import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'navy' | 'gold' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1 font-medium',
    md: 'text-xs md:text-sm px-3 py-1 gap-1.5 font-medium',
  };

  const variantClasses = {
    emerald: 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]',
    navy: 'bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1]',
    gold: 'bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047]',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full whitespace-nowrap select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
