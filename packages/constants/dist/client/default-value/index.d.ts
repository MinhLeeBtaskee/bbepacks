import { moment } from "@bbepacks/modules";
export declare const DEFAULT_DEPOSIT_FORM: {
    accountType: string;
    transactionType: string;
    amount: number;
    invoiceNumber: string;
    depositDate: moment.Moment;
    referenceCode: string;
    reason: string;
};
export declare const DEFAULT_WITHDRAW_FORM: {
    accountType: string;
    transactionType: string;
    amount: number;
    invoiceNumber: string;
    reason: string;
    withdrawDate: moment.Moment;
};
export declare const DEFAULT_NEW_REFUND_FORM: {
    newRefundAmount: number;
    reason: string;
};
export declare const DEFAULT_REFUND_REQUEST: {
    _id: string;
    currency: string;
};
export declare const DEFAULT_QUIZZES_PARAMS: {
    pageNumber: number;
    pageSize: number;
    order: string;
    searchText: string;
    type: string[];
    serviceName: string[];
    orderBy: string;
    quizType: string[];
};
export declare const DEFAULT_QUIZZES_VALUE: {
    question: string;
    type: string;
    serviceName: never[];
    content: string;
    youtubeVideoId: string;
    answers: never[];
    rightAnswer: never[];
    quizType: string;
    answerVsRightAnswerList: never[];
};
export declare const DEFAULT_MAX_NUMBER_OF_EXECUTION = 3;
export declare const DEFAULT_TRAINING_TASKER_FORM: {
    name: string;
    status: string;
    type: string;
    serviceName: never[];
    title: string;
    target: number;
    maxNumberOfExecution: number;
    videos: never[];
    quizzes: never[];
    readingTime: number;
};
