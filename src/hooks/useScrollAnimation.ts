/**
 * Custom hook for scroll-triggered GSAP animations.
 * Provides smooth reveal animations as elements enter the viewport.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  /** Animation type preset */
  type?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** When animation triggers relative to viewport (e.g., 'top 80%') */
  start?: string;
  /** Stagger delay for child elements */
  stagger?: number;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    type = 'fade-up',
    delay = 0,
    duration = 0.8,
    start = 'top 85%',
    stagger,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Define animation presets
    const animations: Record<string, gsap.TweenVars> = {
      'fade-up': {
        y: 40,
        opacity: 0,
      },
      'fade-in': {
        opacity: 0,
      },
      'scale-in': {
        scale: 0.9,
        opacity: 0,
      },
      'slide-left': {
        x: 60,
        opacity: 0,
      },
      'slide-right': {
        x: -60,
        opacity: 0,
      },
    };

    const fromVars = animations[type] || animations['fade-up'];

    // Set initial state
    gsap.set(stagger ? element.children : element, fromVars);

    // Create scroll-triggered animation
    const ctx = gsap.context(() => {
      gsap.to(stagger ? element.children : element, {
        ...Object.fromEntries(
          Object.keys(fromVars).map((key) => [
            key,
            key === 'opacity' ? 1 : 0,
          ])
        ),
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: 'power3.out',
        stagger: stagger || 0,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [type, delay, duration, start, stagger]);

  return ref;
}

/**
 * Hook for animating elements when they enter the viewport.
 * Simpler alternative that just adds a class.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('in-view');
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
