export interface VocabCard {
  id: string;
  hangul: string;
  romanization: string;
  english: string;
  category: string;
}

export type QuestionType = 'KOREAN_TO_ENGLISH' | 'IMAGE_TO_KOREAN' | 'KOREAN_TO_IMAGE';

export interface StudyItem extends VocabCard {
  context: string;
  questionType: QuestionType;
  distractors?: string[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
