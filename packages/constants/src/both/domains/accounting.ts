import {
  E_PAYMENT_METHOD,
  E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN,
  E_TH_ASKER_PAYMENT_METHOD,
  E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH,
} from "../enum/accounting-report";

export const VN_USER_TOP_UP_OPTIONS = [
  {
    value: E_PAYMENT_METHOD.SHOPEE_PAY,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_SHOPEE_PAY,
  },
  {
    value: E_PAYMENT_METHOD.ZALO_PAY,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_ZALO_PAY,
  },
  {
    value: E_PAYMENT_METHOD.MOMO,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_MOMO,
  },
  {
    value: E_PAYMENT_METHOD.VN_PAY,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_VN_PAY,
  },
  {
    value: E_PAYMENT_METHOD.CARD,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_VN.TOP_UP_CREDIT_CARD,
  },
];

export const TH_USER_TOP_UP_OPTIONS = [
  {
    value: E_TH_ASKER_PAYMENT_METHOD.SHOPEE_PAY,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_SHOPEE_PAY,
  },
  {
    value: E_TH_ASKER_PAYMENT_METHOD.CARD,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_CARD,
  },
  {
    value: E_TH_ASKER_PAYMENT_METHOD.TRUE_MONEY,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_TRUE_MONEY,
  },
  {
    value: E_TH_ASKER_PAYMENT_METHOD.PROMPT_PAY,
    sourceName:
      E_USER_INCOME_CHANNEL_TOP_UP_PAYMENT_METHOD_TH.TOP_UP_CREDIT_PROMPT_PAY,
  },
];