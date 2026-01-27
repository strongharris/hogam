import { Link } from '@tanstack/react-router';

interface LogoProps {
  showText?: boolean;
  size?: 'nav' | 'footer' | 'small';
  className?: string;
}

const sizeClasses = {
  nav: 'w-24 h-24 -mt-5 -mb-7',
  footer: 'w-24 h-24',
  small: 'w-10 h-10',
};

export function Logo({ showText = true, size = 'nav', className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img
        src="/hogam-logo.png"
        alt="Hogam logo"
        className={`object-contain ${sizeClasses[size]}`}
      />
      {showText && (
        <span className="font-serif font-bold text-xl text-forest">Hogam</span>
      )}
    </Link>
  );
}
