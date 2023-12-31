"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY = exports.E_TASKER_EXPENSE_CHANNEL_PENALTY = exports.E_TASKER_EXPENSE_CHANNEL_WITHDRAW = exports.E_TASKER_EXPENSE_ACTIVITY = exports.E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY = exports.E_TASKER_INCOME_CHANNEL_BONUS_BPAY = exports.E_TASKER_INCOME_CHANNEL_TOP_UP = exports.E_TASKER_INCOME_CHANNEL_TIP = exports.E_TASKER_INCOME_CHANNEL_SUPPORT = exports.E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL = exports.E_TASKER_INCOME_CHANNEL_COMPENSATE = exports.E_TASKER_INCOME_CHANNEL_BONUS = exports.E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT = exports.E_TASKER_INCOME_ACTIVITY = exports.E_ASKER_EXPENSE_CHANNEL_WITHDRAW = exports.E_ASKER_EXPENSE_CHANNEL_TIP = exports.E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY = exports.E_ASKER_EXPENSE_CHANNEL_PENALTY = exports.E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY = exports.E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT = exports.E_ASKER_EXPENSE_ACTIVITY = exports.E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY = exports.E_ASKER_INCOME_CHANNEL_COMPENSATION = exports.E_ASKER_INCOME_CHANNEL_REFUND_BPAY = exports.E_ASKER_INCOME_CHANNEL_REFUND = exports.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH = exports.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN = exports.E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER = exports.E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY = exports.E_ASKER_INCOME_CHANNEL_TOP_UP = exports.E_ASKER_INCOME_ACTIVITY = exports.E_TRANSACTION_CHANNEL = exports.E_REFUND_STATUS = exports.E_TH_ASKER_PAYMENT_METHOD = exports.E_VN_ASKER_PAYMENT_METHOD = exports.E_PAYMENT_METHOD = exports.E_TRANSACTION_TYPE = exports.E_TRANSACTION_ACCOUNT_TYPE = exports.E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT = exports.E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT = exports.E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT = void 0;
var E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT;
(function (E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT) {
    E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT["COMPENSATE_TASKER"] = "COMPENSATE_TASKER";
    E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT["NEW_TASKER_TRIAL"] = "NEW_TASKER_TRIAL";
    E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT["TASK"] = "TASK";
    E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT["RATING_TIP"] = "RATING_TIP";
    E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT["TOP_UP_CREDIT_PROMPT_PAY"] = "TOP_UP_CREDIT_PROMPT_PAY";
    E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT["SUPPORT_TASKER"] = "SUPPORT_TASKER";
})(E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT || (exports.E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT = E_TASKER_TRANSACTION_SOURCE_NAME_DEBIT = {}));
var E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT;
(function (E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT) {
    E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT["WITHDRAW"] = "WITHDRAW";
    E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT["RATING_TIP"] = "RATING_TIP";
})(E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT || (exports.E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT = E_ASKER_TRANSACTION_SOURCE_NAME_CREDIT = {}));
var E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT;
(function (E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT) {
    E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT["WEEKLY_PAYOUT"] = "WEEKLY_PAYOUT";
})(E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT || (exports.E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT = E_TASKER_TRANSACTION_SOURCE_NAME_CREDIT = {}));
var E_TRANSACTION_ACCOUNT_TYPE;
(function (E_TRANSACTION_ACCOUNT_TYPE) {
    E_TRANSACTION_ACCOUNT_TYPE["PROMOTION"] = "P";
    E_TRANSACTION_ACCOUNT_TYPE["MAIN"] = "M";
})(E_TRANSACTION_ACCOUNT_TYPE || (exports.E_TRANSACTION_ACCOUNT_TYPE = E_TRANSACTION_ACCOUNT_TYPE = {}));
var E_TRANSACTION_TYPE;
(function (E_TRANSACTION_TYPE) {
    E_TRANSACTION_TYPE["DEBIT"] = "D";
    E_TRANSACTION_TYPE["CREDIT"] = "C";
    E_TRANSACTION_TYPE["WITHDRAW"] = "W";
})(E_TRANSACTION_TYPE || (exports.E_TRANSACTION_TYPE = E_TRANSACTION_TYPE = {}));
var E_PAYMENT_METHOD;
(function (E_PAYMENT_METHOD) {
    E_PAYMENT_METHOD["SHOPEE_PAY"] = "SHOPEE_PAY";
    E_PAYMENT_METHOD["ZALO_PAY"] = "ZALO_PAY";
    E_PAYMENT_METHOD["MOMO"] = "MOMO";
    E_PAYMENT_METHOD["CARD"] = "CARD";
    E_PAYMENT_METHOD["VN_PAY"] = "VN_PAY";
    E_PAYMENT_METHOD["TRUE_MONEY"] = "TRUE_MONEY";
    E_PAYMENT_METHOD["PROMPT_PAY"] = "PROMPT_PAY";
})(E_PAYMENT_METHOD || (exports.E_PAYMENT_METHOD = E_PAYMENT_METHOD = {}));
var E_VN_ASKER_PAYMENT_METHOD;
(function (E_VN_ASKER_PAYMENT_METHOD) {
    E_VN_ASKER_PAYMENT_METHOD["SHOPEE_PAY"] = "SHOPEE_PAY";
    E_VN_ASKER_PAYMENT_METHOD["ZALO_PAY"] = "ZALO_PAY";
    E_VN_ASKER_PAYMENT_METHOD["MOMO"] = "MOMO";
    E_VN_ASKER_PAYMENT_METHOD["CARD"] = "CARD";
    E_VN_ASKER_PAYMENT_METHOD["VN_PAY"] = "VN_PAY";
})(E_VN_ASKER_PAYMENT_METHOD || (exports.E_VN_ASKER_PAYMENT_METHOD = E_VN_ASKER_PAYMENT_METHOD = {}));
var E_TH_ASKER_PAYMENT_METHOD;
(function (E_TH_ASKER_PAYMENT_METHOD) {
    E_TH_ASKER_PAYMENT_METHOD["SHOPEE_PAY"] = "SHOPEE_PAY";
    E_TH_ASKER_PAYMENT_METHOD["CARD"] = "CARD";
    E_TH_ASKER_PAYMENT_METHOD["TRUE_MONEY"] = "TRUE_MONEY";
    E_TH_ASKER_PAYMENT_METHOD["PROMPT_PAY"] = "PROMPT_PAY";
})(E_TH_ASKER_PAYMENT_METHOD || (exports.E_TH_ASKER_PAYMENT_METHOD = E_TH_ASKER_PAYMENT_METHOD = {}));
var E_REFUND_STATUS;
(function (E_REFUND_STATUS) {
    E_REFUND_STATUS["REFUNDED"] = "REFUNDED";
    E_REFUND_STATUS["ERROR"] = "ERROR";
})(E_REFUND_STATUS || (exports.E_REFUND_STATUS = E_REFUND_STATUS = {}));
var E_TRANSACTION_CHANNEL;
(function (E_TRANSACTION_CHANNEL) {
    E_TRANSACTION_CHANNEL["B_PAY"] = "B_PAY";
    E_TRANSACTION_CHANNEL["CASH"] = "CASH";
    E_TRANSACTION_CHANNEL["TRANSFER"] = "TRANSFER";
    E_TRANSACTION_CHANNEL["PAYMENT_GATEWAYS"] = "PAYMENT_GATEWAYS";
})(E_TRANSACTION_CHANNEL || (exports.E_TRANSACTION_CHANNEL = E_TRANSACTION_CHANNEL = {}));
var E_ASKER_INCOME_ACTIVITY;
(function (E_ASKER_INCOME_ACTIVITY) {
    E_ASKER_INCOME_ACTIVITY["TOP_UP"] = "TOP_UP";
    E_ASKER_INCOME_ACTIVITY["REFUND"] = "REFUND";
    E_ASKER_INCOME_ACTIVITY["COMPENSATION"] = "COMPENSATION";
})(E_ASKER_INCOME_ACTIVITY || (exports.E_ASKER_INCOME_ACTIVITY = E_ASKER_INCOME_ACTIVITY = {}));
var E_ASKER_INCOME_CHANNEL_TOP_UP;
(function (E_ASKER_INCOME_CHANNEL_TOP_UP) {
    E_ASKER_INCOME_CHANNEL_TOP_UP["PAYMENT_GATEWAYS"] = "PAYMENT_GATEWAYS";
    E_ASKER_INCOME_CHANNEL_TOP_UP["TRANSFER"] = "TRANSFER";
    E_ASKER_INCOME_CHANNEL_TOP_UP["B_PAY"] = "B_PAY";
})(E_ASKER_INCOME_CHANNEL_TOP_UP || (exports.E_ASKER_INCOME_CHANNEL_TOP_UP = E_ASKER_INCOME_CHANNEL_TOP_UP = {}));
var E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY;
(function (E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY) {
    E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY["DEPOSIT"] = "DEPOSIT";
})(E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY || (exports.E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY = E_ASKER_INCOME_CHANNEL_TOP_UP_BPAY = {}));
var E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER;
(function (E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER) {
    E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER["TOP_UP_CREDIT_BANK_TRANSFER"] = "TOP_UP_CREDIT_BANK_TRANSFER";
})(E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER || (exports.E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER = E_ASKER_INCOME_CHANNEL_TOP_UP_TRANSFER = {}));
var E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN;
(function (E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN) {
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN["TOP_UP_CREDIT_SHOPEE_PAY"] = "TOP_UP_CREDIT_SHOPEE_PAY";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN["TOP_UP_CREDIT_MOMO"] = "TOP_UP_CREDIT_MOMO";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN["TOP_UP_CREDIT_VN_PAY"] = "TOP_UP_CREDIT_VN_PAY";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN["TOP_UP_CREDIT_ZALO_PAY"] = "TOP_UP_CREDIT_ZALO_PAY";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN["TOP_UP_CREDIT_CARD"] = "TOP_UP_CREDIT_CARD";
})(E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN || (exports.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN = E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN = {}));
var E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH;
(function (E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH) {
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH["TOP_UP_CREDIT_SHOPEE_PAY"] = "TOP_UP_CREDIT_SHOPEE_PAY";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH["TOP_UP_CREDIT_CARD"] = "TOP_UP_CREDIT_CARD";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH["TOP_UP_CREDIT_TRUE_MONEY"] = "TOP_UP_CREDIT_TRUE_MONEY";
    E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH["TOP_UP_CREDIT_PROMPT_PAY"] = "TOP_UP_CREDIT_PROMPT_PAY";
})(E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH || (exports.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH = E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH = {}));
var E_ASKER_INCOME_CHANNEL_REFUND;
(function (E_ASKER_INCOME_CHANNEL_REFUND) {
    E_ASKER_INCOME_CHANNEL_REFUND["B_PAY"] = "B_PAY";
    E_ASKER_INCOME_CHANNEL_REFUND["PAYMENT_GATEWAYS"] = "PAYMENT_GATEWAYS";
})(E_ASKER_INCOME_CHANNEL_REFUND || (exports.E_ASKER_INCOME_CHANNEL_REFUND = E_ASKER_INCOME_CHANNEL_REFUND = {}));
var E_ASKER_INCOME_CHANNEL_REFUND_BPAY;
(function (E_ASKER_INCOME_CHANNEL_REFUND_BPAY) {
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["REFUND_CANCEL_TASK_SHOPEE_PAY"] = "REFUND_CANCEL_TASK_SHOPEE_PAY";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["REFUND_CANCEL_TASK_MOMO"] = "REFUND_CANCEL_TASK_MOMO";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["REFUND_CANCEL_TASK_VN_PAY"] = "REFUND_CANCEL_TASK_VN_PAY";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["REFUND_CANCEL_TASK_ZALO_PAY"] = "REFUND_CANCEL_TASK_ZALO_PAY";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["SYSTEM_REFUND"] = "SYSTEM_REFUND";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["REFUND_RATING_NOT_COMING"] = "REFUND_RATING_NOT_COMING";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["REFUND_CANCEL_TASK"] = "REFUND_CANCEL_TASK";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["CANCEL_TASK"] = "CANCEL TASK";
    E_ASKER_INCOME_CHANNEL_REFUND_BPAY["CHANGE_SCHEDULE"] = "CHANGE_SCHEDULE";
})(E_ASKER_INCOME_CHANNEL_REFUND_BPAY || (exports.E_ASKER_INCOME_CHANNEL_REFUND_BPAY = E_ASKER_INCOME_CHANNEL_REFUND_BPAY = {}));
var E_ASKER_INCOME_CHANNEL_COMPENSATION;
(function (E_ASKER_INCOME_CHANNEL_COMPENSATION) {
    E_ASKER_INCOME_CHANNEL_COMPENSATION["B_PAY"] = "B_PAY";
    // TRANSFER = E_TRANSACTION_CHANNEL.TRANSFER,
})(E_ASKER_INCOME_CHANNEL_COMPENSATION || (exports.E_ASKER_INCOME_CHANNEL_COMPENSATION = E_ASKER_INCOME_CHANNEL_COMPENSATION = {}));
var E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY;
(function (E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY) {
    E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY["SUPPORT_ASKER"] = "SUPPORT_ASKER";
    E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY["COMPENSATION_ASKER_NO_RELATIVE_TASK"] = "COMPENSATION_ASKER_NO_RELATIVE_TASK";
})(E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY || (exports.E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY = E_ASKER_INCOME_CHANNEL_COMPENSATION_BPAY = {}));
var E_ASKER_EXPENSE_ACTIVITY;
(function (E_ASKER_EXPENSE_ACTIVITY) {
    E_ASKER_EXPENSE_ACTIVITY["SERVICE_PAYMENT"] = "SERVICE_PAYMENT";
    E_ASKER_EXPENSE_ACTIVITY["WITHDRAW"] = "WITHDRAW";
    E_ASKER_EXPENSE_ACTIVITY["PENALTY"] = "PENALTY";
    E_ASKER_EXPENSE_ACTIVITY["TIP"] = "TIP";
})(E_ASKER_EXPENSE_ACTIVITY || (exports.E_ASKER_EXPENSE_ACTIVITY = E_ASKER_EXPENSE_ACTIVITY = {}));
var E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT;
(function (E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT) {
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT["B_PAY"] = "B_PAY";
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT["PAYMENT_GATEWAYS"] = "PAYMENT_GATEWAYS";
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT["CASH"] = "CASH";
})(E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT || (exports.E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT = E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT = {}));
var E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY;
(function (E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY) {
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY["PAY_SUBSCRIPTION"] = "PAY_SUBSCRIPTION";
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY["COMBO_VOUCHER"] = "COMBO_VOUCHER";
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY["TASK"] = "TASK";
    E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY["PAY_OUTSTADING_PAYMENT"] = "PAY_OUTSTADING_PAYMENT";
})(E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY || (exports.E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY = E_ASKER_EXPENSE_CHANNEL_SERVICE_PAYMENT_BPAY = {}));
var E_ASKER_EXPENSE_CHANNEL_PENALTY;
(function (E_ASKER_EXPENSE_CHANNEL_PENALTY) {
    E_ASKER_EXPENSE_CHANNEL_PENALTY["B_PAY"] = "B_PAY";
})(E_ASKER_EXPENSE_CHANNEL_PENALTY || (exports.E_ASKER_EXPENSE_CHANNEL_PENALTY = E_ASKER_EXPENSE_CHANNEL_PENALTY = {}));
var E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY;
(function (E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY) {
    E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY["CANCEL_TASK"] = "CANCEL TASK";
    E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY["FINE_ASKER_NO_RELATIVE_TASK"] = "FINE_ASKER_NO_RELATIVE_TASK";
    E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY["FINE_ASKER"] = "FINE_ASKER";
})(E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY || (exports.E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY = E_ASKER_EXPENSE_CHANNEL_PENALTY_BPAY = {}));
var E_ASKER_EXPENSE_CHANNEL_TIP;
(function (E_ASKER_EXPENSE_CHANNEL_TIP) {
    E_ASKER_EXPENSE_CHANNEL_TIP["B_PAY"] = "B_PAY";
})(E_ASKER_EXPENSE_CHANNEL_TIP || (exports.E_ASKER_EXPENSE_CHANNEL_TIP = E_ASKER_EXPENSE_CHANNEL_TIP = {}));
var E_ASKER_EXPENSE_CHANNEL_WITHDRAW;
(function (E_ASKER_EXPENSE_CHANNEL_WITHDRAW) {
    E_ASKER_EXPENSE_CHANNEL_WITHDRAW["B_PAY"] = "B_PAY";
})(E_ASKER_EXPENSE_CHANNEL_WITHDRAW || (exports.E_ASKER_EXPENSE_CHANNEL_WITHDRAW = E_ASKER_EXPENSE_CHANNEL_WITHDRAW = {}));
var E_TASKER_INCOME_ACTIVITY;
(function (E_TASKER_INCOME_ACTIVITY) {
    E_TASKER_INCOME_ACTIVITY["SERVICE_PAYMENT"] = "SERVICE_PAYMENT";
    E_TASKER_INCOME_ACTIVITY["BONUS"] = "BONUS";
    E_TASKER_INCOME_ACTIVITY["COMPENSATE"] = "COMPENSATE";
    E_TASKER_INCOME_ACTIVITY["TIP"] = "TIP";
    E_TASKER_INCOME_ACTIVITY["TOP_UP"] = "TOP_UP";
    E_TASKER_INCOME_ACTIVITY["SUPPORT"] = "SUPPORT";
    E_TASKER_INCOME_ACTIVITY["NEW_TASKER_TRIAL"] = "NEW_TASKER_TRIAL";
})(E_TASKER_INCOME_ACTIVITY || (exports.E_TASKER_INCOME_ACTIVITY = E_TASKER_INCOME_ACTIVITY = {}));
var E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT;
(function (E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT) {
    E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT["B_PAY"] = "B_PAY";
    E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT["CASH"] = "CASH";
})(E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT || (exports.E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT = E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT = {}));
var E_TASKER_INCOME_CHANNEL_BONUS;
(function (E_TASKER_INCOME_CHANNEL_BONUS) {
    E_TASKER_INCOME_CHANNEL_BONUS["B_PAY"] = "B_PAY";
})(E_TASKER_INCOME_CHANNEL_BONUS || (exports.E_TASKER_INCOME_CHANNEL_BONUS = E_TASKER_INCOME_CHANNEL_BONUS = {}));
var E_TASKER_INCOME_CHANNEL_COMPENSATE;
(function (E_TASKER_INCOME_CHANNEL_COMPENSATE) {
    E_TASKER_INCOME_CHANNEL_COMPENSATE["B_PAY"] = "B_PAY";
})(E_TASKER_INCOME_CHANNEL_COMPENSATE || (exports.E_TASKER_INCOME_CHANNEL_COMPENSATE = E_TASKER_INCOME_CHANNEL_COMPENSATE = {}));
var E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL;
(function (E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL) {
    E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL["B_PAY"] = "B_PAY";
})(E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL || (exports.E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL = E_TASKER_INCOME_CHANNEL_NEW_TASKER_TRIAL = {}));
var E_TASKER_INCOME_CHANNEL_SUPPORT;
(function (E_TASKER_INCOME_CHANNEL_SUPPORT) {
    E_TASKER_INCOME_CHANNEL_SUPPORT["B_PAY"] = "B_PAY";
})(E_TASKER_INCOME_CHANNEL_SUPPORT || (exports.E_TASKER_INCOME_CHANNEL_SUPPORT = E_TASKER_INCOME_CHANNEL_SUPPORT = {}));
var E_TASKER_INCOME_CHANNEL_TIP;
(function (E_TASKER_INCOME_CHANNEL_TIP) {
    E_TASKER_INCOME_CHANNEL_TIP["B_PAY"] = "B_PAY";
})(E_TASKER_INCOME_CHANNEL_TIP || (exports.E_TASKER_INCOME_CHANNEL_TIP = E_TASKER_INCOME_CHANNEL_TIP = {}));
var E_TASKER_INCOME_CHANNEL_TOP_UP;
(function (E_TASKER_INCOME_CHANNEL_TOP_UP) {
    E_TASKER_INCOME_CHANNEL_TOP_UP["PAYMENT_GATEWAYS"] = "PAYMENT_GATEWAYS";
})(E_TASKER_INCOME_CHANNEL_TOP_UP || (exports.E_TASKER_INCOME_CHANNEL_TOP_UP = E_TASKER_INCOME_CHANNEL_TOP_UP = {}));
var E_TASKER_INCOME_CHANNEL_BONUS_BPAY;
(function (E_TASKER_INCOME_CHANNEL_BONUS_BPAY) {
    E_TASKER_INCOME_CHANNEL_BONUS_BPAY["TASKER_MONTHLY_REWARD"] = "TASKER MONTHLY REWARD";
    E_TASKER_INCOME_CHANNEL_BONUS_BPAY["REFERRAL"] = "REFERRAL";
    E_TASKER_INCOME_CHANNEL_BONUS_BPAY["SYSTEM_REWARD"] = "SYSTEM_REWARD";
    E_TASKER_INCOME_CHANNEL_BONUS_BPAY["REFERRAL_INVITED_TASKER_DONE_20_TASKS_IN_30_DAYS"] = "REFERRAL_INVITED_TASKER_DONE_20_TASKS_IN_30_DAYS";
})(E_TASKER_INCOME_CHANNEL_BONUS_BPAY || (exports.E_TASKER_INCOME_CHANNEL_BONUS_BPAY = E_TASKER_INCOME_CHANNEL_BONUS_BPAY = {}));
var E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY;
(function (E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY) {
    E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY["CARD_TASK"] = "CARD_TASK";
    E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY["TASK"] = "TASK";
    E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY["ROLLBACK_TRANSACTION"] = "ROLLBACK_TRANSACTION";
    E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY["REVERT_WEEKLY_PAYOUT"] = "REVERT_WEEKLY_PAYOUT";
})(E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY || (exports.E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY = E_TASKER_INCOME_CHANNEL_SERVICE_PAYMENT_BPAY = {}));
var E_TASKER_EXPENSE_ACTIVITY;
(function (E_TASKER_EXPENSE_ACTIVITY) {
    E_TASKER_EXPENSE_ACTIVITY["WITHDRAW"] = "WITHDRAW";
    E_TASKER_EXPENSE_ACTIVITY["PENALTY"] = "PENALTY";
})(E_TASKER_EXPENSE_ACTIVITY || (exports.E_TASKER_EXPENSE_ACTIVITY = E_TASKER_EXPENSE_ACTIVITY = {}));
var E_TASKER_EXPENSE_CHANNEL_WITHDRAW;
(function (E_TASKER_EXPENSE_CHANNEL_WITHDRAW) {
    E_TASKER_EXPENSE_CHANNEL_WITHDRAW["B_PAY"] = "B_PAY";
})(E_TASKER_EXPENSE_CHANNEL_WITHDRAW || (exports.E_TASKER_EXPENSE_CHANNEL_WITHDRAW = E_TASKER_EXPENSE_CHANNEL_WITHDRAW = {}));
var E_TASKER_EXPENSE_CHANNEL_PENALTY;
(function (E_TASKER_EXPENSE_CHANNEL_PENALTY) {
    E_TASKER_EXPENSE_CHANNEL_PENALTY["B_PAY"] = "B_PAY";
})(E_TASKER_EXPENSE_CHANNEL_PENALTY || (exports.E_TASKER_EXPENSE_CHANNEL_PENALTY = E_TASKER_EXPENSE_CHANNEL_PENALTY = {}));
var E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY;
(function (E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY) {
    E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY["NOT_COMING"] = "NOT_COMMING";
    E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY["CANCEL_TASK"] = "CANCEL TASK";
    E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY["FINE_TASKER"] = "FINE_TASKER";
    E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY["FINE_TASKER_NO_RELATIVE_TASK"] = "FINE_TASKER_NO_RELATIVE_TASK";
    E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY["PENALTY"] = "PENALTY";
})(E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY || (exports.E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY = E_TASKER_EXPENSE_CHANNEL_PENALTY_BPAY = {}));
