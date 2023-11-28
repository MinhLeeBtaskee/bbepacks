export * from "./permissions";
export * from "./domains";

export const sendNotificationLevel = {
  district: "district",
  viewedTaskers: "viewed-taskers",
  topTaskerDistrict: "top-tasker",
  city: "city",
  favoriteTasker: "favorite-tasker",
};
export const COMMISSION_DEFAULT = 0.2;
export const DAY_OF_WEEK = 7;

export const PAYMENT_METHOD = {
  CASH: "CASH",
  CREDIT: "CREDIT",
  CARD: "CARD",
  MOMO: "MOMO",
  ZALO_PAY: "ZALO_PAY",
  SHOPEE_PAY: "SHOPEE_PAY",
  TRUE_MONEY: "TRUE_MONEY",
  PROMPT_PAY: "PROMPT_PAY",
  BANK_TRANSFER: "BANK_TRANSFER",
  VN_PAY: "VN_PAY",
  TIKI: "TIKI",
  GO_PAY: "GO_PAY",
  QRIS: "QRIS",
  DANA: "DANA",
};

export const FROM_BACKEND_OPTION = "BACKEND";

export const TASK_STATUS = {
  CONFIRMED: "CONFIRMED",
  DONE: "DONE",
  POSTED: "POSTED",
  WAITING_ASKER_CONFIRMATION: "WAITING_ASKER_CONFIRMATION",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
};

export const PAYMENT_STATUS = {
  PAID: "PAID",
  NEW: "NEW",
  ERROR: "ERROR",
  SENDING: "SENDING",
  CHARGING: "CHARGING",
  RESPONSED: "RESPONSED",
  AUTHORISED: "3DAUTHORISED",
  CANCELED: "CANCELED",
  FAILED: "FAILED",
};

export const USER_TYPE = {
  ASKER: "ASKER",
  TASKER: "TASKER",
};

export const OPTION_NAVIGATE_TO = {
  SUBSCRIPTION: "Subscription",
  TASK_DETAIL: "TaskDetail",
};

export const PAYMENT_CHANNEL_2C2P = {
  PROMPT_PAY: "PPQR",
  CARD: "CC",
  TRUE_MONEY: "TRUEMONEY",
};

export const SUBSCRIPTION_STATUS = {
  ACTIVE: "ACTIVE",
  NEW: "NEW",
  CANCELED: "CANCELED",
  DONE: "DONE",
  INACTIVE: "INACTIVE",
  EXPIRED: "EXPIRED",
};

export const REFUND_REQUEST_STATUS = {
  NEW: "NEW",
  PAID: "PAID",
  ERROR: "ERROR",
  CANCELED: "CANCELED",
};

export const OUTSTADING_PAYMENT_STATUS = {
  NEW: "NEW",
  RECHARGING: "RECHARGING",
  RECHARGE_FAILED: "RECHARGE_FAILED",
  CHARGED: "CHARGED",
};

export const PAYOUT_STATUS = {
  WAIT: "WAIT",
  PAID: "PAID",
};

export const KEY_CHANGE_TASK_HISTORY = {
  CHANGE_PAYMENT_METHOD: "CHANGE_PAYMENT_METHOD",
  CHANGE_TASK_TO_POSTED: "CHANGE_TASK_TO_POSTED",
};

export const ACTION_TASKER_LOW_RATING = {
  SEND_WARNING_NOTIFICATION: "SEND_WARNING_NOTIFICATION",
  LOCK_TASKER: "LOCK_TASKER",
  SEND_TRAINING_NOTIFICATION: "SEND_TRAINING_NOTIFICATION",
  REACTIVE: "REACTIVE",
};

export const CHECK_INPUT_TASKER = {
  TRAINING_INPUT: "TRAINING_INPUT",
  TRAINING_TASKER: "TRAINING_TASKER",
  GENERAL_TEST: "GENERAL_TEST",
  HANDLE_SITUATIONS: "HANDLE_SITUATIONS",
};

export const SOURCE_NAME_FA_TRANSACTION = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  SYSTEM: "SYSTEM",
};

