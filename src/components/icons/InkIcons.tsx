import React, { useState } from 'react';

interface IconProps {
  className?: string;
}

export const TigerLogo: React.FC<IconProps> = ({ className }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Persimmon */}
        {/* Main Fruit - Watercolor opacity */}
        <circle cx="50" cy="20" r="14" fill="#F36A2D" fillOpacity="0.9" stroke="#111111" strokeWidth="1.5" />
        {/* Highlight - Softer */}
        <path d="M45 15 Q 50 12 55 15" stroke="#F89B63" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

        {/* Stem */}
        <path d="M50 6 L 50 12" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 12 L 42 16 M 50 12 L 58 16" stroke="#7C8E2E" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
        <path d="M50 12 L 45 10 M 50 12 L 55 10" stroke="#7C8E2E" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />

        {/* Ears */}
        {/* Outer Ear - Watercolor opacity */}
        <circle cx="25" cy="40" r="10" fill="#D7964F" fillOpacity="0.9" stroke="#111111" strokeWidth="1.5" />
        {/* Inner Ear */}
        <circle cx="25" cy="40" r="6" fill="#EBD7C2" fillOpacity="0.9" />
        {/* Ear Detail */}
        <circle cx="25" cy="40" r="3" fill="#111111" />

        {/* Right Ear */}
        <circle cx="75" cy="40" r="10" fill="#D7964F" fillOpacity="0.9" stroke="#111111" strokeWidth="1.5" />
        <circle cx="75" cy="40" r="6" fill="#EBD7C2" fillOpacity="0.9" />
        <circle cx="75" cy="40" r="3" fill="#111111" />

        {/* Face Shape / Head Base (Main Orange Fur) - Watercolor opacity */}
        <path d="M15 50 C 15 30, 85 30, 85 50 C 85 75, 70 85, 50 85 C 30 85, 15 75, 15 50 Z"
          fill="#D7964F" fillOpacity="0.85" stroke="#111111" strokeWidth="2" />

        {/* Inner Cheek Area (Light Tan) - Watercolor blend */}
        <path d="M25 45 Q 50 40 75 45 L 75 60 Q 50 55 25 60 Z" fill="#E6B577" fillOpacity="0.8" stroke="none" />

        {/* Muzzle (White Fur) */}
        <path d="M18 55 Q 50 50 82 55 Q 82 80 50 83 Q 18 80 18 55" fill="#F9F5EC" fillOpacity="0.95" stroke="none" />

        {/* Forehead Stripes - Ink solid */}
        <path d="M50 32 L 50 40" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M42 34 L 44 42" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M58 34 L 56 42" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />

        {/* Cheek Stripes */}
        <path d="M18 50 L 28 52" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 58 L 30 60" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M82 50 L 72 52" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 58 L 70 60" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyes */}
        <circle cx="38" cy="52" r="4" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />
        <circle cx="38" cy="52" r="2" fill="#111111" />

        <circle cx="62" cy="52" r="4" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />
        <circle cx="62" cy="52" r="2" fill="#111111" />

        {/* Eyebrows */}
        <path d="M34 44 Q 38 42 42 44" stroke="#111111" strokeWidth="1" strokeLinecap="round" />
        <path d="M58 44 Q 62 42 66 44" stroke="#111111" strokeWidth="1" strokeLinecap="round" />

        {/* Nose & Mouth */}
        <path d="M46 64 L 54 64 L 50 70 Z" fill="#F28C7D" fillOpacity="0.9" stroke="#111111" strokeWidth="0.75" strokeLinejoin="round" />
        <path d="M50 70 L 50 74" stroke="#111111" strokeWidth="1" strokeLinecap="round" />
        <path d="M50 74 Q 45 78 40 72" stroke="#111111" strokeWidth="1" strokeLinecap="round" />
        <path d="M50 74 Q 55 78 60 72" stroke="#111111" strokeWidth="1" strokeLinecap="round" />

        {/* Whiskers dots */}
        <circle cx="42" cy="70" r="0.5" fill="#333333" />
        <circle cx="38" cy="68" r="0.5" fill="#333333" />
        <circle cx="58" cy="70" r="0.5" fill="#333333" />
        <circle cx="62" cy="68" r="0.5" fill="#333333" />
      </svg>
    );
  }

  return (
    <img
      src="/hogam-logo.png"
      alt="Hogam Tiger Logo"
      className={`object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  );
};

export const BookIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30 C 20 20, 45 15, 50 25 C 55 15, 80 20, 80 30 L 80 80 C 80 70, 55 65, 50 75 C 45 65, 20 70, 20 80 Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 25 L 50 75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 35 L 45 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 45 L 45 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M55 32 L 75 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M55 42 L 75 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MountainIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 80 L 35 30 L 55 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 50 L 65 15 L 90 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 80 L 95 80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Sun - Watercolor */}
    <circle cx="75" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="#F36A2D" fillOpacity="0.8" />
  </svg>
);

export const PencilIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 10 L 90 30 L 40 80 L 20 80 L 20 60 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#D7964F" fillOpacity="0.2"/>
    <path d="M25 75 L 35 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M65 15 L 85 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 85 L 25 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StrawberryIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M30 30 Q 15 45 30 75 Q 50 90 70 75 Q 85 45 70 30 Q 50 15 30 30 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#F36A2D" fillOpacity="0.8" />
     <path d="M30 30 L 40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
     <path d="M70 30 L 60 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
     <path d="M50 30 L 50 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
     <path d="M40 20 L 60 20" stroke="#7C8E2E" strokeWidth="2" strokeLinecap="round" />
     {/* Seeds */}
     <circle cx="40" cy="45" r="1.5" fill="currentColor" />
     <circle cx="60" cy="45" r="1.5" fill="currentColor" />
     <circle cx="50" cy="60" r="1.5" fill="currentColor" />
     <circle cx="40" cy="70" r="1.5" fill="currentColor" />
     <circle cx="60" cy="70" r="1.5" fill="currentColor" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Core */}
    <circle cx="50" cy="50" r="18" fill="#F36A2D" fillOpacity="0.8" stroke="currentColor" strokeWidth="2" />
    {/* Rays */}
    <path d="M50 20 L 50 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 80 L 50 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 50 L 10 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M80 50 L 90 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 28 L 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M72 72 L 79 79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M72 28 L 79 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 72 L 21 79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Detail */}
    <circle cx="50" cy="50" r="12" stroke="#F89B63" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 20 C 60 20 40 30 40 50 C 40 70 60 80 70 80 C 50 85 20 65 20 40 C 20 20 50 10 70 20 Z"
      fill="#FCD34D" fillOpacity="0.8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Craters/Texture */}
    <circle cx="45" cy="45" r="2" fill="currentColor" fillOpacity="0.2" />
    <circle cx="35" cy="55" r="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="50" cy="65" r="3" fill="currentColor" fillOpacity="0.1" />
    {/* Stars */}
    <path d="M80 30 L 82 32 L 80 34 L 78 32 Z" fill="currentColor" />
    <path d="M85 60 L 86 61 L 85 62 L 84 61 Z" fill="currentColor" />
  </svg>
);

export const WaterIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Droplet */}
    <path d="M50 15 C 50 15 20 50 20 65 C 20 82 33 95 50 95 C 67 95 80 82 80 65 C 80 50 50 15 50 15 Z"
      fill="#3B82F6" fillOpacity="0.6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Highlight */}
    <path d="M35 60 Q 35 50 45 40" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    {/* Ripples */}
    <path d="M10 85 Q 50 105 90 85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

export const FireIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Flame */}
    <path d="M50 15 C 50 15 20 45 20 70 C 20 85 35 95 50 95 C 65 95 80 85 80 70 C 80 45 50 15 50 15 Z"
      fill="#F36A2D" fillOpacity="0.8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Inner Flame */}
    <path d="M50 40 C 50 40 35 60 35 75 C 35 85 42 90 50 90 C 58 90 65 85 65 75 C 65 60 50 40 50 40 Z"
      fill="#FCD34D" fillOpacity="0.9" stroke="none" />
    <path d="M50 40 C 50 40 35 60 35 75 C 35 85 42 90 50 90 C 58 90 65 85 65 75 C 65 60 50 40 50 40"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

export const TreeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trunk */}
    <path d="M45 60 L 45 90 L 35 95 M 55 60 L 55 90 L 65 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="#D7964F" fillOpacity="0.8" />
    <path d="M45 90 L 55 90" stroke="currentColor" strokeWidth="2" />

    {/* Leaves - Cloud shape */}
    <path d="M30 60 C 10 60 10 30 30 25 C 30 10 70 10 70 25 C 90 30 90 60 70 60 C 70 75 30 75 30 60 Z"
      fill="#0D3328" fillOpacity="0.8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />

    {/* Leaf Details */}
    <path d="M40 35 L 45 45" stroke="white" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    <path d="M60 30 L 55 40" stroke="white" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
  </svg>
);
