import { QUIZZES_TYPE } from "../common";
import { SERVICES_NAME, TYPE_TASKER_TRAINING } from "../../both";

// TODO
// import moment from 'moments';
const moment = () => new Date();

export const DEFAULT_DEPOSIT_FORM = {
  accountType: "M",
  transactionType: "transfer",
  amount: 0,
  invoiceNumber: "",
  depositDate: moment(),
  referenceCode: "",
  reason: "",
};

export const DEFAULT_WITHDRAW_FORM = {
  accountType: "M",
  transactionType: "transfer",
  amount: 0,
  invoiceNumber: "",
  reason: "",
  withdrawDate: moment(),
};

export const DEFAULT_NEW_REFUND_FORM = {
  newRefundAmount: 0,
  reason: "",
};

export const DEFAULT_REFUND_REQUEST = {
  _id: "",
  currency: "",
};

export const DEFAULT_QUIZZES_PARAMS = {
  pageNumber: 1,
  pageSize: 10,
  order: "desc",
  searchText: "",
  type: Object.values(TYPE_TASKER_TRAINING),
  serviceName: Object.values(SERVICES_NAME),
  orderBy: "rightAnswer",
  quizType: Object.values(QUIZZES_TYPE),
};

export const DEFAULT_QUIZZES_VALUE = {
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

export const DEFAULT_MAX_NUMBER_OF_EXECUTION = 3;

export const DEFAULT_TRAINING_TASKER_FORM = {
  name: "",
  status: "",
  type: "",
  serviceName: [],
  title: "",
  target: 0,
  maxNumberOfExecution: DEFAULT_MAX_NUMBER_OF_EXECUTION,
  videos: [],
  quizzes: [],
  readingTime: 0,
};