export const ERROR_TASKER_CONFLICT_WORKING_TIME =
  "Tasker conflict working time";

export const LIST_TRANSACTION_PAYMENT_STATUS = [
  {
    name: "STATUS_OF_PREPAYMENT_PAID",
    value: "PAID",
  },
  {
    name: "STATUS_OF_PREPAYMENT_NEW",
    value: "WAITING",
  },
  {
    name: "STATUS_OF_PREPAYMENT_ERROR",
    value: "ERROR",
  },
  {
    name: "ALL",
    value: "ALL",
  },
];

export const LIST_TRANSACTION_REFUND_STATUS = [
  {
    name: "REFUND_STATUS.STATUS_OF_REFUNDED",
    value: "REFUNDED",
  },
  {
    name: "REFUND_STATUS.STATUS_OF_ERROR",
    value: "ERROR",
  },
  {
    name: "ALL",
    value: "ALL",
  },
];

// TODO Indonesia
// Implement transaction ID later
export const LIST_TRANSACTION_PAYMENT = [
  {
    name: "SHOPEE_PAY",
    value: "SHOPEE_PAY",
    country: ["VN", "TH"],
  },
  {
    name: "ZALO_PAY",
    value: "ZALO_PAY",
    country: ["VN"],
  },
  {
    name: "MOMO",
    value: "MOMO",
    country: ["VN"],
  },
  {
    name: "CARD",
    value: "CARD",
    country: ["VN", "TH", "ID"],
  },
  {
    name: "TRUE_MONEY",
    value: "TRUE_MONEY",
    country: ["TH"],
  },
  {
    name: "PROMPT_PAY",
    value: "PROMPT_PAY",
    country: ["TH"],
  },
  {
    name: "VN_PAY",
    value: "VN_PAY",
    country: ["VN"],
  },
  {
    name: "TIKI",
    value: "TIKI",
    country: ["VN"],
  },
  {
    name: "GO_PAY",
    value: "GO_PAY",
    country: ["ID"],
  },
  {
    name: "DANA",
    value: "DANA",
    country: ["ID"],
  },
  {
    name: "QRIS",
    value: "QRIS",
    country: ["ID"],
  },
];

/* eslint-disable prettier/prettier */
export const USER_STATUS = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  INACTIVE: "INACTIVE",
  IN_PROBATION: "IN_PROBATION",
  LOCKED: "LOCKED",
  UNVERIFIED: "UNVERIFIED",
  UNLOCKED: "UNLOCKED",
};

export const LIST_USER_STATUS = [
  "ACTIVE",
  "DISABLED",
  "INACTIVE",
  "IN_PROBATION",
  "LOCKED",
  "UNVERIFIED",
];

export const LIST_CONTENT_AFTER_UPDATE = [
  "date",
  "collectionDate",
  "newDuration",
  "new",
  "isKeepOldPrice",
  "status",
  "newStatus",
  "cost",
  "taskerPhone",
  "taskerName",
  "newMethod",
  "taskCost",
  "promotionCode",
  "type",
  "value",
  "maxValue",
  "phone",
  "name",
  "userId",
  "newPaymentMethod",
  "newQuantity",
  "newTaskNote",
];

export const LIST_CONTENT_BEFORE_UPDATE = [
  "oldDate",
  "oldCollectionDate",
  "duration",
  "old",
  "isKeepOldPrice",
  "status",
  "oldStatus",
  "oldCost",
  "oldMethod",
  "oldPaymentMethod",
  "taskNote",
];

export const LIST_SERVICE_TYPE = [
  "NORMAL",
  "PREMIUM",
  "TET_BOOKING",
  "SUBSCRIPTION_BOOKING",
  "SCHEDULE_BOOKING",
  "TIKI_MINI_APP",
  "VN_PAY_MINI_APP",
];

