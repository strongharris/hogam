import { createFileRoute } from '@tanstack/react-router';
import {
  BookOpen,
  Flame,
  Clock,
  Trophy,
  Zap,
  Target,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Brain,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Star,
  Calendar,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Logo } from '@/components/Logo';
import { BookIcon } from '@/components/InkIcons';

export const Route = createFileRoute('/dashboard')({ component: Dashboard });

// Mock data for demonstration
const MOCK_DATA = {
  user: {
    name: 'Student',
    level: 5,
    streak: 12,
    totalWords: 247,
    masteredWords: 89,
  },
  lessons: {
    available: 15,
    completed: true,
  },
  reviews: {
    available: 25,
    nextReview: '2 hours',
  },
  srsStages: [
    { name: 'Apprentice', count: 45, color: 'bg-pink-400', description: 'Just learning' },
    { name: 'Guru', count: 67, color: 'bg-purple-400', description: 'Getting familiar' },
    { name: 'Master', count: 32, color: 'bg-blue-400', description: 'Well known' },
    { name: 'Enlightened', count: 14, color: 'bg-amber-400', description: 'Almost there' },
    { name: 'Burned', count: 89, color: 'bg-forest', description: 'Mastered forever' },
  ],
  levelProgress: {
    hangul: { learned: 40, total: 40 },
    grammar: { learned: 12, total: 25 },
    vocabulary: { learned: 67, total: 150 },
  },
  recentMistakes: [
    { hangul: '감사합니다', english: 'Thank you', romanization: 'Gamsahamnida' },
    { hangul: '미안해요', english: 'Sorry', romanization: 'Mianhaeyo' },
    { hangul: '괜찮아요', english: "It's okay", romanization: 'Gwaenchanhayo' },
  ],
  criticalItems: [
    { hangul: '어렵다', english: 'Difficult', accuracy: 45 },
    { hangul: '비슷하다', english: 'Similar', accuracy: 52 },
  ],
  recentlyLearned: [
    { hangul: '사랑', english: 'Love' },
    { hangul: '행복', english: 'Happiness' },
    { hangul: '친구', english: 'Friend' },
  ],
};

