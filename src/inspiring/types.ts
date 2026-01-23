export interface VocabCard {
  id: string;
  hangul: string;
  romanization: string;
  english: string;
  category: string;
}

export interface GeneratedContext {
  sentence: string;
  translation: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}