export const SERVICE_TYPE = {
  NORMAL: "NORMAL",
  PREMIUM: "PREMIUM",
  TET_BOOKING: "TET_BOOKING",
  TIKI_MINI_APP: "TIKI_MINI_APP",
  VN_PAY_MINI_APP: "VN_PAY_MINI_APP",
  SUBSCRIPTION_BOOKING: "SUBSCRIPTION_BOOKING",
  SCHEDULE_BOOKING: "SCHEDULE_BOOKING",
};

export const FROM_PARTNER = {
  TIKI_MINI_APP: "TIKI_MINI_APP",
  VN_PAY_MINI_APP: "VN_PAY_MINI_APP",
};

export const REASON_CANCEL = [
  "NEARBY_TASK_PLACE",
  "ASKER_BUSY",
  "SO_FAR_AWAY",
  "WRONG_DATE",
  "TASKER_NOT_COME",
  "TASKER_NOT_COME_WITH_ANNOUCEMENT",
  "POSTED_WRONG_DATE",
  "ASKER_DONT_NEED_ANYMORE",
  "NO_TASKER_ACCEPT",
  "PAYMENT_FAILED",
  "REBOOK_TASK",
  "OTHER_REASON",
];

export const TEAM_EMPLOYEES = [
  "Tasker",
  "Tasker Thailand",
  "CS",
  "CS Thailand",
  "BD",
  "Marketing",
  "Marketing Thailand",
  "Accounting",
  "Dev",
];

export const TASKER_VIOLATE_REASON = [
  "VIOLATE_REASON_TASK_CANCEL",
  "VIOLATE_REASON_QUALITY_ISSUE",
  "VIOLATE_REASON_WORKING_OUTSIDE",
  "OTHER",
];

export const LIST_PRICE_IN_COST_DETAIL = ["baseCost", "cost", "finalCost"];

export const PROMOTION_USING_TYPE_OF_DUEDATE = {
  NUMBER_OF_DAY_DUE_DATE: "Number of day due date",
  EXPIRED_DATE: "Expired date",
};

export const PROMOTION_STATUS = {
  ACTIVE: "ACTIVE",
  TESTING: "TESTING",
  INACTIVE: "INACTIVE",
};

export const PROMOTION_USING_FROM = {
  SYSTEM: "SYSTEM",
  SYSTEM_WITH_PARTNER: "SYSTEM_WITH_PARTNER",
};

export const PROMOTION_CODE_TYPE = {
  CODE_LIST: "Code list",
  CODE_FROM_PARTNER: "Code from partner",
  GIFT_INFO: "Gift Information",
};

export const PROMOTION_USING_TYPE = {
  MONEY: "MONEY",
  PERCENT: "PERCENTAGE",
};

export const CAMPAIGN_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  TESTING: "TESTING",
};

export const CATEGORIES_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

export const TYPE_BREWARDS = {
  LIST_BREWARDS: "List bRewards",
  CATEGORIES: "List category",
};

export const CAMPAIGN_TYPE = {
  PROMOTION: "PROMOTION",
  INFO: "INFO",
};

export const CAMPAIGN_TYPE_USERS = {
  NEW: "NEW",
  OLD: "OLD",
  BOTH: "BOTH",
};

