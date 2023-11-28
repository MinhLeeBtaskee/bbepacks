"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TRAINING_TASKER_FORM = exports.DEFAULT_MAX_NUMBER_OF_EXECUTION = exports.DEFAULT_QUIZZES_VALUE = exports.DEFAULT_QUIZZES_PARAMS = exports.DEFAULT_REFUND_REQUEST = exports.DEFAULT_NEW_REFUND_FORM = exports.DEFAULT_WITHDRAW_FORM = exports.DEFAULT_DEPOSIT_FORM = void 0;
var common_1 = require("../common");
var both_1 = require("../../both");
var modules_1 = require("@bbepacks/modules");
exports.DEFAULT_DEPOSIT_FORM = {
    accountType: "M",
    transactionType: "transfer",
    amount: 0,
    invoiceNumber: "",
    depositDate: (0, modules_1.moment)(),
    referenceCode: "",
    reason: "",
};
exports.DEFAULT_WITHDRAW_FORM = {
    accountType: "M",
    transactionType: "transfer",
    amount: 0,
    invoiceNumber: "",
    reason: "",
    withdrawDate: (0, modules_1.moment)(),
};
exports.DEFAULT_NEW_REFUND_FORM = {
    newRefundAmount: 0,
    reason: "",
};
exports.DEFAULT_REFUND_REQUEST = {
    _id: "",
    currency: "",
};
exports.DEFAULT_QUIZZES_PARAMS = {
    pageNumber: 1,
    pageSize: 10,
    order: "desc",
    searchText: "",
    type: Object.values(both_1.TYPE_TASKER_TRAINING),
    serviceName: Object.values(both_1.SERVICES_NAME),
    orderBy: "rightAnswer",
    quizType: Object.values(common_1.QUIZZES_TYPE),
};
exports.DEFAULT_QUIZZES_VALUE = {
    question: "",
    type: "",
    serviceName: [],
    content: "",
    youtubeVideoId: "",
    answers: [],
    rightAnswer: [],
    quizType: "",
    answerVsRightAnswerList: [],
};
exports.DEFAULT_MAX_NUMBER_OF_EXECUTION = 3;
exports.DEFAULT_TRAINING_TASKER_FORM = {
    name: "",
    status: "",
    type: "",
    serviceName: [],
    title: "",
    target: 0,
    maxNumberOfExecution: exports.DEFAULT_MAX_NUMBER_OF_EXECUTION,
    videos: [],
    quizzes: [],
    readingTime: 0,
};
