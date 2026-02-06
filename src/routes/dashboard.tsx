import { createFileRoute } from '@tanstack/react-router';
import { Flame, ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Logo } from '@/components/Logo';
import { FlowingConnector } from '@/components/FlowingConnector';
import { DashboardNav } from '@/components/layout/DashboardNav';
import { DASHBOARD_DATA } from '@/data/mock';

export const Route = createFileRoute('/dashboard')({ component: Dashboard });

function Dashboard() {
  const toNextLevel = DASHBOARD_DATA.levelProgress.target - DASHBOARD_DATA.levelProgress.current;

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <DashboardNav streak={DASHBOARD_DATA.user.streak} level={DASHBOARD_DATA.user.level} />

      {/* SECTION 1: Hero */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Streak Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-persimmon/10 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Flame className="w-5 h-5 text-persimmon" />
            <span className="font-bold text-persimmon">{DASHBOARD_DATA.user.streak} day streak</span>
          </div>

          {/* Level */}
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-forest mb-4 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
            Level {DASHBOARD_DATA.user.level}
          </h1>

          {/* Progress */}
          <p className="text-xl text-ink/60 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200">
            {DASHBOARD_DATA.levelProgress.current}/{DASHBOARD_DATA.levelProgress.target} vocabulary mastered
          </p>

          <div className="max-w-md mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-300">
            <Progress value={DASHBOARD_DATA.levelProgress.percentage} className="h-3" />
            <p className="text-sm text-ink/40 mt-2">{DASHBOARD_DATA.levelProgress.percentage}% to Level {DASHBOARD_DATA.user.level + 1}</p>
          </div>

          {/* Primary CTA */}
          <div className="animate-in fade-in zoom-in-95 duration-500 delay-400">
            <Button variant="persimmon" size="lg" className="min-w-[220px] text-lg shadow-2xl group">
              Start Reviews ({DASHBOARD_DATA.reviews.available})
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
            {Object.entries(DASHBOARD_DATA.learningPath).map(([key, value]) => (
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
              Complete <span className="font-bold">{toNextLevel} more vocabulary</span> to reach Level {DASHBOARD_DATA.user.level + 1}!
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <Button variant="default" size="lg" className="min-w-[220px] group">
              <BookOpen className="w-5 h-5" />
              Continue Lessons ({DASHBOARD_DATA.lessons.available})
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
            {DASHBOARD_DATA.totalWords} words in your journey
          </p>

          {/* SRS Bar Chart */}
          <div className="flex items-end justify-center gap-4 md:gap-8 h-48 mb-6">
            {DASHBOARD_DATA.srsStages.map((stage) => {
              const maxCount = Math.max(...DASHBOARD_DATA.srsStages.map(s => s.count));
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
