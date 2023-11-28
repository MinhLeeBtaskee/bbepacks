export * from "./permissions";
export * from "./domains";
export declare const sendNotificationLevel: {
    district: string;
    viewedTaskers: string;
    topTaskerDistrict: string;
    city: string;
    favoriteTasker: string;
};
export declare const COMMISSION_DEFAULT = 0.2;
export declare const DAY_OF_WEEK = 7;
export declare const PAYMENT_METHOD: {
    CASH: string;
    CREDIT: string;
    CARD: string;
    MOMO: string;
    ZALO_PAY: string;
    SHOPEE_PAY: string;
    TRUE_MONEY: string;
    PROMPT_PAY: string;
    BANK_TRANSFER: string;
    VN_PAY: string;
    TIKI: string;
    GO_PAY: string;
    QRIS: string;
    DANA: string;
};
export declare const FROM_BACKEND_OPTION = "BACKEND";
export declare const TASK_STATUS: {
    CONFIRMED: string;
    DONE: string;
    POSTED: string;
    WAITING_ASKER_CONFIRMATION: string;
    CANCELED: string;
    EXPIRED: string;
};
export declare const PAYMENT_STATUS: {
    PAID: string;
    NEW: string;
    ERROR: string;
    SENDING: string;
    CHARGING: string;
    RESPONSED: string;
    AUTHORISED: string;
    CANCELED: string;
    FAILED: string;
};
export declare const USER_TYPE: {
    ASKER: string;
    TASKER: string;
};
export declare const OPTION_NAVIGATE_TO: {
    SUBSCRIPTION: string;
    TASK_DETAIL: string;
};
export declare const PAYMENT_CHANNEL_2C2P: {
    PROMPT_PAY: string;
    CARD: string;
    TRUE_MONEY: string;
};
export declare const SUBSCRIPTION_STATUS: {
    ACTIVE: string;
    NEW: string;
    CANCELED: string;
    DONE: string;
    INACTIVE: string;
    EXPIRED: string;
};
export declare const REFUND_REQUEST_STATUS: {
    NEW: string;
    PAID: string;
    ERROR: string;
    CANCELED: string;
};
export declare const OUTSTADING_PAYMENT_STATUS: {
    NEW: string;
    RECHARGING: string;
    RECHARGE_FAILED: string;
    CHARGED: string;
};
export declare const PAYOUT_STATUS: {
    WAIT: string;
    PAID: string;
};
export declare const KEY_CHANGE_TASK_HISTORY: {
    CHANGE_PAYMENT_METHOD: string;
    CHANGE_TASK_TO_POSTED: string;
};
export declare const ACTION_TASKER_LOW_RATING: {
    SEND_WARNING_NOTIFICATION: string;
    LOCK_TASKER: string;
    SEND_TRAINING_NOTIFICATION: string;
    REACTIVE: string;
};
export declare const CHECK_INPUT_TASKER: {
    TRAINING_INPUT: string;
    TRAINING_TASKER: string;
    GENERAL_TEST: string;
    HANDLE_SITUATIONS: string;
};
export declare const SOURCE_NAME_FA_TRANSACTION: {
    DEPOSIT: string;
    WITHDRAW: string;
    SYSTEM: string;
};
export declare const ERROR_TASKER_CONFLICT_WORKING_TIME = "Tasker conflict working time";
export declare const LIST_TRANSACTION_PAYMENT_STATUS: {
    name: string;
    value: string;
}[];
export declare const LIST_TRANSACTION_REFUND_STATUS: {
    name: string;
    value: string;
}[];
export declare const LIST_TRANSACTION_PAYMENT: {
    name: string;
    value: string;
    country: string[];
}[];
export declare const USER_STATUS: {
    ACTIVE: string;
    DISABLED: string;
    INACTIVE: string;
    IN_PROBATION: string;
    LOCKED: string;
    UNVERIFIED: string;
    UNLOCKED: string;
};
export declare const LIST_USER_STATUS: string[];
export declare const LIST_CONTENT_AFTER_UPDATE: string[];
export declare const LIST_CONTENT_BEFORE_UPDATE: string[];
export declare const LIST_SERVICE_TYPE: string[];
export declare const SERVICE_TYPE: {
    NORMAL: string;
    PREMIUM: string;
    TET_BOOKING: string;
    TIKI_MINI_APP: string;
    VN_PAY_MINI_APP: string;
    SUBSCRIPTION_BOOKING: string;
    SCHEDULE_BOOKING: string;
};
export declare const FROM_PARTNER: {
    TIKI_MINI_APP: string;
    VN_PAY_MINI_APP: string;
};
export declare const REASON_CANCEL: string[];
export declare const TEAM_EMPLOYEES: string[];
export declare const TASKER_VIOLATE_REASON: string[];
export declare const LIST_PRICE_IN_COST_DETAIL: string[];
export declare const PROMOTION_USING_TYPE_OF_DUEDATE: {
    NUMBER_OF_DAY_DUE_DATE: string;
    EXPIRED_DATE: string;
};
export declare const PROMOTION_STATUS: {
    ACTIVE: string;
    TESTING: string;
    INACTIVE: string;
};
export declare const PROMOTION_USING_FROM: {
    SYSTEM: string;
    SYSTEM_WITH_PARTNER: string;
};
export declare const PROMOTION_CODE_TYPE: {
    CODE_LIST: string;
    CODE_FROM_PARTNER: string;
    GIFT_INFO: string;
};
export declare const PROMOTION_USING_TYPE: {
    MONEY: string;
    PERCENT: string;
};
export declare const CAMPAIGN_STATUS: {
    ACTIVE: string;
    INACTIVE: string;
    TESTING: string;
};
export declare const CATEGORIES_STATUS: {
    ACTIVE: string;
    INACTIVE: string;
};
export declare const TYPE_BREWARDS: {
    LIST_BREWARDS: string;
    CATEGORIES: string;
};
export declare const CAMPAIGN_TYPE: {
    PROMOTION: string;
    INFO: string;
};
export declare const CAMPAIGN_TYPE_USERS: {
    NEW: string;
    OLD: string;
    BOTH: string;
};
export declare const ARR_QUESTION_3_STAR: {
    text: string;
    value: string;
}[];
export declare const ARR_QUESTION_4_STAR: {
    text: string;
    value: string;
}[];
export declare const ARR_QUESTION_3_STAR_CLEANING_TOOL: {
    text: string;
    value: string;
}[];
export declare const ARR_QUESTION_4_STAR_CLEANING_TOOL: {
    text: string;
    value: string;
}[];
export declare const ARR_QUESTION_5_STAR: {
    text: string;
    value: string;
}[];
export declare const HOME_COOKING_5_STAR: {
    text: string;
    value: string;
}[];
export declare const HOME_COOKING_4_STAR: {
    text: string;
    value: string;
}[];
export declare const HOME_COOKING_3_STAR: {
    text: string;
    value: string;
}[];
export declare const STATUS_TASKER_TRAINING: {
    ACTIVE: string;
    INACTIVE: string;
};
export declare const CHARACTER_QUESTION: string[];
export declare const STATUS_TASKER_TRAINING_HISTORY: {
    PASSED: string;
    FAILED: string;
};
export declare const TYPE_TASKER_TRAINING: {
    TRAINING_INPUT: string;
    TRAINING_QUALITY: string;
    TRAINING_REGULATIONS: string;
    TRAINING_BASIC: string;
    TRAINING_ADVANCED: string;
};
export declare const CHARACTER_SERIES: string[];
export declare const URL_LOGO_BTASKEE = "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/LG99yorZLWWapC8Az";
export declare const UP_TO_3_STARS: {
    text: string;
    value: string;
}[];
export declare const EQUAL_4_STARS: {
    text: string;
    value: string;
}[];
export declare const EQUAL_5_STARS: {
    text: string;
    value: string;
}[];
export declare const upTo3StarsPrivateDriver: {
    text: string;
    value: string;
}[];
export declare const equal4StarsPrivateDriver: {
    text: string;
    value: string;
}[];
export declare const ALLOWABLE_IMAGE_SIZE = 64;
export declare const SERVICES_NAME: {
    AIR_CONDITIONER_SERVICE: string;
    CLEANING: string;
    LAUNDRY: string;
    DEEP_CLEANING: string;
    HOME_COOKING: string;
    HOUSE_KEEPING: string;
    GO_MARKET: string;
    SofaCleaning: string;
    CLEANING_SUBSCRIPTION: string;
    ELDERLY_CARE: string;
    PATIENT_CARE: string;
    CHILD_CARE: string;
    ELDERLY_CARE_SUBSCRIPTION: string;
    PATIENT_CARE_SUBSCRIPTION: string;
    CHILD_CARE_SUBSCRIPTION: string;
    DISINFECTION_SERVICE: string;
    CAR_ADVERTISING: string;
    OFFICE_CLEANING: string;
};
export declare const SELECT_SERVICE_TASKER_GROUPS_MANAGEMENT: {
    serviceText: string;
    serviceName: string[];
}[];
export declare const SERVICE_NAME_OF_PRICING: {
    AIR_CONDITIONER_SERVICE: string;
    CLEANING: string;
    CLEANING_SUBSCRIPTION: string;
    DEEP_CLEANING: string;
    HOME_COOKING: string;
    HOUSE_KEEPING: string;
    LAUNDRY: string;
    GO_MARKET: string;
    SofaCleaning: string;
    DISINFECTION_SERVICE: string;
    PATIENT_CARE: string;
    ELDERLY_CARE: string;
    CHILD_CARE: string;
    OFFICE_CLEANING: string;
    WASHING_MACHINE: string;
};
export declare const SELECT_DURATION_OF_SERVICE: {
    duration: number[];
    serviceName: string[];
}[];
export declare const DELETE_STATUS = "INACTIVE";
export declare const ACTIVE_STATUS = "ACTIVE";
