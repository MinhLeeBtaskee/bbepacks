export interface IQuizzesForm {
    question: string;
    type: string;
    serviceName: string[];
    quizType?: string;
    content?: string;
    youtubeVideoId?: string;
    answers?: string[];
    answerVsRightAnswerList?: {
        answer: string;
        rightAnswer: boolean;
    }[];
    rightAnswer?: number[];
}
export interface IQuizzesItem extends IQuizzesForm {
    _id: string;
    createdAt: Date;
}
export interface IQuizzesParams {
    pageNumber: number;
    pageSize: number;
    order: string;
    orderBy: string;
    searchText: string;
    type: string[];
    serviceName: string[];
    quizType: string[];
}
export declare enum TRAINING_TYPE {
    TRAINING_INPUT = "TRAINING_INPUT",
    TRAINING_BASIC = "TRAINING_BASIC",
    TRAINING_QUALITY = "TRAINING_QUALITY",
    TRAINING_ADVANCED = "TRAINING_ADVANCED",
    TRAINING_REGULATIONS = "TRAINING_REGULATIONS"
}
export type ITrainingType = keyof typeof TRAINING_TYPE;
export declare enum TRAINING_STATUS {
    PASS = "PASS",
    FAILED = "FAILED"
}
export type ITrainingStatus = keyof typeof TRAINING_STATUS;
