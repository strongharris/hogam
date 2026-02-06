/**
 * Shared icon rendering utility for vocabulary word illustrations.
 * Replaces the duplicated renderIcon functions in index.tsx and learn.tsx.
 */
import React from 'react';
import { ICON_REGISTRY, DEFAULT_ICON } from '@/components/icons';

/**
 * Renders the ink-style illustration for a given vocabulary word ID.
 * Falls back to BookIcon if no illustration is registered for the ID.
 */
export function renderWordIcon(
  wordId: string,
  className = 'w-32 h-32 md:w-40 md:h-40 mx-auto text-forest',
): React.ReactNode {
  const IconComponent = ICON_REGISTRY[wordId] ?? DEFAULT_ICON;
  return <IconComponent className={className} />;
}
