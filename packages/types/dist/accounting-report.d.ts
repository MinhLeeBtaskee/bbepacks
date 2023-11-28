export declare enum E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT {
    COMPENSATE_TASKER = "COMPENSATE_TASKER",
    NEW_TASKER_TRIAL = "NEW_TASKER_TRIAL",
    TASK = "TASK",
    RATING_TIP = "RATING_TIP",
    TOP_UP_CREDIT_PROMPT_PAY = "TOP_UP_CREDIT_PROMPT_PAY",// * [Top up] - Via payment gateway - Only Thailand
    SUPPORT_TASKER = "SUPPORT_TASKER"
}
export declare enum E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT {
    WITHDRAW = "WITHDRAW",
    RATING_TIP = "RATING_TIP"
}
export declare enum E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT {
    WEEKLY_PAYOUT = "WEEKLY_PAYOUT"
}
export declare enum E_TRANSACTION_ACCOUNT_TYPE {
    PROMOTION = "P",
    MAIN = "M"
}
export declare enum E_TRANSACTION_TYPE {
    DEBIT = "D",// +
    CREDIT = "C",// -
    WITHDRAW = "W"
}
export interface ITransaction {
    _id: string;
    userId: string;
    type: `${E_TRANSACTION_TYPE}`;
    accountType: `${E_TRANSACTION_ACCOUNT_TYPE}`;
    date: Date;
    amount: number;
    source: {
        name: string;
        value?: string;
        taskId?: string;
        reason?: string;
        cashierId?: string;
        cashierName?: string;
        depositDate?: Date;
        reference?: string;
        subscriptionCode?: string;
        transferType?: string;
        rewardId?: string;
    };
}
export declare enum E_PAYMENT_METHOD {
    SHOPEE_PAY = "SHOPEE_PAY",
    ZALO_PAY = "ZALO_PAY",
    MOMO = "MOMO",
    CARD = "CARD",
    VN_PAY = "VN_PAY",
    TRUE_MONEY = "TRUE_MONEY",
    PROMPT_PAY = "PROMPT_PAY"
}
export declare enum E_VN_ASKER_PAYMENT_METHOD {
    SHOPEE_PAY = "SHOPEE_PAY",
    ZALO_PAY = "ZALO_PAY",
    MOMO = "MOMO",
    CARD = "CARD",
    VN_PAY = "VN_PAY"
}
export declare enum E_TH_ASKER_PAYMENT_METHOD {
    SHOPEE_PAY = "SHOPEE_PAY",
    CARD = "CARD",
    TRUE_MONEY = "TRUE_MONEY",
    PROMPT_PAY = "PROMPT_PAY"
}
export declare enum E_REFUND_STATUS {
    REFUNDED = "REFUNDED",
    ERROR = "ERROR"
}
export declare enum E_TRANSACTION_CHANNEL {
    B_PAY = "B_PAY",
    CASH = "CASH",
    TRANSFER = "TRANSFER",
    PAYMENT_GATEWAYS = "PAYMENT_GATEWAYS"
}
export declare enum E_ASKER_INCOME_ACTIVITY {
    TOP_UP = "TOP_UP",
    REFUND = "REFUND",
    COMPENSATION = "COMPENSATION"
}
export declare enum E_ASKER_INCOME_CHANNEL_TOP_UP {
    PAYMENT_GATEWAYS = "PAYMENT_GATEWAYS",
    TRANSFER = "TRANSFER",
    B_PAY = "B_PAY"
}
export declare enum E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY {
    DEPOSIT = "DEPOSIT"
}
export declare enum E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER {
    TOP_UP_CREDIT_BANK_TRANSFER = "TOP_UP_CREDIT_BANK_TRANSFER"
}
export declare enum E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN {
    TOP_UP_CREDIT_SHOPEE_PAY = "TOP_UP_CREDIT_SHOPEE_PAY",
    TOP_UP_CREDIT_MOMO = "TOP_UP_CREDIT_MOMO",
    TOP_UP_CREDIT_VN_PAY = "TOP_UP_CREDIT_VN_PAY",
    TOP_UP_CREDIT_ZALO_PAY = "TOP_UP_CREDIT_ZALO_PAY",
    TOP_UP_CREDIT_CARD = "TOP_UP_CREDIT_CARD"
}
export declare enum E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH {
    TOP_UP_CREDIT_SHOPEE_PAY = "TOP_UP_CREDIT_SHOPEE_PAY",
    TOP_UP_CREDIT_CARD = "TOP_UP_CREDIT_CARD",
    TOP_UP_CREDIT_TRUE_MONEY = "TOP_UP_CREDIT_TRUE_MONEY",
    TOP_UP_CREDIT_PROMPT_PAY = "TOP_UP_CREDIT_PROMPT_PAY"
}
export declare enum E_ASKER_INCOME_CHANNEL_REFUND {
    B_PAY = "B_PAY",
    PAYMENT_GATEWAYS = "PAYMENT_GATEWAYS"
}
export declare enum E_ASKER_INCOME_CHANNEL_REFUND_BPAY {
    REFUND_CANCEL_TASK_SHOPEE_PAY = "REFUND_CANCEL_TASK_SHOPEE_PAY",
    REFUND_CANCEL_TASK_MOMO = "REFUND_CANCEL_TASK_MOMO",
    REFUND_CANCEL_TASK_VN_PAY = "REFUND_CANCEL_TASK_VN_PAY",
    REFUND_CANCEL_TASK_ZALO_PAY = "REFUND_CANCEL_TASK_ZALO_PAY",
    SYSTEM_REFUND = "SYSTEM_REFUND",
    REFUND_RATING_NOT_COMING = "REFUND_RATING_NOT_COMING",
    REFUND_CANCEL_TASK = "REFUND_CANCEL_TASK",
    CANCEL_TASK = "CANCEL TASK",
    CHANGE_SCHEDULE = "CHANGE_SCHEDULE"
}
export declare enum E_ASKER_INCOME_CHANNEL_COMPENSATION {
    B_PAY = "B_PAY"
}
export declare enum E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY {
    SUPPORT_ASKER = "SUPPORT_ASKER",
    COMPENSATION_ASKER_NO_RELATIVE_TASK = "COMPENSATION_ASKER_NO_RELATIVE_TASK"
}
export declare enum E_ASKER_EXPENSE_ACTIVITY {
    SERVICE_PAYMENT = "SERVICE_PAYMENT",
    WITHDRAW = "WITHDRAW",
    PENALTY = "PENALTY",
    TIP = "TIP"
}
export declare enum E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT {
    B_PAY = "B_PAY",
    PAYMENT_GATEWAYS = "PAYMENT_GATEWAYS",
    CASH = "CASH"
}
export declare enum E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY {
    PAY_SUBSCRIPTION = "PAY_SUBSCRIPTION",
    COMBO_VOUCHER = "COMBO_VOUCHER",
    TASK = "TASK",
    PAY_OUTSTADING_PAYMENT = "PAY_OUTSTADING_PAYMENT"
}
export declare enum E_ASKER_EXPENSE_CHANNEL_PENALTY {
    B_PAY = "B_PAY"
}
export declare enum E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY {
    CANCEL_TASK = "CANCEL TASK",
    FINE_ASKER_NO_RELATIVE_TASK = "FINE_ASKER_NO_RELATIVE_TASK",
    FINE_ASKER = "FINE_ASKER"
}
export declare enum E_ASKER_EXPENSE_CHANNEL_TIP {
    B_PAY = "B_PAY"
}
export declare enum E_ASKER_EXPENSE_CHANNEL_WITHDRAW {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_INCOME_ACTIVITY {
    SERVICE_PAYMENT = "SERVICE_PAYMENT",
    BONUS = "BONUS",
    COMPENSATE = "COMPENSATE",
    TIP = "TIP",
    TOP_UP = "TOP_UP",
    SUPPORT = "SUPPORT",
    NEW_TASKER_TRIAL = "NEW_TASKER_TRIAL"
}
export declare enum E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT {
    B_PAY = "B_PAY",
    CASH = "CASH"
}
export declare enum E_TASKER_INCOME_CHANNEL_BONUS {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_INCOME_CHANNEL_COMPENSATE {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_INCOME_CHANNEL_SUPPORT {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_INCOME_CHANNEL_TIP {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_INCOME_CHANNEL_TOP_UP {
    PAYMENT_GATEWAYS = "PAYMENT_GATEWAYS"
}
export declare enum E_TASKER_INCOME_CHANNEL_BONUS_BPAY {
    TASKER_MONTHLY_REWARD = "TASKER MONTHLY REWARD",
    REFERRAL = "REFERRAL",
    SYSTEM_REWARD = "SYSTEM_REWARD",
    REFERRAL_INVITED_TASKER_DONE_20_TASKS_IN_30_DAYS = "REFERRAL_INVITED_TASKER_DONE_20_TASKS_IN_30_DAYS"
}
export declare enum E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY {
    CARD_TASK = "CARD_TASK",
    TASK = "TASK",
    ROLLBACK_TRANSACTION = "ROLLBACK_TRANSACTION",
    REVERT_WEEKLY_PAYOUT = "REVERT_WEEKLY_PAYOUT"
}
export declare enum E_TASKER_EXPENSE_ACTIVITY {
    WITHDRAW = "WITHDRAW",
    PENALTY = "PENALTY"
}
export declare enum E_TASKER_EXPENSE_CHANNEL_WITHDRAW {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_EXPENSE_CHANNEL_PENALTY {
    B_PAY = "B_PAY"
}
export declare enum E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY {
    NOT_COMING = "NOT_COMMING",
    CANCEL_TASK = "CANCEL TASK",
    FINE_TASKER = "FINE_TASKER",
    FINE_TASKER_NO_RELATIVE_TASK = "FINE_TASKER_NO_RELATIVE_TASK",
    PENALTY = "PENALTY"
}
