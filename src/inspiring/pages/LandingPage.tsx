import React, { useState } from 'react';
import { Play, BookOpen, Star, RefreshCw, Volume2, Sparkles, ChevronRight, ArrowRight, Check } from 'lucide-react';
import { HanjiBackground } from '../components/HanjiBackground';
import { BookIcon, MountainIcon, PencilIcon, StrawberryIcon, TigerLogo } from '../components/InkIcons';
import { generateSentence } from '../services/geminiService';
import { VocabCard, LoadingState } from '../types';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const SAMPLE_WORDS: VocabCard[] = [
  { id: '1', hangul: '딸기', romanization: 'Ttal-gi', english: 'Strawberry', category: 'Food' },
  { id: '2', hangul: '산', romanization: 'San', english: 'Mountain', category: 'Nature' },
  { id: '3', hangul: '책', romanization: 'Chaek', english: 'Book', category: 'Object' },
];

export const LandingPage: React.FC = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [aiContext, setAiContext] = useState<{ sentence: string, translation: string } | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);

  const activeWord = SAMPLE_WORDS[activeWordIndex];

  const handleNextWord = () => {
    setActiveWordIndex((prev) => (prev + 1) % SAMPLE_WORDS.length);
    setAiContext(null);
    setLoadingState(LoadingState.IDLE);
  };

  const handleGenerateContext = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (loadingState === LoadingState.LOADING) return;
    
    setLoadingState(LoadingState.LOADING);
    try {
      const result = await generateSentence(activeWord.hangul);
      setAiContext(result);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
    }
  };

  const renderIcon = (wordId: string) => {
    switch (wordId) {
      case '1': return <StrawberryIcon className="w-40 h-40 mx-auto text-forest/90" />;
      case '2': return <MountainIcon className="w-40 h-40 mx-auto text-forest/90" />;
      case '3': return <BookIcon className="w-40 h-40 mx-auto text-forest/90" />;
      default: return <BookIcon className="w-40 h-40 mx-auto text-forest/90" />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-ink selection:bg-forest selection:text-white relative overflow-x-hidden pb-20">
      <HanjiBackground />
      
      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/50 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <Star className="w-4 h-4 fill-forest text-forest" />
             <span className="text-sm font-bold text-forest tracking-wide">Voted #1 Language App of 2024</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-[1.1] tracking-tight text-forest animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Don't memorize, <br/>
            <span className="italic text-persimmon">just absorb.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ink/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The vocabulary app that respects your brain. <br className="hidden md:block"/>
            Beautiful visuals, context-first learning, and zero clutter.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
             <Button size="lg" className="min-w-[180px]">Start Learning</Button>
             <Button variant="outline" size="lg" className="min-w-[180px]">Watch Video</Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 max-w-4xl mx-auto relative z-10 animate-in fade-in zoom-in-95 duration-1000 delay-500">
           <div className="absolute -top-12 -left-12 w-24 h-24 bg-sage rounded-full blur-2xl opacity-60"></div>
           <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-persimmon/20 rounded-full blur-2xl opacity-60"></div>
           
           <Card className="relative overflow-hidden bg-white/50 backdrop-blur-sm border-white/40 border-0 p-0">
              <div className="grid md:grid-cols-2 min-h-[500px]">
                 {/* Visual Side */}
                 <div className="bg-paper p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-ink/5 relative overflow-hidden group cursor-pointer" onClick={handleNextWord}>
                    <div className="absolute top-6 left-6 flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    
                    <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
                       {renderIcon(activeWord.id)}
                       <h2 className="text-6xl font-korean font-bold mt-8 text-ink">{activeWord.hangul}</h2>
                       <p className="text-sm font-bold text-ink/40 mt-4 uppercase tracking-[0.2em]">Daily Word</p>
                    </div>

                    <div className="absolute bottom-6 right-6">
                       <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                       </div>
                    </div>
                 </div>

                 {/* Context Side */}
                 <div className="p-12 flex flex-col justify-center bg-white">
                    <div className="mb-auto">
                       <span className="text-xs font-bold text-persimmon uppercase tracking-wider mb-2 block">Definition</span>
                       <h3 className="text-4xl font-serif font-medium text-forest mb-2">{activeWord.english}</h3>
                       <p className="text-lg text-ink/50 italic font-serif">{activeWord.romanization}</p>
                    </div>

                    <div className="space-y-6">
                       <div className="bg-paper rounded-2xl p-6 border border-ink/5">
                          <div className="flex justify-between items-center mb-4">
                             <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-persimmon" />
                                <span className="text-xs font-bold text-ink/60 uppercase">AI Context</span>
                             </div>
                             <button onClick={handleGenerateContext} className="text-xs font-bold text-forest hover:underline">
                                {loadingState === LoadingState.LOADING ? 'Thinking...' : 'Regenerate'}
                             </button>
                          </div>
                          
                          {aiContext ? (
                            <div className="animate-in fade-in">
                               <p className="font-korean text-lg font-medium text-ink mb-2">"{aiContext.sentence}"</p>
                               <p className="text-sm text-ink/50">{aiContext.translation}</p>
                            </div>
                          ) : (
                             <p className="text-sm text-ink/40 italic">Generate a sentence to see this word in action.</p>
                          )}
                       </div>

                       <div className="flex gap-3">
                          <Badge variant="secondary">Noun</Badge>
                          <Badge variant="secondary">Beginner</Badge>
                          <Badge variant="secondary">Nature</Badge>
                       </div>
                    </div>
                 </div>
              </div>
           </Card>
        </div>
        
        {/* Social Proof */}
        <div className="mt-24 text-center">
           <p className="text-sm font-bold text-ink/30 uppercase tracking-widest mb-8">Trusted by polyglots at</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale mix-blend-multiply">
              {['Duolingo', 'Babbel', 'Rosetta', 'Memrise', 'Coursera'].map((brand, i) => (
                <span key={i} className="text-xl font-serif font-bold italic">{brand}</span>
              ))}
           </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-32 bg-forest text-paper relative rounded-t-[3rem] -mt-10 z-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-white">Hogam is made for you</h2>
            </div>
            
            <div className="flex justify-center gap-4 mb-20 flex-wrap">
               {['Visual Learners', 'Busy Professionals', 'K-Pop Fans', 'Travelers'].map((tag, i) => (
                  <Badge key={i} variant="outline" className="px-6 py-2 text-white/80 border-white/20 text-sm font-medium hover:bg-white/10 cursor-default">
                     {tag}
                  </Badge>
               ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { 
                   title: "Personal Dictionary", 
                   desc: "Your words are automatically saved and categorized based on how well you know them.",
                   icon: <BookOpen className="w-8 h-8" />,
                   bg: "bg-[#0A261E]"
                 },
                 { 
                   title: "AI Auto-Context", 
                   desc: "Generates natural sentences instantly. No more robotic textbook examples.",
                   icon: <Sparkles className="w-8 h-8" />,
                   bg: "bg-[#0F392B]"
                 },
                 { 
                   title: "Snippet Library", 
                   desc: "Save phrases from your favorite K-Dramas and learn the vocabulary within them.",
                   icon: <Play className="w-8 h-8" />,
                   bg: "bg-[#0A261E]"
                 }
               ].map((item, i) => (
                  <div key={i} className={`rounded-[2rem] p-10 ${item.bg} border border-white/5 hover:-translate-y-2 transition-transform duration-500`}>
                     <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8 text-persimmon">
                        {item.icon}
                     </div>
                     <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                     <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Comparison Section */}
      <section id="demo" className="py-32 px-6 bg-paper">
         <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
               <div>
                  <div className="mb-4">
                     <Badge variant="secondary" className="px-4 py-1 text-sm">4x Faster</Badge>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-serif text-forest mb-8 leading-tight">
                     Scientific retention. <br/>
                     <span className="text-ink/30">Zero burnout.</span>
                  </h2>
                  <p className="text-xl text-ink/60 mb-10 font-light leading-relaxed">
                     After 150 years of using the same textbook methods, voice and visual memory is finally here. 
                     When you create a connection with an image, you free up mental energy for speaking.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                     {[
                       "Smart Spaced Repetition algorithms",
                       "Native audio pronunciation",
                       "Cultural context notes"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-forest font-medium">
                           <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center">
                              <Check className="w-3 h-3 text-forest" />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>

                  <Button size="lg">Try flow mode</Button>
               </div>

               <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sage to-transparent rounded-[2.5rem] transform rotate-3 scale-95 opacity-50"></div>
                  <Card className="relative bg-white min-h-[500px] flex flex-col items-center justify-center border-none shadow-2xl">
                     <div className="w-20 h-20 rounded-full bg-forest text-white flex items-center justify-center mb-8 animate-bounce">
                        <Volume2 className="w-8 h-8" />
                     </div>
                     <p className="text-sm font-bold text-ink/30 uppercase tracking-widest mb-4">Listening Mode</p>
                     <h3 className="text-4xl font-serif text-forest text-center px-8">
                        "The strawberries on the mountain are sweet."
                     </h3>
                     <div className="mt-8 flex gap-2">
                        <div className="h-12 w-1 bg-persimmon animate-pulse"></div>
                        <div className="h-12 w-1 bg-persimmon animate-pulse delay-75"></div>
                        <div className="h-12 w-1 bg-persimmon animate-pulse delay-150"></div>
                        <div className="h-12 w-1 bg-persimmon animate-pulse delay-100"></div>
                        <div className="h-12 w-1 bg-persimmon animate-pulse delay-300"></div>
                     </div>
                  </Card>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-32 px-6 bg-paper relative">
        <div className="max-w-4xl mx-auto text-center">
           <div className="mb-12 text-center">
               <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-forest">Still not sure?</h2>
           </div>
           <p className="text-xl text-ink/60 mb-12 font-light max-w-2xl mx-auto">
             Try the first 50 words completely free. No credit card required. 
             Just pure visual learning.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" className="px-10">Read Philosophy</Button>
              <Button size="lg" className="px-10">Get Started Free</Button>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-paper pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-4 gap-12 mb-24">
              <div className="col-span-1">
                 <div className="w-12 h-12 mb-6">
                    <TigerLogo />
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed">
                    Hogam turns vocabulary lists into <br/> visual memories.
                 </p>
              </div>
              
              <div>
                 <h4 className="font-bold mb-6 text-white">Product</h4>
                 <ul className="space-y-4 text-sm text-white/60">
                    <li className="hover:text-white cursor-pointer">Download</li>
                    <li className="hover:text-white cursor-pointer">Pricing</li>
                    <li className="hover:text-white cursor-pointer">Methodology</li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-bold mb-6 text-white">Company</h4>
                 <ul className="space-y-4 text-sm text-white/60">
                    <li className="hover:text-white cursor-pointer">About</li>
                    <li className="hover:text-white cursor-pointer">Careers</li>
                    <li className="hover:text-white cursor-pointer">Blog</li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-bold mb-6 text-white">Legal</h4>
                 <ul className="space-y-4 text-sm text-white/60">
                    <li className="hover:text-white cursor-pointer">Privacy</li>
                    <li className="hover:text-white cursor-pointer">Terms</li>
                 </ul>
              </div>
           </div>

           <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/40 text-xs">© 2024 Hogam Inc. Seoul, Korea.</p>
              <div className="flex gap-6">
                 <div className="w-5 h-5 rounded-full bg-white/20"></div>
                 <div className="w-5 h-5 rounded-full bg-white/20"></div>
                 <div className="w-5 h-5 rounded-full bg-white/20"></div>
              </div>
           </div>
           
           <div className="mt-20">
              <h1 className="text-[12vw] leading-none font-serif text-center text-white/10 font-bold tracking-tight select-none pointer-events-none">
                 Hogam
              </h1>
           </div>
        </div>
      </footer>
    </div>
  );
};