function Dashboard() {
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
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
              <span className="font-bold text-forest">L{MOCK_DATA.user.level}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-serif font-medium text-forest mb-2">
            Welcome back, {MOCK_DATA.user.name}!
          </h1>
          <p className="text-ink/60">Ready to continue your Korean journey? You're doing great!</p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Lessons Card */}
          <Card className="p-0 overflow-hidden border-0 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
            <div className="p-8 bg-gradient-to-br from-sage/50 to-sage/20">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-forest" />
                    <span className="text-sm font-bold text-forest/70 uppercase tracking-wider">Today's Lessons</span>
                  </div>
                  <h2 className="text-5xl font-serif font-bold text-forest">
                    {MOCK_DATA.lessons.available}
                  </h2>
                  <p className="text-forest/60 mt-1">new words available</p>
                </div>
                <div className="w-24 h-24 opacity-20">
                  <BookIcon className="w-full h-full text-forest" />
                </div>
              </div>
              <Button size="lg" className="w-full group">
                Start Lessons
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Reviews Card */}
          <Card className="p-0 overflow-hidden border-0 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
            <div className="p-8 bg-gradient-to-br from-persimmon/20 to-persimmon/5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="w-5 h-5 text-persimmon" />
                    <span className="text-sm font-bold text-persimmon/70 uppercase tracking-wider">Reviews Due</span>
                  </div>
                  <h2 className="text-5xl font-serif font-bold text-persimmon">
                    {MOCK_DATA.reviews.available}
                  </h2>
                  <p className="text-ink/60 mt-1">reviews waiting for you</p>
                </div>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-persimmon/20 flex items-center justify-center animate-pulse">
                    <Zap className="w-10 h-10 text-persimmon" />
                  </div>
                </div>
              </div>
              <Button size="lg" variant="ink" className="w-full group">
                Start Reviews
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Words', value: MOCK_DATA.user.totalWords, icon: BookOpen, color: 'text-forest' },
            { label: 'Mastered', value: MOCK_DATA.user.masteredWords, icon: Trophy, color: 'text-amber-500' },
            { label: 'Current Level', value: MOCK_DATA.user.level, icon: TrendingUp, color: 'text-purple-500' },
            { label: 'Day Streak', value: MOCK_DATA.user.streak, icon: Flame, color: 'text-persimmon' },
          ].map((stat, i) => (
            <Card key={i} className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${300 + i * 50}ms` }}>
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-sm text-ink/60">{stat.label}</span>
              </div>
              <p className="text-3xl font-serif font-bold text-forest">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* SRS Progress */}
          <Card className="lg:col-span-2 p-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-forest">SRS Progress</h3>
                <p className="text-sm text-ink/60">Your spaced repetition journey</p>
              </div>
              <Badge variant="secondary">
                <Brain className="w-3 h-3 mr-1" />
                {MOCK_DATA.srsStages.reduce((acc, s) => acc + s.count, 0)} items
              </Badge>
            </div>

            <div className="space-y-4">
              {MOCK_DATA.srsStages.map((stage, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                      <span className="font-medium text-ink">{stage.name}</span>
                      <span className="text-xs text-ink/40">{stage.description}</span>
                    </div>
                    <span className="font-bold text-forest">{stage.count}</span>
                  </div>
                  <div className="h-2 bg-ink/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${stage.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: `${(stage.count / Math.max(...MOCK_DATA.srsStages.map(s => s.count))) * 100}%`,
                        animationDelay: `${i * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Level Progress */}
          <Card className="p-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-400">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif font-bold text-forest">Level {MOCK_DATA.user.level}</h3>
              <Button variant="ghost" size="sm">
                See All
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {Object.entries(MOCK_DATA.levelProgress).map(([key, value], i) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium capitalize text-ink">{key}</span>
                    <span className="text-sm text-ink/60">{value.learned}/{value.total}</span>
                  </div>
                  <Progress value={(value.learned / value.total) * 100} />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-sage/30 rounded-2xl">
              <p className="text-sm text-forest">
                <Star className="w-4 h-4 inline mr-1 text-amber-500" />
                Complete <span className="font-bold">13 more vocabulary</span> to reach Level 6!
              </p>
            </div>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Recent Mistakes */}
          <Card className="p-6 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-500">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-persimmon" />
              <h3 className="font-serif font-bold text-forest">Recent Mistakes</h3>
            </div>

            {MOCK_DATA.recentMistakes.length > 0 ? (
              <div className="space-y-3">
                {MOCK_DATA.recentMistakes.map((item, i) => (
                  <div key={i} className="p-3 bg-paper rounded-xl border border-ink/5 hover:border-persimmon/30 transition-colors cursor-pointer group">
                    <p className="font-korean text-lg font-bold text-ink group-hover:text-persimmon transition-colors">{item.hangul}</p>
                    <p className="text-sm text-ink/60">{item.english}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-2" />
                <p className="text-ink/60 text-sm">No recent mistakes! Keep it up!</p>
              </div>
            )}

            <Button variant="ghost" className="w-full mt-4">
              Practice Mistakes
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Card>

          {/* Critical Items */}
          <Card className="p-6 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-600">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-amber-500" />
              <h3 className="font-serif font-bold text-forest">Critical Items</h3>
            </div>

            {MOCK_DATA.criticalItems.length > 0 ? (
              <div className="space-y-3">
                {MOCK_DATA.criticalItems.map((item, i) => (
                  <div key={i} className="p-3 bg-paper rounded-xl border border-ink/5">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-korean text-lg font-bold text-ink">{item.hangul}</p>
                      <Badge variant="outline" className="text-amber-600 border-amber-300">
                        {item.accuracy}%
                      </Badge>
                    </div>
                    <p className="text-sm text-ink/60">{item.english}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-2" />
                <p className="text-ink/60 text-sm">All items in good shape!</p>
              </div>
            )}

            <Button variant="ghost" className="w-full mt-4">
              Extra Study
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Card>

          {/* Recently Learned */}
          <Card className="p-6 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-700">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h3 className="font-serif font-bold text-forest">Recently Learned</h3>
            </div>

            <div className="space-y-3">
              {MOCK_DATA.recentlyLearned.map((item, i) => (
                <div key={i} className="p-3 bg-paper rounded-xl border border-ink/5 hover:border-purple-300 transition-colors cursor-pointer group">
                  <p className="font-korean text-lg font-bold text-ink group-hover:text-purple-600 transition-colors">{item.hangul}</p>
                  <p className="text-sm text-ink/60">{item.english}</p>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-4">
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>

        {/* Extra Study Section */}
        <Card className="p-8 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-800">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-persimmon" />
            <h3 className="text-xl font-serif font-bold text-forest">Extra Study</h3>
            <span className="text-sm text-ink/60 ml-2">Additional practice outside your regular reviews</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Recent Lessons', count: 25, icon: BookOpen, color: 'from-sage/50 to-sage/20' },
              { name: 'Recent Mistakes', count: 3, icon: AlertCircle, color: 'from-persimmon/20 to-persimmon/5' },
              { name: 'Burned Items', count: 89, icon: Flame, color: 'from-amber-100 to-amber-50' },
              { name: 'All Vocabulary', count: 247, icon: BarChart3, color: 'from-purple-100 to-purple-50' },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-ink/5 hover:scale-[1.02] transition-transform cursor-pointer group`}
              >
                <item.icon className="w-8 h-8 text-forest/60 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-medium text-ink mb-1">{item.name}</h4>
                <p className="text-2xl font-serif font-bold text-forest">{item.count}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Reviews */}
        <Card className="p-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-900">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-forest" />
              <h3 className="text-xl font-serif font-bold text-forest">Review Forecast</h3>
            </div>
            <Badge variant="secondary">Next 24 hours</Badge>
          </div>

          <div className="flex items-end gap-2 h-32">
            {[25, 12, 8, 15, 22, 18, 10, 5, 3, 8, 12, 20].map((count, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-forest to-forest/60 rounded-t-lg transition-all duration-500 hover:from-persimmon hover:to-persimmon/60"
                  style={{ height: `${(count / 25) * 100}%` }}
                ></div>
                <span className="text-xs text-ink/40">{i * 2}h</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-sage/20 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-forest" />
              <div>
                <p className="font-medium text-forest">Next review session</p>
                <p className="text-sm text-ink/60">in {MOCK_DATA.reviews.nextReview}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Set Reminder
            </Button>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-ink/5">
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
