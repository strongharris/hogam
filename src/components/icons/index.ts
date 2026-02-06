/**
 * Centralized icon registry for Hogam vocabulary illustrations.
 * Maps word IDs to their corresponding ink-style icon components.
 */
import type React from 'react';
import {
  StrawberryIcon,
  MountainIcon,
  BookIcon,
  SunIcon,
  MoonIcon,
  WaterIcon,
  FireIcon,
  TreeIcon,
  TigerLogo,
  PencilIcon,
} from './InkIcons';

export {
  StrawberryIcon,
  MountainIcon,
  BookIcon,
  SunIcon,
  MoonIcon,
  WaterIcon,
  FireIcon,
  TreeIcon,
  TigerLogo,
  PencilIcon,
};

/** Maps a vocabulary word ID to its illustration component. */
export const ICON_REGISTRY: Record<string, React.FC<{ className?: string }>> = {
  '1': StrawberryIcon,
  '2': MountainIcon,
  '3': BookIcon,
  '4': SunIcon,
  '5': MoonIcon,
  '6': WaterIcon,
  '7': FireIcon,
  '8': TreeIcon,
};

/** Default fallback icon when a word ID has no registered illustration. */
export const DEFAULT_ICON = BookIcon;
