/**
 * Core type definitions for the Hogam vocabulary learning system.
 * These types define the data structures used throughout the app
 * for vocabulary cards, study sessions, and learning progress.
 */

/** A vocabulary word with its Korean text, translation, and metadata. */
export interface VocabCard {
  id: string;
  hangul: string;
  romanization: string;
  english: string;
  category: string;
}

/** The three quiz modes used in study sessions. */
export type QuestionType = 'KOREAN_TO_ENGLISH' | 'IMAGE_TO_KOREAN' | 'KOREAN_TO_IMAGE';

/** A vocabulary card extended with study session context and quiz configuration. */
export interface StudyItem extends VocabCard {
  context: string;
  questionType: QuestionType;
  /** Word IDs for wrong-answer options in KOREAN_TO_IMAGE mode. */
  distractors?: string[];
}

/** Answer state during a quiz question. */
export type AnswerStatus = 'idle' | 'correct' | 'incorrect';

/** Generic async loading state. */
export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

/** Dashboard user progress data shape. */
export interface DashboardData {
  user: { level: number; streak: number };
  reviews: { available: number };
  lessons: { available: number };
  levelProgress: { current: number; target: number; percentage: number };
  learningPath: Record<string, { learned: number; total: number; complete: boolean }>;
  srsStages: Array<{ name: string; count: number; color: string }>;
  totalWords: number;
}
