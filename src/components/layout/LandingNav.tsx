/**
 * Navigation bar for the public landing page.
 * Fixed position, transparent background with blur effect.
 */
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';

export function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-soft border border-white/50">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-ink/70 hover:text-forest transition-colors">Features</a>
            <a href="#demo" className="text-sm font-medium text-ink/70 hover:text-forest transition-colors">Demo</a>
            <a href="#pricing" className="text-sm font-medium text-ink/70 hover:text-forest transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="/dashboard">Log in</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/dashboard">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
