/**
 * Animated button with Wispr-inspired wave hover effect.
 * Characters animate individually on hover.
 */
import { useRef, useEffect, type ReactNode, type ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import type { VariantProps } from 'class-variance-authority';

interface AnimatedButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: ReactNode;
}

export function AnimatedButton({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}: AnimatedButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement || typeof children !== 'string') return;

    // Wrap each character in a span
    const text = children;
    textElement.innerHTML = text
      .split('')
      .map(
        (char) =>
          `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    const chars = textElement.querySelectorAll('span');

    const handleMouseEnter = () => {
      gsap.to(chars, {
        y: -2,
        duration: 0.2,
        stagger: 0.02,
        ease: 'power2.out',
      });
      gsap.to(chars, {
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.1,
      });
    };

    const button = textElement.closest('button, a');
    button?.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      button?.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [children]);

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {typeof children === 'string' ? (
        <span ref={textRef} className="inline-flex">
          {children}
        </span>
      ) : (
        children
      )}
    </Comp>
  );
}
