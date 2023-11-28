import { TLanguage, IFilterTemplate } from "@bbepacks/types";
export declare const globalConstant: {
    TASKER_NOT_COME: string;
    TASKER_NOT_COME_WITH_ANNOUCEMENT: string;
    ASKER_BUSY: string;
    POSTED_WRONG_DATE: string;
    ASKER_DONT_NEED_ANYMORE: string;
    NO_TASKER_ACCEPT: string;
    NEARBY_TASK_PLACE: string;
    WRONG_DATE: string;
    SO_FAR_AWAY: string;
    OTHER_REASON: string;
    CAN_NOT_CONTACT_TO_ASKER: string;
    OTHER: string;
};
export declare const accountingPermissions: string[];
export declare const PLUGINS: {
    afterDraw: (chart: any) => void;
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
export declare const CHECKINPUT_TYPE_OF_TASKER: {
    TASKER_PASS: string;
};
export declare const SOURCE_NAME_FA_TRANSACTION: {
    DEPOSIT: string;
    WITHDRAW: string;
    SYSTEM: string;
};
export declare const ACCOUNT_TYPE: {
    label: string;
    value: string;
}[];
export declare const PAYMENT_METHOD: {
    label: string;
    value: string;
}[];
export declare const PAYMENT_REASON: string[];
export declare const WITHDRAW_REASON: string[];
export declare const QUIZZES_TYPE: {
    QUIZ: string;
    VIDEO: string;
};
export declare const ITEMS_LANGUAGE: Array<{
    label: string;
    value: TLanguage;
}>;
export declare const EMPTY_LENGHT = 0;
export declare const MIN_VALUE_VALIDATOR_LENGTH = 3;
export declare const TASK_STATUS: {
    CONFIRMED: string;
    DONE: string;
    POSTED: string;
    WAITING_ASKER_CONFIRMATION: string;
    CANCELED: string;
    EXPIRED: string;
};
export declare const COMMISSION_DEFAULT = 0.2;
export declare const DAILY_INCOME_DEFAULT_TIME = 17;
export declare const TYPE_BREWARDS: {
    LIST_BREWARDS: string;
    CATEGORIES: string;
    FLASH_SALE: string;
    REFERRAL_CAMPAIGN: string;
};
export declare const CATEGORIES_STATUS: {
    ACTIVE: string;
    INACTIVE: string;
};
export declare const ALLOWABLE_IMAGE_SIZE = 64;
export declare const COUNTRY: {
    value: string;
    text: string;
    url: string;
}[];
export declare const PROMOTION_STATUS: {
    ACTIVE: string;
    INACTIVE: string;
};
export declare const ASKER_RANK: {
    ASKER_RANK_NAME_MEMBER: number;
    ASKER_RANK_NAME_SILVER: number;
    ASKER_RANK_NAME_GOLD: number;
    ASKER_RANK_NAME_PLATINUM: number;
};
export declare const PROMOTION_STATUS_ARRAY: string[];
export declare const PROMOTION_USING_FROM: {
    SYSTEM: string;
    SYSTEM_WITH_PARTNER: string;
};
export declare const PROMOTION_USING_TYPE: {
    MONEY: string;
    PERCENT: string;
};
export declare const URL_LOGO_BTASKEE = "https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/LG99yorZLWWapC8Az";
export declare const PROMOTION_CODE_TYPE: {
    CODE_LIST: string;
    CODE_FROM_PARTNER: string;
    GIFT_INFO: string;
};
export declare const PROMOTION_USING_TYPE_OF_DUE_DATE: {
    NUMBER_OF_DAY_DUE_DATE: string;
    EXPIRED_DATE: string;
};
export declare const IMAGE_FALLBACK = "data:image/png;base64,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";
export declare const TEMPLATE_LANGUAGES: {
    value: string;
    label: string;
}[];
export declare const TEMPLATE_TEAMS_MAP: {
    "customer-service": string;
    tasker: string;
    marketing: string;
};
export type TYPE_TEMPLATE_TEAMS_MAP = (keyof typeof TEMPLATE_TEAMS_MAP)[];
export declare const TEMPLATE_FILTER_DEFAULT: IFilterTemplate;
export declare const NOTIFICATION_FILTER_TYPES: {
    label: string;
    value: string;
}[];
export declare const LIST_USER_STATUS: string[];
export declare const TEXT_VIETNAMESE: RegExp;
export declare const PHONE_FORMAT: RegExp;
export declare const MIN_SEARCH_LENGTH = 2;
export declare const FILE_TYPE_CSV = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
export declare const LEVEL_STARTER = "LV1";
export declare const BREWARD = "BREWARD";
export declare const TRAINING = "TRAINING";
export declare const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export declare const LANGUAGES: string[];
export declare const COLORS: {
    BLUE: string;
};
export declare const INCENTIVE_PARTNER_WOGI = "WOGI";
export declare const MIN_LENGTH_PREFIX = 3;
export declare const MAX_LENGTH_PREFIX = 5;
export declare const REMOVE_TASKER = "REMOVE_TASKER";
export declare const TYPE_REQUIRE_OFFICE_CLEANING: {
    CLEANING_GLASSES: number;
    VACUUMING_OFFICE_CARPETS: number;
};
export declare const NOTIFICATION_FROM_BE_TYPE = 37;
export declare const NOTIFICATION_CHARACTER_LIMIT = 50;
export declare const INCENTIVES_QUANTITY_CONSTRAINTS: {
    MIN: number;
    MAX: number;
};
export declare const SERVICE_TEXT_SUBSCRIPTION: {
    CHILD_CARE: string;
    PATIENT_CARE: string;
    ELDERLY_CARE: string;
};
export declare const PAYMENT_CARD_STATUS: {
    ACTIVE: string;
    DISABLED: string;
    EXPIRED: string;
};
export declare const STATUS_TRAINING: {
    PASS: string;
    FAILED: string;
    WATCHED_VIDEOS: string;
};
export declare const LIST_TRANSACTION_PAYMENT: {
    name: string;
    value: string;
    country: string[];
}[];
export declare const ACCOUNTING_INCOME_ASKER_CASES: {
    activity: string;
    channel: string[];
}[];
export declare const ACCOUNTING_INCOME_TASKER_CASES: {
    activity: string;
    channel: string[];
}[];
/**
 * The status of Tasker during the registration process
 * INPUT_OTP: status is INACTIVE
 * SELECT_PLACES_AND_SERVICES: status is UNVERIFIED and Tasker does not have workingPlaces
 * TRAINING: status is UNVERIFIED, Tasker has workingPlaces, checkInput is not TASKER_PASS
 * SEND_PROFILE: checkInput is TASKER_PASS and Tasker does not have profile in taskerProfile table
 */
export declare const TASKER_NEEDS_SUPPORT_REGISTRATION: {
    INPUT_OTP: string;
    SELECT_PLACES_AND_SERVICES: string;
};
export declare const REJECT_HOUSEHOLD_REASON: any;
export declare const FINE_REASONS_LANGUAGE: {
    TASKER_LOW_QUALITY: {
        vi: string;
        en: string;
        ko: string;
        th: string;
        id: string;
    };
    TASKER_BAD_ATTITUDE: {
        vi: string;
        en: string;
        ko: string;
        th: string;
        id: string;
    };
    TASKER_NOT_ENOUGH_TIME: {
        vi: string;
        en: string;
        ko: string;
        th: string;
        id: string;
    };
    ASKER_CANCEL_TASK: {
        vi: string;
        en: string;
        ko: string;
        th: string;
        id: string;
    };
    ASKER_REFUSE_PAY: {
        vi: string;
        en: string;
        ko: string;
        th: string;
        id: string;
    };
    ASKER_NOT_PAID_ENOUGH: {
        vi: string;
        en: string;
        ko: string;
        th: string;
        id: string;
    };
};
export declare const TASKER_REGISTER_SERVICES: {
    CLEANING: string;
    COOKING: string;
    HOSTEL: string;
    AIR_CONDITIONAL: string;
    LAUNDRY: string;
};
export declare const DEFAULT_TASKER_RATING = 5;
