import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-xl select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap min-h-[44px]';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#064E3B] text-white hover:bg-[#047857] shadow-sm shadow-[#064E3B]/10 active:bg-[#022c22] focus-visible:outline-[#047857]',
    secondary:
      'bg-[#111C2E] text-white hover:bg-[#1A2840] shadow-sm active:bg-[#0B131F] focus-visible:outline-[#111C2E]',
    outline:
      'bg-white text-[#1E293B] border border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 focus-visible:outline-[#064E3B]',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-visible:outline-slate-400',
    gold:
      'bg-[#C5A880] text-[#0B131F] font-semibold hover:bg-[#B39369] shadow-sm active:bg-[#A18055] focus-visible:outline-[#C5A880]',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'start' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
