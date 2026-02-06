import { cn } from '@/lib/utils';

interface FlowingConnectorProps {
  flip?: boolean;
  className?: string;
}

export function FlowingConnector({ flip = false, className }: FlowingConnectorProps) {
  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full h-auto', flip && 'transform rotate-180')}
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-sage/50"
        />
        <path
          d="M0,80 C360,20 720,100 1080,40 C1260,20 1440,60 1440,60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-forest/20"
        />
        {/* Decorative dots along the curves */}
        <circle cx="180" cy="90" r="4" className="fill-sage" />
        <circle cx="540" cy="30" r="3" className="fill-forest/30" />
        <circle cx="900" cy="90" r="4" className="fill-sage" />
        <circle cx="1260" cy="30" r="3" className="fill-forest/30" />
      </svg>
    </div>
  );
}
