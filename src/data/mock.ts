/**
 * Mock/sample data for Hogam UI development.
 * This data powers the landing page, learn session, and dashboard
 * until real data is connected via tRPC + Drizzle.
 *
 * TODO: Replace with real data from the database when backend is built.
 */
import type { VocabCard, StudyItem, DashboardData } from '@/types/vocab';

/** Sample words displayed on the landing page hero card. */
export const SAMPLE_WORDS: VocabCard[] = [
  { id: '1', hangul: '딸기', romanization: 'Ttal-gi', english: 'Strawberry', category: 'Food' },
  { id: '2', hangul: '산', romanization: 'San', english: 'Mountain', category: 'Nature' },
  { id: '3', hangul: '호랑이', romanization: 'Ho-rang-i', english: 'Tiger', category: 'Animal' },
];

/** Study session items for the learn page demo flow. */
export const STUDY_SESSION: StudyItem[] = [
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

/** Dashboard mock data for user progress display. */
export const DASHBOARD_DATA: DashboardData = {
  user: {
    level: 5,
    streak: 12,
  },
  reviews: {
    available: 25,
  },
  lessons: {
    available: 15,
  },
  levelProgress: {
    current: 67,
    target: 150,
    percentage: 45,
  },
  learningPath: {
    hangul: { learned: 40, total: 40, complete: true },
    grammar: { learned: 12, total: 25, complete: false },
    vocabulary: { learned: 67, total: 150, complete: false },
  },
  srsStages: [
    { name: 'New', count: 45, color: 'bg-pink-400' },
    { name: 'Growing', count: 67, color: 'bg-purple-400' },
    { name: 'Strong', count: 32, color: 'bg-blue-400' },
    { name: 'Expert', count: 14, color: 'bg-amber-400' },
    { name: 'Mastered', count: 89, color: 'bg-forest' },
  ],
  totalWords: 247,
};
