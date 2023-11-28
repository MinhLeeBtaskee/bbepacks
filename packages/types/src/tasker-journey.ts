import { ITextLangRelease } from './lang';

export enum E_QUIZ_TYPE {
  QUIZ = 'QUIZ',
  VIDEO = 'VIDEO',
}

export enum E_CONDITION_GET_BONUS {
  TRAINING = 'TRAINING',
}

export interface ITrainingSetting {
  _id: string;
  cityName: string;
  levels: Array<{
    name: string;
    title: ITextLangRelease;
    text: ITextLangRelease;
    icon: string;
    conditions: Array<{
      name: string;
      target: number;
      avgRating: number;
      text: ITextLangRelease;
    }>;
    bonus: Array<{ name: string; image: string; text: ITextLangRelease }>;
    conditionsGetBonus: Array<{
      name: string;
      target: number;
      icon: string;
      text: ITextLangRelease;
      training?: Array<{ _id: string; text: ITextLangRelease }>;
    }>;
  }>;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

export interface IConditionsGetBonusByTraining {
  name: string;
  target: number;
  icon: string;
  text: ITextLangRelease;
  training: Array<{ _id: string; text: ITextLangRelease }>;
}

export interface ITrainingJourney {
  _id: string;
  quizzes: Array<string>;
  videos: Array<string>;
  title: ITextLangRelease;
  target: number;
  readingTime: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  isTesting: boolean;
}

export interface IQuizzesTrainingJourney
  extends IQuestionTypeVideo,
    IQuestionTypeQuiz {
  _id: string;
  question: string;
  quizType: `${E_QUIZ_TYPE}`;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

export interface IQuestionTypeVideo {
  answers: Array<string>;
  rightAnswer: Array<number>;
}

export interface IQuestionTypeQuiz {
  content: string;
  youtubeVideoId: string;
}

export interface IFormQuestionTypeQuiz {
  question: IQuizzesTrainingJourney['question'];
  answers: Array<{
    isRight: boolean;
    content: string;
  }>;
}

export type IRefetchTrainingDetail = () => Promise<void>;
export type IRefetchTrainingSettingByLevel = () => Promise<void>;
