import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect, useRef, useMemo } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { HanjiBackground } from '@/components/HanjiBackground';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  StrawberryIcon,
  MountainIcon,
  BookIcon,
  SunIcon,
  MoonIcon,
  WaterIcon,
  FireIcon,
  TreeIcon,
} from '@/components/InkIcons';
import type { StudyItem } from '@/types/vocab';

export const Route = createFileRoute('/learn')({ component: LearnPage });

// Study Session Data
const STUDY_SESSION: StudyItem[] = [
  {
    id: '1',
    hangul: '딸기',
    romanization: 'Ttal-gi',
    english: 'Strawberry',
    category: 'Food',
    context: 'The strawberries on the mountain are sweet.',
    questionType: 'KOREAN_TO_ENGLISH',
  },
  {
    id: '2',
    hangul: '산',
    romanization: 'San',
    english: 'Mountain',
    category: 'Nature',
    context: 'We hiked up the mountain early in the morning.',
    questionType: 'KOREAN_TO_ENGLISH',
  },
  {
    id: '4',
    hangul: '해',
    romanization: 'Hae',
    english: 'Sun',
    category: 'Nature',
    context: 'The sun rises in the east.',
    questionType: 'IMAGE_TO_KOREAN',
  },
  {
    id: '5',
    hangul: '달',
    romanization: 'Dal',
    english: 'Moon',
    category: 'Nature',
    context: 'The full moon is bright tonight.',
    questionType: 'IMAGE_TO_KOREAN',
  },
  {
    id: '6',
    hangul: '물',
    romanization: 'Mul',
    english: 'Water',
    category: 'Nature',
    context: 'Please give me a glass of water.',
    questionType: 'KOREAN_TO_IMAGE',
    distractors: ['7', '8', '3'],
  },
  {
    id: '7',
    hangul: '불',
    romanization: 'Bul',
    english: 'Fire',
    category: 'Element',
    context: 'Be careful with fire.',
    questionType: 'KOREAN_TO_IMAGE',
    distractors: ['6', '5', '4'],
  },
  {
    id: '8',
    hangul: '나무',
    romanization: 'Namu',
    english: 'Tree',
    category: 'Nature',
    context: 'We planted a tree in the garden.',
    questionType: 'KOREAN_TO_IMAGE',
    distractors: ['1', '2', '6'],
  },
  {
    id: '3',
    hangul: '책',
    romanization: 'Chaek',
    english: 'Book',
    category: 'Object',
    context: 'I read a book about Korean history.',
    questionType: 'KOREAN_TO_ENGLISH',
  },
];

// Icon renderer helper
function renderIcon(wordId: string, className = 'w-32 h-32 md:w-40 md:h-40 mx-auto text-forest') {
  const icons: Record<string, React.ReactNode> = {
    '1': <StrawberryIcon className={className} />,
    '2': <MountainIcon className={className} />,
    '3': <BookIcon className={className} />,
    '4': <SunIcon className={className} />,
    '5': <MoonIcon className={className} />,
    '6': <WaterIcon className={className} />,
    '7': <FireIcon className={className} />,
    '8': <TreeIcon className={className} />,
  };
  return icons[wordId] || <BookIcon className={className} />;
}

type AnswerStatus = 'idle' | 'correct' | 'incorrect';

function LearnPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [status, setStatus] = useState<AnswerStatus>('idle');
  const [streak, setStreak] = useState(0);
  const [imageOptions, setImageOptions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentCard = STUDY_SESSION[currentIndex];
  const progress = (currentIndex / STUDY_SESSION.length) * 100;
  const isComplete = currentIndex >= STUDY_SESSION.length;

  // Shuffle image options when card changes (for KOREAN_TO_IMAGE mode)
  useEffect(() => {
    if (currentCard?.questionType === 'KOREAN_TO_IMAGE' && currentCard.distractors) {
      const options = [currentCard.id, ...currentCard.distractors];
      setImageOptions(options.sort(() => Math.random() - 0.5));
    }
  }, [currentIndex, currentCard]);

  // Auto-focus input
  useEffect(() => {
    if (status === 'idle' && currentCard?.questionType !== 'KOREAN_TO_IMAGE') {
      inputRef.current?.focus();
    }
  }, [currentIndex, status, currentCard?.questionType]);

  const handleCorrect = () => {
    setStatus('correct');
    setStreak((s) => s + 1);
    setTimeout(() => handleNext(), 1500);
  };

  const handleIncorrect = () => {
    setStatus('incorrect');
    setStreak(0);
  };

  const handleNext = () => {
    if (currentIndex < STUDY_SESSION.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setStatus('idle');
      setInputVal('');
    } else {
      // Session complete - reset for demo
      setCurrentIndex(0);
      setStatus('idle');
      setInputVal('');
    }
  };

  const handleTextInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;

    const cleanInput = inputVal.trim().toLowerCase();
    let isCorrect = false;

    if (currentCard.questionType === 'KOREAN_TO_ENGLISH') {
      isCorrect = cleanInput === currentCard.english.toLowerCase();
    } else if (currentCard.questionType === 'IMAGE_TO_KOREAN') {
      isCorrect = cleanInput === currentCard.hangul;
    }

    if (isCorrect) {
      handleCorrect();
    } else {
      handleIncorrect();
    }
  };

  const handleImageSelection = (selectedId: string) => {
    if (status !== 'idle') return;

    if (selectedId === currentCard.id) {
      handleCorrect();
    } else {
      handleIncorrect();
    }
  };

  const handleExit = () => {
    navigate({ to: '/dashboard' });
  };

  return (
    <div className="min-h-screen font-sans text-ink relative flex flex-col overflow-hidden bg-paper">
      <HanjiBackground />

      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-5xl mx-auto w-full z-10">
        <Button variant="ghost" size="icon" onClick={handleExit} className="hover:bg-ink/5">
          <X className="w-6 h-6 text-ink/60" />
        </Button>

        <div className="flex-1 max-w-xs mx-4">
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-persimmon uppercase tracking-wider">Streak</span>
          <Badge variant="outline" className="text-lg font-serif border-persimmon text-persimmon px-3">
            {streak}
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto z-10">
        <div className="w-full">
          {/* Incorrect State - Reveal Card */}
          {status === 'incorrect' ? (
            <Card className="animate-pop bg-white border-0 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 min-h-[450px]">
                {/* Visual Side */}
                <div className="bg-sage/20 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-ink/5">
                  <div className="mb-6">{renderIcon(currentCard.id)}</div>
                  <h2 className="text-5xl font-korean font-bold text-ink mb-2">{currentCard.hangul}</h2>
                  <p className="text-xl font-serif text-ink/40">{currentCard.romanization}</p>
                </div>

                {/* Context Side */}
                <div className="p-8 flex flex-col justify-center bg-white">
                  <div className="mb-8">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">
                      Correct Answer
                    </span>
                    <h3 className="text-4xl font-serif font-medium text-forest mb-4">{currentCard.english}</h3>
                    <Badge variant="secondary">{currentCard.category}</Badge>
                  </div>

                  <div className="bg-sage/20 rounded-2xl p-6 border border-ink/5 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-persimmon" />
                      <span className="text-xs font-bold text-ink/60 uppercase">Context</span>
                    </div>
                    <p className="text-lg text-ink/80 font-medium leading-relaxed">"{currentCard.context}"</p>
                  </div>

                  <Button onClick={handleNext} className="w-full h-12 text-lg group">
                    Continue <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            /* Active Card - Question State */
            <div className={`transition-all duration-500 transform ${status === 'correct' ? 'scale-105' : 'scale-100'}`}>
              <Card
                className={`
                  bg-white border-0 shadow-xl min-h-[450px] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden
                  ${status === 'correct' ? 'ring-4 ring-forest ring-offset-4 ring-offset-paper' : ''}
                `}
              >
                {/* Success Overlay */}
                {status === 'correct' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-30">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-forest/30">
                        <Check className="w-10 h-10 text-white" strokeWidth={4} />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-forest">Correct!</h3>
                      <div className="mt-4 flex flex-col items-center gap-2">
                        <p className="font-korean text-2xl text-ink">{currentCard.hangul}</p>
                        <p className="text-ink/50">{currentCard.english}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-full max-w-2xl text-center space-y-8">
                  {/* Korean -> English or Korean -> Image: Show Hangul */}
                  {(currentCard.questionType === 'KOREAN_TO_ENGLISH' ||
                    currentCard.questionType === 'KOREAN_TO_IMAGE') && (
                    <>
                      <span className="inline-block px-3 py-1 rounded-full bg-sage/30 border border-ink/5 text-xs font-bold text-ink/40 uppercase tracking-widest">
                        {currentCard.questionType === 'KOREAN_TO_ENGLISH' ? 'Translate to English' : 'Select the Image'}
                      </span>
                      <h2 className="text-7xl md:text-8xl font-korean font-bold text-ink">{currentCard.hangul}</h2>
                    </>
                  )}

                  {/* Image -> Korean: Show Image */}
                  {currentCard.questionType === 'IMAGE_TO_KOREAN' && (
                    <>
                      <span className="inline-block px-3 py-1 rounded-full bg-sage/30 border border-ink/5 text-xs font-bold text-ink/40 uppercase tracking-widest">
                        Type in Korean
                      </span>
                      <div className="my-8">
                        {renderIcon(currentCard.id, 'w-40 h-40 md:w-56 md:h-56 mx-auto text-forest drop-shadow-lg')}
                      </div>
                    </>
                  )}

                  {/* Text Input for Korean->English and Image->Korean */}
                  {(currentCard.questionType === 'KOREAN_TO_ENGLISH' ||
                    currentCard.questionType === 'IMAGE_TO_KOREAN') && (
                    <div className="mt-8 max-w-md mx-auto relative group">
                      <form onSubmit={handleTextInputSubmit}>
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputVal}
                          onChange={(e) => setInputVal(e.target.value)}
                          placeholder={
                            currentCard.questionType === 'KOREAN_TO_ENGLISH' ? 'Meaning in English...' : '한국어...'
                          }
                          disabled={status === 'correct'}
                          className={`
                            w-full bg-transparent text-center text-3xl placeholder:text-ink/20 text-ink
                            border-b-4 border-ink/10 focus:border-forest focus:outline-none py-4 transition-all
                            ${currentCard.questionType === 'IMAGE_TO_KOREAN' ? 'font-korean' : 'font-serif'}
                            ${status === 'incorrect' ? 'border-red-500 text-red-500 animate-shake' : ''}
                            ${status === 'correct' ? 'border-forest text-forest' : ''}
                          `}
                          autoComplete="off"
                          lang={currentCard.questionType === 'IMAGE_TO_KOREAN' ? 'ko' : 'en'}
                        />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button type="submit" size="icon" variant="ghost" disabled={!inputVal}>
                            <ArrowRight className="w-6 h-6 text-ink/40" />
                          </Button>
                        </div>
                      </form>
                      <p className="text-center mt-4 text-sm text-ink/30 font-medium">
                        Press <span className="font-bold border border-ink/20 rounded px-1">Enter</span> to check
                      </p>
                    </div>
                  )}

                  {/* Image Grid for Korean->Image */}
                  {currentCard.questionType === 'KOREAN_TO_IMAGE' && (
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {imageOptions.map((optId) => (
                        <button
                          key={optId}
                          onClick={() => handleImageSelection(optId)}
                          className="bg-sage/20 hover:bg-forest/5 border-2 border-transparent hover:border-forest/20 rounded-2xl p-6 transition-all active:scale-95 flex items-center justify-center group"
                        >
                          <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {renderIcon(optId, 'w-20 h-20 text-ink/80 group-hover:text-forest')}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-ink/20 text-sm z-10">
        <p>Hogam Visual Learning System</p>
      </footer>
    </div>
  );
}
