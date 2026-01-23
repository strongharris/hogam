import React from 'react';

export const HanjiBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F9F8F6]">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hanji-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.7 0 0 0 0 0.6 0 0 0 0.3 0"/>
          </filter>
        </defs>

        {/* 1. Base Paper Color */}
        <rect width="100%" height="100%" fill="#F9F8F6" />

        {/* 2. Very subtle Noise Texture for high-end feel */}
        <rect width="100%" height="100%" filter="url(#hanji-noise)" opacity="0.15" style={{ mixBlendMode: 'multiply' }} />
        
        {/* 3. Vignette removed for cleaner look found in reference */}
      </svg>
    </div>
  );
};