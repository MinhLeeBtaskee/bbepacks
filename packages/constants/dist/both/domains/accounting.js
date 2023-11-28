"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TH_USER_TOP_UP_OPTIONS = exports.VN_USER_TOP_UP_OPTIONS = void 0;
var types_1 = require("@bbepacks/types");
exports.VN_USER_TOP_UP_OPTIONS = [
    {
        value: types_1.E_PAYMENT_METHOD.SHOPEE_PAY,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_SHOPEE_PAY,
    },
    {
        value: types_1.E_PAYMENT_METHOD.ZALO_PAY,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_ZALO_PAY,
    },
    {
        value: types_1.E_PAYMENT_METHOD.MOMO,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_MOMO,
    },
    {
        value: types_1.E_PAYMENT_METHOD.VN_PAY,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_VN_PAY,
    },
    {
        value: types_1.E_PAYMENT_METHOD.CARD,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_CARD,
    },
];
exports.TH_USER_TOP_UP_OPTIONS = [
    {
        value: types_1.E_TH_ASKER_PAYMENT_METHOD.SHOPEE_PAY,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_SHOPEE_PAY,
    },
    {
        value: types_1.E_TH_ASKER_PAYMENT_METHOD.CARD,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_CARD,
    },
    {
        value: types_1.E_TH_ASKER_PAYMENT_METHOD.TRUE_MONEY,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_TRUE_MONEY,
    },
    {
        value: types_1.E_TH_ASKER_PAYMENT_METHOD.PROMPT_PAY,
        sourceName: types_1.E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_PROMPT_PAY,
    },
];
