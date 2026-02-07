/**
 * Landing Page - Main Version
 *
 * Refined editorial design with consistent typography,
 * proper visual hierarchy, and smooth flow between sections.
 */
import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Layers, Brain, Trophy, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { cn } from '@/lib/utils';
import { HeroDemoCard } from '@/components/landing/HeroDemoCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export const Route = createFileRoute('/')({ component: LandingPage });

const FEATURES = [
  { id: 'srs', label: 'Spaced Repetition', icon: <Brain className="w-4 h-4" /> },
  { id: 'hanja', label: 'Hanja Roots', icon: <Layers className="w-4 h-4" /> },
  { id: 'levels', label: 'Level System', icon: <Trophy className="w-4 h-4" /> },
];

const FEATURE_CONTENT = {
  srs: {
    title: 'Your brain learns best with perfect timing.',
    description: 'Words move through 10 stages from Learning to Burned. Each stage increases the interval between reviews. Science-backed spacing means you review right before you forget.',
    visual: (
      <div className="flex items-center gap-2">
        {['4h', '8h', '1d', '2d', '1w', '2w', '1m', '4m'].map((time, i) => (
          <div
            key={i}
            className={cn(
              'rounded-lg flex items-center justify-center text-xs font-bold transition-all',
              i < 3 ? 'w-10 h-10 bg-[#F36A2D] text-white' : 'w-8 h-8 bg-[#1a1a1a]/5 text-[#1a1a1a]/30'
            )}
          >
            {time}
          </div>
        ))}
      </div>
    ),
  },
  hanja: {
    title: 'One root unlocks dozens of words.',
    description: 'Korean vocabulary is built on Chinese characters (Hanja). Learn the building blocks and suddenly patterns emerge everywhere. 學 (학/hak) means "learning" — it appears in 학교, 학생, 과학, and hundreds more.',
    visual: (
      <div className="space-y-3">
        {[
          { word: '학교', meaning: 'School', breakdown: '學 + 校' },
          { word: '학생', meaning: 'Student', breakdown: '學 + 生' },
          { word: '과학', meaning: 'Science', breakdown: '科 + 學' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between bg-white/60 rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-[#0D3328]" style={{ fontFamily: "'Gowun Dodum', sans-serif" }}>{item.word}</span>
              <span className="text-sm text-[#1a1a1a]/50">{item.meaning}</span>
            </div>
            <span className="text-xs text-[#1a1a1a]/30 font-mono">{item.breakdown}</span>
          </div>
        ))}
      </div>
    ),
  },
  levels: {
    title: 'Master before moving on.',
    description: 'No overwhelm. Each level introduces new vocabulary only when you\'ve proven mastery of the previous. Your tiger grows as you progress, keeping you motivated.',
    visual: (
      <div className="flex items-end justify-center gap-4">
        {[1, 2, 3, 4, 5].map((level) => (
          <div key={level} className="text-center">
            <div
              className={cn(
                'rounded-xl flex items-center justify-center mb-2 transition-all',
                level <= 2 ? 'bg-[#0D3328] text-white' : 'bg-[#1a1a1a]/5 text-[#1a1a1a]/20'
              )}
              style={{ width: 40 + level * 8, height: 40 + level * 8 }}
            >
              {level <= 2 ? <Check className="w-5 h-5" /> : level}
            </div>
            <span className="text-[10px] text-[#1a1a1a]/40 font-medium">Lv {level}</span>
          </div>
        ))}
      </div>
    ),
  },
};

function LandingPage() {
  const [activeFeature, setActiveFeature] = useState<'srs' | 'hanja' | 'levels'>('srs');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-animate', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Scroll-triggered sections
      gsap.utils.toArray('.section-animate, .scroll-reveal').forEach((el: any) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      // Rolling persimmon along the curved divider — auto-playing infinite loop
      const persimmon = document.getElementById('rolling-persimmon');
      const divider = document.getElementById('curve-divider');
      const curveSvg = document.getElementById('curve-svg') as unknown as SVGSVGElement;
      const curvePath = document.getElementById('curve-border') as unknown as SVGPathElement;
      if (persimmon && divider && curveSvg && curvePath) {
        const svgRect = curveSvg.getBoundingClientRect();
        const dividerRect = divider.getBoundingClientRect();
        const w = divider.offsetWidth;
        const persimmonSize = 52;

        // Read the actual rendered curve by sampling the SVG path element.
        // The path includes the fill lines (L1440,0 L0,0 Z) so only the
        // first segment (the visible curve) is useful — roughly the first
        // ~75% of total length.
        const totalLen = curvePath.getTotalLength();
        // The curve portion ends where the path returns to (1440,0).
        // Find that by sampling until x wraps back. In viewBox coords the
        // curve runs from (0,0) to (1440,0), so we need the length up to
        // the point where viewBox x = 1440.
        let curveLen = totalLen;
        for (let l = 0; l <= totalLen; l += 1) {
          const pt = curvePath.getPointAtLength(l);
          if (pt.x >= 1439 && pt.y <= 1) {
            curveLen = l;
            break;
          }
        }

        // Sample points along just the curve portion and map to screen coords.
        // Add a downward nudge so the persimmon sits right on the visible border.
        const yNudge = persimmonSize * 0.95;
        const steps = 60;
        const points: { x: number; y: number }[] = [];

        // Add an off-screen entry point to the left
        points.push({ x: -persimmonSize, y: yNudge });

        for (let i = 0; i <= steps; i++) {
          const len = (i / steps) * curveLen;
          const svgPt = curvePath.getPointAtLength(len);
          // Map SVG viewBox coords to screen coords relative to divider
          const screenX = (svgPt.x / 1440) * svgRect.width + (svgRect.left - dividerRect.left);
          const screenY = (svgPt.y / 100) * svgRect.height + (svgRect.top - dividerRect.top) + yNudge;
          points.push({ x: screenX, y: screenY });
        }

        // Add an off-screen exit point to the right
        points.push({ x: w + persimmonSize, y: yNudge });

        // Calculate arc length for rotation that matches actual distance
        let arcLength = 0;
        for (let i = 1; i < points.length; i++) {
          const dx = points[i].x - points[i - 1].x;
          const dy = points[i].y - points[i - 1].y;
          arcLength += Math.sqrt(dx * dx + dy * dy);
        }
        const circumference = Math.PI * persimmonSize;
        const totalRotation = (arcLength / circumference) * 360;

        // Position persimmon so its bottom edge sits on the curve
        gsap.set(persimmon, { xPercent: -50, yPercent: -100 });

        gsap.to(persimmon, {
          motionPath: {
            path: points,
            type: 'thru',
            curviness: 1.2,
          },
          rotation: totalRotation,
          duration: 12,
          ease: 'sine.inOut',
          repeat: -1,
          repeatDelay: 1.5,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const feature = FEATURE_CONTENT[activeFeature];

  return (
    <div className="min-h-screen bg-[#FFFBF7] text-[#1a1a1a] antialiased overflow-x-hidden">
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF7]/80 backdrop-blur-xl border-b border-[#1a1a1a]/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/hogam-logo.png"
              alt="Hogam"
              className="w-20 h-20 object-contain animate-[wiggle_1.5s_ease-in-out_infinite]"
              style={{ transformOrigin: 'center bottom' }}
            />
            <span className="text-xl font-semibold text-[#0D3328] leading-none">Hogam</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm text-[#1a1a1a]/60 hover:text-[#0D3328] transition-colors">How it works</a>
            <a href="#companion" className="text-sm text-[#1a1a1a]/60 hover:text-[#0D3328] transition-colors">Your Tiger</a>
            <a href="#start" className="text-sm text-[#1a1a1a]/60 hover:text-[#0D3328] transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm text-[#1a1a1a]/60 hover:text-[#0D3328] transition-colors hidden sm:block">Log in</a>
            <a href="/dashboard" className="bg-[#F36A2D] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#F36A2D]/90 transition-colors">
              Try Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-28 px-6 relative">
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#E8D5E8]/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E3EAD3]/40 rounded-full blur-3xl -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="hero-animate text-[2.75rem] sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-[#0D3328] mb-6">
                We don't teach Korean.
                <br />
                <em className="text-[#F36A2D] not-italic font-serif">We make it unforgettable.</em>
              </h1>
              <p className="hero-animate text-lg sm:text-xl text-[#1a1a1a]/60 mb-8 leading-relaxed">
                Finally, Korean that doesn't feel like homework. Learn vocabulary through Hanja roots with spaced repetition that actually works.
              </p>
              <div className="hero-animate flex flex-wrap items-center gap-4">
                <a
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-[#0D3328] text-white pl-7 pr-6 py-3.5 rounded-full text-base font-medium hover:bg-[#0D3328]/90 transition-all group"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-sm text-[#1a1a1a]/40">Free forever • No credit card</span>
              </div>
            </div>

            {/* Right - Demo Card */}
            <div className="hero-animate">
              <HeroDemoCard />
            </div>
          </div>
        </div>
      </section>

      {/* Curved divider with rolling persimmon — hero to tiger */}
      <div id="curve-divider" className="relative -mt-12 z-10 overflow-x-clip overflow-y-visible">
        <div className="h-24 bg-white relative">
          <svg id="curve-svg" viewBox="0 0 1440 100" className="absolute -top-px left-0 w-full h-full" preserveAspectRatio="none">
            <path id="curve-border" d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" fill="#FFFBF7" />
          </svg>
        </div>

        {/* The rolling persimmon */}
        <img
          id="rolling-persimmon"
          src="/persimmon.png"
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: '52px',
            height: '52px',
            objectFit: 'contain',
            top: '0px',
            left: '0px',
            zIndex: 20,
          }}
        />
      </div>

      {/* Tiger Companion Section */}
      <section id="companion" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="section-animate grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video — left side, seamless with background */}
            <div className="relative order-2 lg:order-1 max-w-sm mx-auto lg:mx-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover"
                src="/tiger-companion.mp4"
              />
            </div>

            {/* Text — right side */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold tracking-wider text-[#F36A2D] uppercase mb-4">
                Meet Your Study Companion
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0D3328] leading-tight mb-6">
                Feed your tiger.
                <br />
                <span className="text-[#1a1a1a]/25">Watch it grow.</span>
              </h2>
              <p className="text-lg text-[#1a1a1a]/55 leading-relaxed mb-8 max-w-md">
                In Korean folklore, tigers love persimmons. Every word you master feeds your tiger — and it grows with you as you level up.
              </p>

              {/* Name origin */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#FAF9F6] rounded-2xl border border-[#1a1a1a]/5 mb-8">
                <span className="text-lg text-[#1a1a1a]/40" style={{ fontFamily: "'Gowun Dodum', sans-serif" }}>호랑이 + 감</span>
                <span className="text-[#1a1a1a]/20">=</span>
                <span className="text-lg font-semibold text-[#0D3328]">Hogam</span>
              </div>

              {/* Level progression */}
              <div className="flex items-end gap-5">
                {[
                  { size: 'w-8 h-8', label: 'Lv 1', opacity: 'opacity-25' },
                  { size: 'w-10 h-10', label: 'Lv 5', opacity: 'opacity-40' },
                  { size: 'w-12 h-12', label: 'Lv 10', opacity: 'opacity-60' },
                  { size: 'w-14 h-14', label: 'Master', opacity: '' },
                ].map((tier, i) => (
                  <div key={i} className={cn('text-center', tier.opacity)}>
                    <img src="/hogam-logo.png" alt="" className={cn('object-contain mx-auto mb-1', tier.size)} />
                    <span className="text-[9px] font-bold tracking-wider text-[#1a1a1a]/30 uppercase block">{tier.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved top border for How it Works — white to purple */}
      <div className="relative bg-[#F5EEF5]">
        <svg viewBox="0 0 1440 100" className="block w-full" preserveAspectRatio="none" style={{ height: '96px' }}>
          <path d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* How it Works */}
      <section id="how" className="py-20 px-6 bg-[#F5EEF5]">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0D3328] mb-3">How it works</h2>
            <p className="text-base text-[#1a1a1a]/50">A proven system for lasting retention</p>
          </div>

          {/* Tab Navigation */}
          <div className="scroll-reveal flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-[#1a1a1a]/5">
              {FEATURES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(f.id as any)}
                  className={cn(
                    'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                    activeFeature === f.id
                      ? 'bg-[#0D3328] text-white'
                      : 'text-[#1a1a1a]/50 hover:text-[#0D3328]'
                  )}
                >
                  {f.icon}
                  <span className="hidden sm:inline">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="scroll-reveal bg-[#E3EAD3]/30 rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0D3328] mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-base text-[#1a1a1a]/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="bg-white/50 rounded-2xl p-6">
                {feature.visual}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved bottom border for How it Works — purple to white */}
      <div className="relative bg-white h-24">
        <svg viewBox="0 0 1440 100" className="absolute -top-px left-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,100 C960,0 480,0 0,100 Z" fill="#F5EEF5" />
        </svg>
      </div>

      {/* CTA Section — curved top border + forest green */}
      <div className="relative bg-white">
        <svg viewBox="0 0 1440 100" className="block w-full" preserveAspectRatio="none" style={{ height: '96px' }}>
          <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="#0D3328" />
        </svg>
      </div>
      <section id="start" className="py-24 px-6 bg-[#0D3328]">
        <div className="section-animate max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">Ready to start?</h2>
          <p className="text-lg text-white/50 mb-8">
            Try completely free. No credit card required.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-white text-[#0D3328] px-8 py-4 rounded-full text-base font-semibold hover:bg-white/90 transition-colors group"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#1a1a1a]/5 bg-[#FFFBF7]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/hogam-logo.png" alt="Hogam" className="w-7 h-7 object-contain opacity-60" />
            <span className="text-sm text-[#1a1a1a]/40">Hogam</span>
          </div>
          <div className="flex gap-6 text-sm text-[#1a1a1a]/40">
            <a href="#" className="hover:text-[#1a1a1a]/70 transition-colors">About</a>
            <a href="#" className="hover:text-[#1a1a1a]/70 transition-colors">Blog</a>
            <a href="#" className="hover:text-[#1a1a1a]/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1a1a1a]/70 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