/* ----------------- Text feedback matches the rating ---------------- */
export const ARR_QUESTION_3_STAR = [
  { text: "BAD_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
  { text: "BAD_ON_TIME", value: "ON_TIME" },
  { text: "BAD_ATTITUDE", value: "ATTITUDE" },
  { text: "BAD_NOT_COMING", value: "NOT_COMING" },
  { text: "BAD_CARE", value: "CARE" },
  { text: "BAD_CLEAN", value: "CLEAN" },
  { text: "BAD_NOT_UNIFORMS", value: "NOT_UNIFORMS" },
  { text: "OTHER", value: "OTHER" },
];
export const ARR_QUESTION_4_STAR = [
  { text: "IMPROVE_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
  { text: "IMPROVE_ON_TIME", value: "ON_TIME" },
  { text: "IMPROVE_ATTITUDE", value: "ATTITUDE" },
  { text: "IMPROVE_NOT_COMING", value: "NOT_COMING" },
  { text: "IMPROVE_CARE", value: "CARE" },
  { text: "IMPROVE_CLEAN", value: "CLEAN" },
  { text: "NOT_UNIFORMS", value: "NOT_UNIFORMS" },
  { text: "PROLONG_TIME", value: "PROLONG_TIME" },
  { text: "OTHER", value: "OTHER" },
];
export const ARR_QUESTION_3_STAR_CLEANING_TOOL = [
  { text: "BAD_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
  { text: "BAD_BRING_CLEANING_TOOLS", value: "BRING_CLEANING_TOOLS" },
  { text: "BAD_ON_TIME", value: "ON_TIME" },
  { text: "BAD_ATTITUDE", value: "ATTITUDE" },
  { text: "BAD_NOT_COMING", value: "NOT_COMING" },
  { text: "BAD_CARE", value: "CARE" },
  { text: "BAD_CLEAN", value: "CLEAN" },
  { text: "BAD_NOT_UNIFORMS", value: "NOT_UNIFORMS" },
  { text: "OTHER", value: "OTHER" },
];
export const ARR_QUESTION_4_STAR_CLEANING_TOOL = [
  { text: "IMPROVE_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
  { text: "IMPROVE_BRING_CLEANING_TOOLS", value: "BRING_CLEANING_TOOLS" },
  { text: "IMPROVE_ON_TIME", value: "ON_TIME" },
  { text: "IMPROVE_ATTITUDE", value: "ATTITUDE" },
  { text: "IMPROVE_NOT_COMING", value: "NOT_COMING" },
  { text: "IMPROVE_CARE", value: "CARE" },
  { text: "IMPROVE_CLEAN", value: "CLEAN" },
  { text: "NOT_UNIFORMS", value: "NOT_UNIFORMS" },
  { text: "PROLONG_TIME", value: "PROLONG_TIME" },
  { text: "OTHER", value: "OTHER" },
];
export const ARR_QUESTION_5_STAR = [
  { text: "ON_TIME", value: "ON_TIME" },
  { text: "FRIENDLY", value: "FRIENDLY" },
  { text: "CLEAN", value: "CLEAN" },
  { text: "CHEERFUL", value: "CHEERFUL" },
];

/* ---------------------------- FOR HOME COOKING ---------------------------- */
export const HOME_COOKING_5_STAR = [
  { text: "DELICIOUS", value: "DELICIOUS" }, // Nấu ăn ngon
  { text: "KITCHEN_HYGIENE", value: "KITCHEN_HYGIENE" }, // Đảm bảo vệ sinh trong lúc nấu ăn
  { text: "QUICK_ACTION", value: "QUICK_ACTION" }, // Thao tác nhanh
  { text: "HONEST", value: "HONEST" }, // Trung thực
  { text: "ENTHUSIASM", value: "ENTHUSIASM" }, // Hăng hái
  { text: "NICE_FOOD", value: "NICE_FOOD" }, // Trình bày món ăn bắt mắt
];

export const HOME_COOKING_4_STAR = [
  { text: "NORMAL_FOOD", value: "NORMAL_FOOD" }, // Nấu ăn tạm được
  {
    text: "IMPROVE_ABILITY_TO_PRESENT_FOOD",
    value: "IMPROVE_ABILITY_TO_PRESENT_FOOD",
  }, // Cần trình bày món ăn bắt mắt
  { text: "BAD_KITCHEN_HYGIENE", value: "BAD_KITCHEN_HYGIENE" }, // Đảm bảo vệ sinh trong lúc nấu ăn
];

export const HOME_COOKING_3_STAR = [
  { text: "BAD_FOOD", value: "BAD_FOOD" }, // Nấu ăn không ngon
  { text: "BAD_KITCHEN_HYGIENE", value: "BAD_KITCHEN_HYGIENE" }, // Không đảm bảo vệ sinh trong lúc nấu
  { text: "BAD_HONEST", value: "BAD_HONEST" }, // Thiếu trung thực
];
/* ---------------------------------------------------------------------- */

/* ---------------------------- TASKER TRAINING ---------------------------- */
export const STATUS_TASKER_TRAINING = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};
export const CHARACTER_QUESTION = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export const STATUS_TASKER_TRAINING_HISTORY = {
  PASSED: "PASSED",
  FAILED: "FAILED",
};
export const TYPE_TASKER_TRAINING = {
  TRAINING_INPUT: "TRAINING_INPUT",
  TRAINING_QUALITY: "TRAINING_QUALITY",
  TRAINING_REGULATIONS: "TRAINING_REGULATIONS",
  TRAINING_BASIC: "TRAINING_BASIC",
  TRAINING_ADVANCED: "TRAINING_ADVANCED",
};
/* ---------------------------------------------------------------------- */
export const CHARACTER_SERIES = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const URL_LOGO_BTASKEE =
  "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/LG99yorZLWWapC8Az";

export const UP_TO_3_STARS = [
  { text: "BAD_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
  { text: "BAD_ENVIRONMENT", value: "ENVIRONMENT" },
  { text: "BAD_OVERLOAD", value: "OVERLOAD" },
  { text: "BAD_CONTACT", value: "CONTACT" },
  { text: "BAD_FRIENDLY", value: "FRIENDLY" },
  { text: "OTHER", value: "OTHER" },
];

export const EQUAL_4_STARS = [
  { text: "IMPROVE_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
  { text: "IMPROVE_ENVIRONMENT", value: "ENVIRONMENT" },
  { text: "IMPROVE_OVERLOAD", value: "OVERLOAD" },
  { text: "IMPROVE_CONTACT", value: "CONTACT" },
  { text: "IMPROVE_FRIENDLY", value: "FRIENDLY" },
  { text: "OTHER", value: "OTHER" },
];

export const EQUAL_5_STARS = [
  { text: "FRIENDLY", value: "FRIENDLY" },
  { text: "POLITE", value: "POLITE" },
  { text: "CHEERFUL", value: "CHEERFUL" },
  { text: "SUPPORT", value: "SUPPORT" },
];

// These for Private Driver service
export const upTo3StarsPrivateDriver = [
  { text: "BAD_CONTACT", value: "CONTACT" },
  { text: "BAD_FRIENDLY", value: "FRIENDLY" },
  { text: "OTHER", value: "OTHER" },
];

export const equal4StarsPrivateDriver = [
  { text: "IMPROVE_CONTACT", value: "CONTACT" },
  { text: "IMPROVE_FRIENDLY", value: "FRIENDLY" },
  { text: "OTHER", value: "OTHER" },
];

export const ALLOWABLE_IMAGE_SIZE = 64; // Image size allow 64Kb;

export const SERVICES_NAME = {
  AIR_CONDITIONER_SERVICE: "AIR_CONDITIONER_SERVICE",
  CLEANING: "CLEANING",
  LAUNDRY: "LAUNDRY",
  DEEP_CLEANING: "DEEP_CLEANING",
  HOME_COOKING: "HOME_COOKING",
  HOUSE_KEEPING: "HOUSE_KEEPING",
  GO_MARKET: "GO_MARKET",
  SofaCleaning: "SofaCleaning",
  CLEANING_SUBSCRIPTION: "CLEANING_SUBSCRIPTION",
  ELDERLY_CARE: "ELDERLY_CARE",
  PATIENT_CARE: "PATIENT_CARE",
  CHILD_CARE: "CHILD_CARE",
  ELDERLY_CARE_SUBSCRIPTION: "ELDERLY_CARE_SUBSCRIPTION",
  PATIENT_CARE_SUBSCRIPTION: "PATIENT_CARE_SUBSCRIPTION",
  CHILD_CARE_SUBSCRIPTION: "CHILD_CARE_SUBSCRIPTION",
  DISINFECTION_SERVICE: "DISINFECTION_SERVICE",
  CAR_ADVERTISING: "CAR_ADVERTISING",
  OFFICE_CLEANING: "OFFICE_CLEANING",
};

const {
  CLEANING,
  CLEANING_SUBSCRIPTION,
  ELDERLY_CARE,
  ELDERLY_CARE_SUBSCRIPTION,
  PATIENT_CARE,
  PATIENT_CARE_SUBSCRIPTION,
  CHILD_CARE,
  CHILD_CARE_SUBSCRIPTION,
  DEEP_CLEANING,
  HOME_COOKING,
  HOUSE_KEEPING,
  GO_MARKET,
  LAUNDRY,
  AIR_CONDITIONER_SERVICE,
  SofaCleaning,
  DISINFECTION_SERVICE,
} = SERVICES_NAME;

export const SELECT_SERVICE_TASKER_GROUPS_MANAGEMENT = [
  {
    serviceText: "Cleaning",
    serviceName: [CLEANING, CLEANING_SUBSCRIPTION],
  },
  {
    serviceText: "Deep Cleaning",
    serviceName: [DEEP_CLEANING],
  },
  {
    serviceText: "Home Cooking",
    serviceName: [HOME_COOKING],
  },
  {
    serviceText: "Housekeeping",
    serviceName: [HOUSE_KEEPING],
  },
  {
    serviceText: "Grocery Assistant",
    serviceName: [GO_MARKET],
  },
  {
    serviceText: "Elderly Care",
    serviceName: [ELDERLY_CARE, ELDERLY_CARE_SUBSCRIPTION],
  },
  {
    serviceText: "Patient Care",
    serviceName: [PATIENT_CARE, PATIENT_CARE_SUBSCRIPTION],
  },
  {
    serviceText: "Child Care",
    serviceName: [CHILD_CARE, CHILD_CARE_SUBSCRIPTION],
  },
  {
    serviceText: "All Service",
    serviceName: [
      CLEANING,
      CLEANING_SUBSCRIPTION,
      DEEP_CLEANING,
      HOME_COOKING,
      HOUSE_KEEPING,
      GO_MARKET,
      ELDERLY_CARE,
      ELDERLY_CARE_SUBSCRIPTION,
      PATIENT_CARE,
      PATIENT_CARE_SUBSCRIPTION,
      CHILD_CARE,
      CHILD_CARE_SUBSCRIPTION,
    ],
  },
];

export const SERVICE_NAME_OF_PRICING = {
  AIR_CONDITIONER_SERVICE: "air-conditioner",
  CLEANING: "home-cleaning",
  CLEANING_SUBSCRIPTION: "home-cleaning",
  DEEP_CLEANING: "deep-cleaning",
  HOME_COOKING: "home-cooking",
  HOUSE_KEEPING: "housekeeping",
  LAUNDRY: "laundry",
  GO_MARKET: "grocery-assistant",
  SofaCleaning: "sofa",
  DISINFECTION_SERVICE: "disinfection",
  PATIENT_CARE: "patient-care",
  ELDERLY_CARE: "elderly-care",
  CHILD_CARE: "child-care",
  OFFICE_CLEANING: "office-cleaning",
  WASHING_MACHINE: "washing-machine",
};

export const SELECT_DURATION_OF_SERVICE = [
  {
    duration: [3, 4, 5, 8],
    serviceName: [CHILD_CARE, CHILD_CARE_SUBSCRIPTION],
  },
  {
    duration: [4, 8],
    serviceName: [
      ELDERLY_CARE,
      ELDERLY_CARE_SUBSCRIPTION,
      PATIENT_CARE,
      PATIENT_CARE_SUBSCRIPTION,
    ],
  },
  {
    duration: [2, 3, 4],
    serviceName: [
      CLEANING,
      CLEANING_SUBSCRIPTION,
      DEEP_CLEANING,
      HOME_COOKING,
      HOUSE_KEEPING,
    ],
  },
  {
    duration: [1],
    serviceName: [
      AIR_CONDITIONER_SERVICE,
      LAUNDRY,
      SofaCleaning,
      GO_MARKET,
      DISINFECTION_SERVICE,
    ],
  },
];

export const DELETE_STATUS = "INACTIVE";
export const ACTIVE_STATUS = "ACTIVE";
