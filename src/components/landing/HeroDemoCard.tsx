/**
 * Interactive demo card for the landing page hero section.
 * Cycles through 3 vocabulary words with prominent ink-wash illustrations,
 * then shows a mini dashboard. Auto-advances or click to navigate.
 */
import { useState, useEffect, useCallback } from 'react';
import { Volume2, ChevronRight, ArrowRight } from 'lucide-react';
import { DEMO_WORDS, type DemoWord } from '@/data/mock';
import { ICON_REGISTRY } from '@/components/icons';
import { cn } from '@/lib/utils';

type DemoState = 'word-0' | 'word-1' | 'word-2' | 'dashboard';

const STATE_ORDER: DemoState[] = ['word-0', 'word-1', 'word-2', 'dashboard'];

/** Per-word accent color for visual variety across the 3 demo cards. */
const WORD_ACCENTS = [
  { bg: 'bg-[#F36A2D]/8', label: 'text-[#F36A2D]' },
  { bg: 'bg-[#3B82F6]/8', label: 'text-[#3B82F6]' },
  { bg: 'bg-[#D7964F]/10', label: 'text-[#D7964F]' },
];

interface WordCardProps {
  word: DemoWord;
  wordIndex: number;
  onNext: () => void;
}

function WordCard({ word, wordIndex, onNext }: WordCardProps) {
  const IconComponent = ICON_REGISTRY[word.id];
  const accent = WORD_ACCENTS[wordIndex];

  return (
    <div
      className="h-full flex flex-col cursor-pointer group select-none"
      onClick={onNext}
    >
      {/* ── Illustration Hero ── */}
      <div className={cn(
        'relative flex-1 min-h-[280px] pt-10 flex items-center justify-center overflow-hidden',
        accent.bg,
      )}>
        {/* Organic background shapes */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#E3EAD3]/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F36A2D]/8 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-3xl" />

        {/* The ink-wash illustration — hero size */}
        {IconComponent && (
          <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-105">
            <IconComponent className="w-36 h-36 sm:w-44 sm:h-44 text-[#0D3328] drop-shadow-sm" />
          </div>
        )}

        {/* Floating Hangul behind the icon */}
        <span
          className="absolute top-10 right-6 text-6xl font-bold text-[#0D3328]/[0.06] select-none pointer-events-none"
          style={{ fontFamily: "'Gowun Dodum', sans-serif" }}
        >
          {word.hangul}
        </span>

        {/* Audio button */}
        <button
          className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft hover:scale-110 active:scale-95 transition-transform border border-white/60"
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Play audio
          }}
        >
          <Volume2 className="w-4 h-4 text-[#0D3328]" />
        </button>

        {/* Category pill */}
        <span className={cn(
          'absolute top-10 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm',
          accent.label,
        )}>
          {word.category}
        </span>
      </div>

      {/* ── Info Section ── */}
      <div className="p-6 sm:p-7 bg-white">
        {/* Korean word + romanization */}
        <div className="flex items-baseline gap-3 mb-1">
          <h2
            className="text-4xl sm:text-[2.75rem] font-bold text-[#1a1a1a] leading-none"
            style={{ fontFamily: "'Gowun Dodum', sans-serif" }}
          >
            {word.hangul}
          </h2>
          <span className="text-sm text-[#1a1a1a]/35 font-medium">{word.romanization}</span>
        </div>

        {/* English definition */}
        <h3 className="text-xl sm:text-2xl font-serif text-[#0D3328] mb-5">
          {word.english}
        </h3>

        {/* Hanja breakdown — Korean characters + meanings only, no Chinese characters */}
        <div className="flex gap-2 mb-5">
          {word.hanja.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#FAF9F6] border border-[#1a1a1a]/5 rounded-xl px-3.5 py-2.5"
            >
              <span
                className="text-lg font-bold text-[#0D3328]"
                style={{ fontFamily: "'Gowun Dodum', sans-serif" }}
              >
                {h.character}
              </span>
              <span className="text-xs text-[#1a1a1a]/60">{h.meaning}</span>
            </div>
          ))}
        </div>

        {/* Bottom row: tags + next */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-[#E3EAD3]/60 text-[#0D3328] text-[10px] font-semibold">
              {word.partOfSpeech}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#E3EAD3]/40 text-[#0D3328]/60 text-[10px] font-medium">
              {word.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#1a1a1a]/30 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface MiniDashboardProps {
  onReset: () => void;
}

function MiniDashboard({ onReset }: MiniDashboardProps) {
  return (
    <div
      className="h-full flex flex-col cursor-pointer group bg-white select-none"
      onClick={onReset}
    >
      {/* Header */}
      <div className="p-7 pb-5 border-b border-[#1a1a1a]/5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[#F36A2D] text-[10px] font-bold uppercase tracking-wider">Session Complete</span>
            <h3 className="text-3xl font-serif text-[#0D3328] mt-1">Level 1</h3>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#E3EAD3]/40 flex items-center justify-center">
            <span className="text-2xl">🐯</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex-1 p-7 pt-5">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#1a1a1a]/5">
            <span className="text-[#1a1a1a]/40 text-[10px] font-bold uppercase tracking-wider block mb-1.5">
              Words
            </span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-3xl font-serif text-[#0D3328]">3</span>
              <span className="text-[#1a1a1a]/30 text-sm">/3</span>
            </div>
          </div>
          <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#1a1a1a]/5">
            <span className="text-[#1a1a1a]/40 text-[10px] font-bold uppercase tracking-wider block mb-1.5">
              Accuracy
            </span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-3xl font-serif text-[#F36A2D]">100</span>
              <span className="text-[#F36A2D]/60 text-sm">%</span>
            </div>
          </div>
        </div>

        {/* Word list with mini icons */}
        <div className="space-y-2">
          {DEMO_WORDS.map((word, i) => {
            const IconComp = ICON_REGISTRY[word.id];
            return (
              <div key={i} className="flex items-center gap-3 bg-[#FAF9F6] border border-[#1a1a1a]/5 rounded-xl px-3.5 py-2.5">
                {IconComp && (
                  <div className="w-7 h-7 flex-shrink-0 text-[#0D3328]/60">
                    <IconComp className="w-full h-full" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="font-korean text-sm text-[#1a1a1a]">{word.hangul}</span>
                  <span className="text-[#1a1a1a]/40 text-xs ml-2">{word.english}</span>
                </div>
                <span className="text-[9px] font-medium text-[#0D3328] bg-[#E3EAD3]/50 px-2 py-0.5 rounded-full whitespace-nowrap">
                  Apprentice {i + 1}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-[#1a1a1a]/25 text-[10px] text-center mt-5">
          Next review in <span className="text-[#1a1a1a]/50 font-medium">4 hours</span>
        </p>
      </div>

      {/* Footer */}
      <div className="p-5 pt-0 flex items-center justify-center gap-1.5 text-[#1a1a1a]/30 text-xs">
        <span className="group-hover:text-[#1a1a1a]/50 transition-colors">Try again</span>
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
}

export function HeroDemoCard() {
  const [state, setState] = useState<DemoState>('word-0');
  const [isAnimating, setIsAnimating] = useState(false);

  const currentIndex = STATE_ORDER.indexOf(state);
  const isDashboard = state === 'dashboard';

  const goToNext = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % STATE_ORDER.length;

    setTimeout(() => {
      setState(STATE_ORDER[nextIndex]);
      setIsAnimating(false);
    }, 150);
  }, [currentIndex, isAnimating]);

  const resetToStart = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setState('word-0');
      setIsAnimating(false);
    }, 150);
  }, [isAnimating]);

  // Auto-advance (words only)
  useEffect(() => {
    if (isDashboard) return;

    const timer = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [state, isDashboard, goToNext]);

  const wordIndex = state.startsWith('word-') ? parseInt(state.split('-')[1]) : -1;
  const currentWord = wordIndex >= 0 ? DEMO_WORDS[wordIndex] : null;

  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#E3EAD3]/50 via-[#F36A2D]/10 to-[#E3EAD3]/40 rounded-[3rem] blur-3xl opacity-70 pointer-events-none" />

      {/* Card */}
      <div
        className={cn(
          'relative bg-white rounded-[2rem] shadow-[0_25px_80px_-20px_rgba(13,51,40,0.18)] overflow-hidden transition-all duration-200',
          isAnimating && 'scale-[0.97] opacity-70'
        )}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-5 pt-3">
          {STATE_ORDER.map((s, i) => (
            <div
              key={s}
              className={cn(
                'h-[3px] rounded-full flex-1 transition-all duration-500',
                i === currentIndex
                  ? 'bg-[#0D3328]'
                  : i < currentIndex
                    ? 'bg-[#0D3328]/30'
                    : 'bg-[#1a1a1a]/8'
              )}
            />
          ))}
        </div>

        {/* Content */}
        {currentWord ? (
          <WordCard word={currentWord} wordIndex={wordIndex} onNext={goToNext} />
        ) : (
          <MiniDashboard onReset={resetToStart} />
        )}
      </div>
    </div>
  );
}
