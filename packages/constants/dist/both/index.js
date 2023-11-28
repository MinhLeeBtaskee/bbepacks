"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOME_COOKING_4_STAR = exports.HOME_COOKING_5_STAR = exports.ARR_QUESTION_5_STAR = exports.ARR_QUESTION_4_STAR_CLEANING_TOOL = exports.ARR_QUESTION_3_STAR_CLEANING_TOOL = exports.ARR_QUESTION_4_STAR = exports.ARR_QUESTION_3_STAR = exports.CAMPAIGN_TYPE_USERS = exports.CAMPAIGN_TYPE = exports.TYPE_BREWARDS = exports.CATEGORIES_STATUS = exports.CAMPAIGN_STATUS = exports.PROMOTION_USING_TYPE = exports.PROMOTION_CODE_TYPE = exports.PROMOTION_USING_FROM = exports.PROMOTION_STATUS = exports.PROMOTION_USING_TYPE_OF_DUEDATE = exports.LIST_PRICE_IN_COST_DETAIL = exports.TASKER_VIOLATE_REASON = exports.TEAM_EMPLOYEES = exports.REASON_CANCEL = exports.FROM_PARTNER = exports.SERVICE_TYPE = exports.LIST_SERVICE_TYPE = exports.LIST_CONTENT_BEFORE_UPDATE = exports.LIST_CONTENT_AFTER_UPDATE = exports.LIST_USER_STATUS = exports.USER_STATUS = exports.LIST_TRANSACTION_PAYMENT = exports.LIST_TRANSACTION_REFUND_STATUS = exports.LIST_TRANSACTION_PAYMENT_STATUS = exports.ERROR_TASKER_CONFLICT_WORKING_TIME = exports.SOURCE_NAME_FA_TRANSACTION = exports.CHECK_INPUT_TASKER = exports.ACTION_TASKER_LOW_RATING = exports.KEY_CHANGE_TASK_HISTORY = exports.PAYOUT_STATUS = exports.OUTSTADING_PAYMENT_STATUS = exports.REFUND_REQUEST_STATUS = exports.SUBSCRIPTION_STATUS = exports.PAYMENT_CHANNEL_2C2P = exports.OPTION_NAVIGATE_TO = exports.USER_TYPE = exports.PAYMENT_STATUS = exports.TASK_STATUS = exports.FROM_BACKEND_OPTION = exports.PAYMENT_METHOD = exports.DAY_OF_WEEK = exports.COMMISSION_DEFAULT = exports.sendNotificationLevel = void 0;
exports.ACTIVE_STATUS = exports.DELETE_STATUS = exports.SELECT_DURATION_OF_SERVICE = exports.SERVICE_NAME_OF_PRICING = exports.SELECT_SERVICE_TASKER_GROUPS_MANAGEMENT = exports.SERVICES_NAME = exports.ALLOWABLE_IMAGE_SIZE = exports.equal4StarsPrivateDriver = exports.upTo3StarsPrivateDriver = exports.EQUAL_5_STARS = exports.EQUAL_4_STARS = exports.UP_TO_3_STARS = exports.URL_LOGO_BTASKEE = exports.CHARACTER_SERIES = exports.TYPE_TASKER_TRAINING = exports.STATUS_TASKER_TRAINING_HISTORY = exports.CHARACTER_QUESTION = exports.STATUS_TASKER_TRAINING = exports.HOME_COOKING_3_STAR = void 0;
__exportStar(require("./permissions"), exports);
__exportStar(require("./domains"), exports);
exports.sendNotificationLevel = {
    district: "district",
    viewedTaskers: "viewed-taskers",
    topTaskerDistrict: "top-tasker",
    city: "city",
    favoriteTasker: "favorite-tasker",
};
exports.COMMISSION_DEFAULT = 0.2;
exports.DAY_OF_WEEK = 7;
exports.PAYMENT_METHOD = {
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
exports.FROM_BACKEND_OPTION = "BACKEND";
exports.TASK_STATUS = {
    CONFIRMED: "CONFIRMED",
    DONE: "DONE",
    POSTED: "POSTED",
    WAITING_ASKER_CONFIRMATION: "WAITING_ASKER_CONFIRMATION",
    CANCELED: "CANCELED",
    EXPIRED: "EXPIRED",
};
exports.PAYMENT_STATUS = {
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
exports.USER_TYPE = {
    ASKER: "ASKER",
    TASKER: "TASKER",
};
exports.OPTION_NAVIGATE_TO = {
    SUBSCRIPTION: "Subscription",
    TASK_DETAIL: "TaskDetail",
};
exports.PAYMENT_CHANNEL_2C2P = {
    PROMPT_PAY: "PPQR",
    CARD: "CC",
    TRUE_MONEY: "TRUEMONEY",
};
exports.SUBSCRIPTION_STATUS = {
    ACTIVE: "ACTIVE",
    NEW: "NEW",
    CANCELED: "CANCELED",
    DONE: "DONE",
    INACTIVE: "INACTIVE",
    EXPIRED: "EXPIRED",
};
exports.REFUND_REQUEST_STATUS = {
    NEW: "NEW",
    PAID: "PAID",
    ERROR: "ERROR",
    CANCELED: "CANCELED",
};
exports.OUTSTADING_PAYMENT_STATUS = {
    NEW: "NEW",
    RECHARGING: "RECHARGING",
    RECHARGE_FAILED: "RECHARGE_FAILED",
    CHARGED: "CHARGED",
};
exports.PAYOUT_STATUS = {
    WAIT: "WAIT",
    PAID: "PAID",
};
exports.KEY_CHANGE_TASK_HISTORY = {
    CHANGE_PAYMENT_METHOD: "CHANGE_PAYMENT_METHOD",
    CHANGE_TASK_TO_POSTED: "CHANGE_TASK_TO_POSTED",
};
exports.ACTION_TASKER_LOW_RATING = {
    SEND_WARNING_NOTIFICATION: "SEND_WARNING_NOTIFICATION",
    LOCK_TASKER: "LOCK_TASKER",
    SEND_TRAINING_NOTIFICATION: "SEND_TRAINING_NOTIFICATION",
    REACTIVE: "REACTIVE",
};
exports.CHECK_INPUT_TASKER = {
    TRAINING_INPUT: "TRAINING_INPUT",
    TRAINING_TASKER: "TRAINING_TASKER",
    GENERAL_TEST: "GENERAL_TEST",
    HANDLE_SITUATIONS: "HANDLE_SITUATIONS",
};
exports.SOURCE_NAME_FA_TRANSACTION = {
    DEPOSIT: "DEPOSIT",
    WITHDRAW: "WITHDRAW",
    SYSTEM: "SYSTEM",
};
exports.ERROR_TASKER_CONFLICT_WORKING_TIME = "Tasker conflict working time";
exports.LIST_TRANSACTION_PAYMENT_STATUS = [
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
exports.LIST_TRANSACTION_REFUND_STATUS = [
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
exports.LIST_TRANSACTION_PAYMENT = [
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
exports.USER_STATUS = {
    ACTIVE: "ACTIVE",
    DISABLED: "DISABLED",
    INACTIVE: "INACTIVE",
    IN_PROBATION: "IN_PROBATION",
    LOCKED: "LOCKED",
    UNVERIFIED: "UNVERIFIED",
    UNLOCKED: "UNLOCKED",
};
exports.LIST_USER_STATUS = [
    "ACTIVE",
    "DISABLED",
    "INACTIVE",
    "IN_PROBATION",
    "LOCKED",
    "UNVERIFIED",
];
exports.LIST_CONTENT_AFTER_UPDATE = [
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
exports.LIST_CONTENT_BEFORE_UPDATE = [
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
exports.LIST_SERVICE_TYPE = [
    "NORMAL",
    "PREMIUM",
    "TET_BOOKING",
    "SUBSCRIPTION_BOOKING",
    "SCHEDULE_BOOKING",
    "TIKI_MINI_APP",
    "VN_PAY_MINI_APP",
];
exports.SERVICE_TYPE = {
    NORMAL: "NORMAL",
    PREMIUM: "PREMIUM",
    TET_BOOKING: "TET_BOOKING",
    TIKI_MINI_APP: "TIKI_MINI_APP",
    VN_PAY_MINI_APP: "VN_PAY_MINI_APP",
    SUBSCRIPTION_BOOKING: "SUBSCRIPTION_BOOKING",
    SCHEDULE_BOOKING: "SCHEDULE_BOOKING",
};
exports.FROM_PARTNER = {
    TIKI_MINI_APP: "TIKI_MINI_APP",
    VN_PAY_MINI_APP: "VN_PAY_MINI_APP",
};
exports.REASON_CANCEL = [
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
exports.TEAM_EMPLOYEES = [
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
exports.TASKER_VIOLATE_REASON = [
    "VIOLATE_REASON_TASK_CANCEL",
    "VIOLATE_REASON_QUALITY_ISSUE",
    "VIOLATE_REASON_WORKING_OUTSIDE",
    "OTHER",
];
exports.LIST_PRICE_IN_COST_DETAIL = ["baseCost", "cost", "finalCost"];
exports.PROMOTION_USING_TYPE_OF_DUEDATE = {
    NUMBER_OF_DAY_DUE_DATE: "Number of day due date",
    EXPIRED_DATE: "Expired date",
};
exports.PROMOTION_STATUS = {
    ACTIVE: "ACTIVE",
    TESTING: "TESTING",
    INACTIVE: "INACTIVE",
};
exports.PROMOTION_USING_FROM = {
    SYSTEM: "SYSTEM",
    SYSTEM_WITH_PARTNER: "SYSTEM_WITH_PARTNER",
};
exports.PROMOTION_CODE_TYPE = {
    CODE_LIST: "Code list",
    CODE_FROM_PARTNER: "Code from partner",
    GIFT_INFO: "Gift Information",
};
exports.PROMOTION_USING_TYPE = {
    MONEY: "MONEY",
    PERCENT: "PERCENTAGE",
};
exports.CAMPAIGN_STATUS = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    TESTING: "TESTING",
};
exports.CATEGORIES_STATUS = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
};
exports.TYPE_BREWARDS = {
    LIST_BREWARDS: "List bRewards",
    CATEGORIES: "List category",
};
exports.CAMPAIGN_TYPE = {
    PROMOTION: "PROMOTION",
    INFO: "INFO",
};
exports.CAMPAIGN_TYPE_USERS = {
    NEW: "NEW",
    OLD: "OLD",
    BOTH: "BOTH",
};
/* ----------------- Text feedback matches the rating ---------------- */
exports.ARR_QUESTION_3_STAR = [
    { text: "BAD_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
    { text: "BAD_ON_TIME", value: "ON_TIME" },
    { text: "BAD_ATTITUDE", value: "ATTITUDE" },
    { text: "BAD_NOT_COMING", value: "NOT_COMING" },
    { text: "BAD_CARE", value: "CARE" },
    { text: "BAD_CLEAN", value: "CLEAN" },
    { text: "BAD_NOT_UNIFORMS", value: "NOT_UNIFORMS" },
    { text: "OTHER", value: "OTHER" },
];
exports.ARR_QUESTION_4_STAR = [
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
exports.ARR_QUESTION_3_STAR_CLEANING_TOOL = [
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
exports.ARR_QUESTION_4_STAR_CLEANING_TOOL = [
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
exports.ARR_QUESTION_5_STAR = [
    { text: "ON_TIME", value: "ON_TIME" },
    { text: "FRIENDLY", value: "FRIENDLY" },
    { text: "CLEAN", value: "CLEAN" },
    { text: "CHEERFUL", value: "CHEERFUL" },
];
/* ---------------------------- FOR HOME COOKING ---------------------------- */
exports.HOME_COOKING_5_STAR = [
    { text: "DELICIOUS", value: "DELICIOUS" }, // Nấu ăn ngon
    { text: "KITCHEN_HYGIENE", value: "KITCHEN_HYGIENE" }, // Đảm bảo vệ sinh trong lúc nấu ăn
    { text: "QUICK_ACTION", value: "QUICK_ACTION" }, // Thao tác nhanh
    { text: "HONEST", value: "HONEST" }, // Trung thực
    { text: "ENTHUSIASM", value: "ENTHUSIASM" }, // Hăng hái
    { text: "NICE_FOOD", value: "NICE_FOOD" }, // Trình bày món ăn bắt mắt
];
exports.HOME_COOKING_4_STAR = [
    { text: "NORMAL_FOOD", value: "NORMAL_FOOD" }, // Nấu ăn tạm được
    {
        text: "IMPROVE_ABILITY_TO_PRESENT_FOOD",
        value: "IMPROVE_ABILITY_TO_PRESENT_FOOD",
    }, // Cần trình bày món ăn bắt mắt
    { text: "BAD_KITCHEN_HYGIENE", value: "BAD_KITCHEN_HYGIENE" }, // Đảm bảo vệ sinh trong lúc nấu ăn
];
exports.HOME_COOKING_3_STAR = [
    { text: "BAD_FOOD", value: "BAD_FOOD" }, // Nấu ăn không ngon
    { text: "BAD_KITCHEN_HYGIENE", value: "BAD_KITCHEN_HYGIENE" }, // Không đảm bảo vệ sinh trong lúc nấu
    { text: "BAD_HONEST", value: "BAD_HONEST" }, // Thiếu trung thực
];
/* ---------------------------------------------------------------------- */
/* ---------------------------- TASKER TRAINING ---------------------------- */
exports.STATUS_TASKER_TRAINING = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
};
exports.CHARACTER_QUESTION = [
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
exports.STATUS_TASKER_TRAINING_HISTORY = {
    PASSED: "PASSED",
    FAILED: "FAILED",
};
exports.TYPE_TASKER_TRAINING = {
    TRAINING_INPUT: "TRAINING_INPUT",
    TRAINING_QUALITY: "TRAINING_QUALITY",
    TRAINING_REGULATIONS: "TRAINING_REGULATIONS",
    TRAINING_BASIC: "TRAINING_BASIC",
    TRAINING_ADVANCED: "TRAINING_ADVANCED",
};
/* ---------------------------------------------------------------------- */
exports.CHARACTER_SERIES = [
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
exports.URL_LOGO_BTASKEE = "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/LG99yorZLWWapC8Az";
exports.UP_TO_3_STARS = [
    { text: "BAD_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
    { text: "BAD_ENVIRONMENT", value: "ENVIRONMENT" },
    { text: "BAD_OVERLOAD", value: "OVERLOAD" },
    { text: "BAD_CONTACT", value: "CONTACT" },
    { text: "BAD_FRIENDLY", value: "FRIENDLY" },
    { text: "OTHER", value: "OTHER" },
];
exports.EQUAL_4_STARS = [
    { text: "IMPROVE_WORKING_OUTSIDE", value: "WORKING_OUTSIDE" },
    { text: "IMPROVE_ENVIRONMENT", value: "ENVIRONMENT" },
    { text: "IMPROVE_OVERLOAD", value: "OVERLOAD" },
    { text: "IMPROVE_CONTACT", value: "CONTACT" },
    { text: "IMPROVE_FRIENDLY", value: "FRIENDLY" },
    { text: "OTHER", value: "OTHER" },
];
exports.EQUAL_5_STARS = [
    { text: "FRIENDLY", value: "FRIENDLY" },
    { text: "POLITE", value: "POLITE" },
    { text: "CHEERFUL", value: "CHEERFUL" },
    { text: "SUPPORT", value: "SUPPORT" },
];
// These for Private Driver service
exports.upTo3StarsPrivateDriver = [
    { text: "BAD_CONTACT", value: "CONTACT" },
    { text: "BAD_FRIENDLY", value: "FRIENDLY" },
    { text: "OTHER", value: "OTHER" },
];
exports.equal4StarsPrivateDriver = [
    { text: "IMPROVE_CONTACT", value: "CONTACT" },
    { text: "IMPROVE_FRIENDLY", value: "FRIENDLY" },
    { text: "OTHER", value: "OTHER" },
];
exports.ALLOWABLE_IMAGE_SIZE = 64; // Image size allow 64Kb;
exports.SERVICES_NAME = {
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
var CLEANING = exports.SERVICES_NAME.CLEANING, CLEANING_SUBSCRIPTION = exports.SERVICES_NAME.CLEANING_SUBSCRIPTION, ELDERLY_CARE = exports.SERVICES_NAME.ELDERLY_CARE, ELDERLY_CARE_SUBSCRIPTION = exports.SERVICES_NAME.ELDERLY_CARE_SUBSCRIPTION, PATIENT_CARE = exports.SERVICES_NAME.PATIENT_CARE, PATIENT_CARE_SUBSCRIPTION = exports.SERVICES_NAME.PATIENT_CARE_SUBSCRIPTION, CHILD_CARE = exports.SERVICES_NAME.CHILD_CARE, CHILD_CARE_SUBSCRIPTION = exports.SERVICES_NAME.CHILD_CARE_SUBSCRIPTION, DEEP_CLEANING = exports.SERVICES_NAME.DEEP_CLEANING, HOME_COOKING = exports.SERVICES_NAME.HOME_COOKING, HOUSE_KEEPING = exports.SERVICES_NAME.HOUSE_KEEPING, GO_MARKET = exports.SERVICES_NAME.GO_MARKET, LAUNDRY = exports.SERVICES_NAME.LAUNDRY, AIR_CONDITIONER_SERVICE = exports.SERVICES_NAME.AIR_CONDITIONER_SERVICE, SofaCleaning = exports.SERVICES_NAME.SofaCleaning, DISINFECTION_SERVICE = exports.SERVICES_NAME.DISINFECTION_SERVICE;
exports.SELECT_SERVICE_TASKER_GROUPS_MANAGEMENT = [
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
exports.SERVICE_NAME_OF_PRICING = {
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
exports.SELECT_DURATION_OF_SERVICE = [
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
exports.DELETE_STATUS = "INACTIVE";
exports.ACTIVE_STATUS = "ACTIVE";
