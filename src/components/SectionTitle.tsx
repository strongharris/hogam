import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  align = 'left',
  light = false
}) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-4xl md:text-6xl font-serif font-medium tracking-tight ${light ? 'text-white' : 'text-forest'}`}>
      {children}
    </h2>
  </div>
);
