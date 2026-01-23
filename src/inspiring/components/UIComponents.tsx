import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'forest';
}

export const InkButton: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-3 font-medium text-lg transition-all duration-300 rounded-full border-2";
  
  const variants = {
    // Primary: Solid black/ink pill
    primary: "bg-ink border-ink text-paper hover:bg-ink/80 hover:scale-105 active:scale-95 shadow-soft",
    // Forest: Deep green pill (Flow style)
    forest: "bg-forest border-forest text-white hover:bg-forest/90 hover:scale-105 active:scale-95 shadow-soft",
    // Secondary: Paper pill
    secondary: "bg-white border-white text-ink hover:bg-gray-50 shadow-soft hover:shadow-lg",
    // Outline: Transparent with border
    outline: "bg-transparent border-ink/20 text-ink hover:border-ink hover:bg-ink/5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const InkCard: React.FC<{ children: React.ReactNode; className?: string; variant?: 'light' | 'dark' }> = ({ children, className = '', variant = 'light' }) => {
  const baseClasses = "rounded-4xl p-8 transition-all duration-500";
  const variantClasses = variant === 'dark' 
    ? "bg-forest text-white border border-white/10 shadow-2xl" 
    : "bg-white text-ink border border-ink/5 shadow-soft hover:shadow-xl";

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};

export const InkBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-4 py-1.5 bg-sage text-forest text-sm font-bold rounded-full border border-forest/10 ${className}`}>
    {children}
  </span>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; align?: 'left' | 'center'; light?: boolean }> = ({ children, align = 'left', light = false }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-4xl md:text-6xl font-serif font-medium tracking-tight ${light ? 'text-white' : 'text-forest'}`}>
      {children}
    </h2>
  </div>
);