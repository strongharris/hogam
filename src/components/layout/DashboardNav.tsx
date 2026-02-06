/**
 * Navigation bar for the authenticated dashboard.
 * Sticky position with subtle paper background.
 */
import { Flame } from 'lucide-react';
import { Logo } from '@/components/Logo';

interface DashboardNavProps {
  streak: number;
  level: number;
}

export function DashboardNav({ streak, level }: DashboardNavProps) {
  return (
    <nav className="sticky top-0 z-50 px-6 py-4 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-6">
          <a href="/dashboard" className="text-sm font-medium text-forest">Dashboard</a>
          <a href="#" className="text-sm font-medium text-ink/70 hover:text-forest transition-colors">Vocabulary</a>
          <a href="#" className="text-sm font-medium text-ink/70 hover:text-forest transition-colors">Grammar</a>
          <a href="#" className="text-sm font-medium text-ink/70 hover:text-forest transition-colors">Settings</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-persimmon/10 rounded-full">
            <Flame className="w-4 h-4 text-persimmon" />
            <span className="text-sm font-bold text-persimmon">{streak} day streak</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shadow-soft">
            <span className="font-bold text-forest">L{level}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
