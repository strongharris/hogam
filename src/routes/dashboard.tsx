import { createFileRoute } from '@tanstack/react-router';
import {
  Flame,
  ChevronRight,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Logo } from '@/components/Logo';
import { FlowingConnector } from '@/components/FlowingConnector';

export const Route = createFileRoute('/dashboard')({ component: Dashboard });

// Simplified mock data
const MOCK_DATA = {
  user: {
    level: 5,
    streak: 12,
  },
  reviews: {
    available: 25,
  },
  lessons: {
    available: 15,
  },
  levelProgress: {
    current: 67,
    target: 150,
    percentage: 45,
  },
  learningPath: {
    hangul: { learned: 40, total: 40, complete: true },
    grammar: { learned: 12, total: 25, complete: false },
    vocabulary: { learned: 67, total: 150, complete: false },
  },
  srsStages: [
    { name: 'New', count: 45, color: 'bg-pink-400' },
    { name: 'Growing', count: 67, color: 'bg-purple-400' },
    { name: 'Strong', count: 32, color: 'bg-blue-400' },
    { name: 'Expert', count: 14, color: 'bg-amber-400' },
    { name: 'Mastered', count: 89, color: 'bg-forest' },
  ],
  totalWords: 247,
};

function Dashboard() {
  const toNextLevel = MOCK_DATA.levelProgress.target - MOCK_DATA.levelProgress.current;

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      {/* Navigation */}
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
              <span className="text-sm font-bold text-persimmon">{MOCK_DATA.user.streak} day streak</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shadow-soft">
              <span className="font-bold text-forest">L{MOCK_DATA.user.level}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: Hero */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Streak Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-persimmon/10 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Flame className="w-5 h-5 text-persimmon" />
            <span className="font-bold text-persimmon">{MOCK_DATA.user.streak} day streak</span>
          </div>

          {/* Level */}
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-forest mb-4 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
            Level {MOCK_DATA.user.level}
          </h1>

          {/* Progress */}
          <p className="text-xl text-ink/60 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200">
            {MOCK_DATA.levelProgress.current}/{MOCK_DATA.levelProgress.target} vocabulary mastered
          </p>

          <div className="max-w-md mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-300">
            <Progress value={MOCK_DATA.levelProgress.percentage} className="h-3" />
            <p className="text-sm text-ink/40 mt-2">{MOCK_DATA.levelProgress.percentage}% to Level {MOCK_DATA.user.level + 1}</p>
          </div>

          {/* Primary CTA */}
          <div className="animate-in fade-in zoom-in-95 duration-500 delay-400">
            <Button variant="persimmon" size="lg" className="min-w-[220px] text-lg shadow-2xl group">
              Start Reviews ({MOCK_DATA.reviews.available})
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Flowing Connector */}
      <FlowingConnector className="-mt-4 -mb-4" />

      {/* SECTION 2: Learning Path */}
      <section className="bg-sage/30 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest text-center mb-12">
            Your Learning Path
          </h2>

          {/* Path Progress */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 mb-10">
            {Object.entries(MOCK_DATA.learningPath).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center mb-3 shadow-soft ${
                  value.complete ? 'bg-forest text-white' : 'bg-white text-forest'
                }`}>
                  {value.complete ? (
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />
                  ) : (
                    <span className="text-lg md:text-xl font-bold">{Math.round((value.learned / value.total) * 100)}%</span>
                  )}
                </div>
                <p className="font-medium text-ink capitalize">{key}</p>
                <p className="text-sm text-ink/60">{value.learned}/{value.total}</p>
              </div>
            ))}
          </div>

          {/* Encouragement */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-soft mb-8">
            <p className="text-forest">
              Complete <span className="font-bold">{toNextLevel} more vocabulary</span> to reach Level {MOCK_DATA.user.level + 1}!
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <Button variant="default" size="lg" className="min-w-[220px] group">
              <BookOpen className="w-5 h-5" />
              Continue Lessons ({MOCK_DATA.lessons.available})
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Flowing Connector (flipped) */}
      <FlowingConnector flip className="-mt-4 -mb-4" />

      {/* SECTION 3: SRS Snapshot / Memory Bank */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest text-center mb-4">
            Your Memory Bank
          </h2>
          <p className="text-center text-ink/60 mb-12">
            {MOCK_DATA.totalWords} words in your journey
          </p>

          {/* SRS Bar Chart */}
          <div className="flex items-end justify-center gap-4 md:gap-8 h-48 mb-6">
            {MOCK_DATA.srsStages.map((stage) => {
              const maxCount = Math.max(...MOCK_DATA.srsStages.map(s => s.count));
              const height = (stage.count / maxCount) * 100;

              return (
                <div key={stage.name} className="flex flex-col items-center gap-3">
                  <span className="text-lg md:text-xl font-bold text-forest">{stage.count}</span>
                  <div
                    className={`w-12 md:w-16 rounded-t-xl ${stage.color} shadow-soft transition-all duration-700 ease-out`}
                    style={{ height: `${height}%`, minHeight: '24px' }}
                  />
                  <span className="text-xs md:text-sm text-ink/60 whitespace-nowrap">{stage.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Logo showText={false} size="small" />
            <span className="text-sm text-ink/60">Hogam - Learn Korean Vocabulary</span>
          </div>
          <p className="text-sm text-ink/40">Keep learning, keep growing!</p>
        </div>
      </footer>
    </div>
  );
}
