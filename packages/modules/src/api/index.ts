// import { getIsoCode } from 'api/helpers';
import { EIsoCode, IIsoCode } from '@bbepacks/types';
import id from './id';
import th from './th';
import vn from './vn';

export enum API_KEY {
  PAYOUT = 'PAYOUT',
  REVERT_PAYOUT = 'REVERT_PAYOUT',
  GET_SUBSCRIPTION_V2 = 'GET_SUBSCRIPTION_V2',
  GET_SUBSCRIPTION_V3 = 'GET_SUBSCRIPTION_V3',
  UPDATE_REFUND_AMOUNT = 'UPDATE_REFUND_AMOUNT',
  PAYMENT_REFUND = 'PAYMENT_REFUND',
  CREATE_REFUND_REQUEST = 'CREATE_REFUND_REQUEST',
  CANCEL_AND_REBOOK_TASK = 'CANCEL_AND_REBOOK_TASK',
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
  DELETE_ASKER = 'DELETE_ASKER',
  EMAIL_RECEIPT = 'EMAIL_RECEIPT',
  PUSH_NOTIFICATION_NEW_TASK = 'PUSH_NOTIFICATION_NEW_TASK',
  PUSH_NOTIFICATION_NEW_TASK_BY_LEVEL = 'PUSH_NOTIFICATION_NEW_TASK_BY_LEVEL',
  WEBSOCKET_SEND_MESSAGE_NOTIFICATION = 'WEBSOCKET_SEND_MESSAGE_NOTIFICATION',
  WEBSOCKET_SEND_MESSAGE_TASK = 'WEBSOCKET_SEND_MESSAGE_TASK',
  PRICING_RE_CALCULATE = 'PRICING_RE_CALCULATE',
  PRICING_AIR_CONDITIONER = 'PRICING_AIR_CONDITIONER',
  PROMOTION_CHECK = 'PROMOTION_CHECK',
  REVERT_USER_DELETED = 'REVERT_USER_DELETED',
  SMS_SERVICE_SEND = 'SMS_SERVICE_SEND',
  ALLOW_TASKER_DO_TRAINING_TEST_AGAIN = 'ALLOW_TASKER_DO_TRAINING_TEST_AGAIN',
  FORCE_TASKER_DO_ADDITIONAL_TEST = 'FORCE_TASKER_DO_ADDITIONAL_TEST',
  GET_TASKER_TRAINING_STATUS = 'GET_TASKER_TRAINING_STATUS',
  UPDATE_TASKER_PROFILE = 'UPDATE_TASKER_PROFILE',
  GET_TASKER_MONEY = 'GET_TASKER_MONEY',
  DELETE_TASKER = 'DELETE_TASKER',
  PRICING_SOFA = 'PRICING_SOFA',
  PRICING = 'PRICING',
  BOOKING_SUBSCRIPTION = 'BOOKING_SUBSCRIPTION',
  PAUSE_SUBSCRIPTION = 'PAUSE_SUBSCRIPTION',
  REACTIVE_SUBSCRIPTION = 'REACTIVE_SUBSCRIPTION',
  RENEW_SUBSCRIPTION = 'RENEW_SUBSCRIPTION',
  SUBSCRIPTION_ORDER = 'SUBSCRIPTION_ORDER',
  RECEIPT_SUBSCRIPTION = 'RECEIPT_SUBSCRIPTION',
  UPDATE_BOOKING_SUBSCRIPTION = 'UPDATE_BOOKING_SUBSCRIPTION',
  CANCEL_BOOKING_SUBSCRIPTION = 'CANCEL_BOOKING_SUBSCRIPTION',
  DONE_BOOKING_PARTNER_DONE = 'DONE_BOOKING_PARTNER_DONE',
  UPDATE_BOOKING_INCREASE_DURATION = 'UPDATE_BOOKING_INCREASE_DURATION',
  BACKEND_CANCEL_TASK = 'BACKEND_CANCEL_TASK',
  CANCEL_TASK_SUBSCRIPTION = 'CANCEL_TASK_SUBSCRIPTION',
  UPDATE_BOOKING_LAUNDRY = 'UPDATE_BOOKING_LAUNDRY',
  UPDATE_BOOKING_DEEP_CLEANING = 'UPDATE_BOOKING_DEEP_CLEANING',
  UPDATE_PREPAY_TASK = 'UPDATE_PREPAY_TASK',
  UPDATE_TASK_DURATION = 'UPDATE_TASK_DURATION',
  UPDATE_TASK_DATE = 'UPDATE_TASK_DATE',
  ACCEPT_BOOKING_DEEP_CLEANING = 'ACCEPT_BOOKING_DEEP_CLEANING',
  GET_CHAT_HISTORY = 'GET_CHAT_HISTORY',
  ADD_CLEANING_TOOL = 'ADD_CLEANING_TOOL',
  REMOVE_CLEANING_TOOL = 'REMOVE_CLEANING_TOOL',
  SET_EXPIRED_TASK = 'SET_EXPIRED_TASK',
  ADD_NEW_ACCEPTED_TASKER = 'ADD_NEW_ACCEPTED_TASKER',
  REPLACE_TASKER_DEPP_CLEANING = 'REPLACE_TASKER_DEPP_CLEANING',
  UPDATE_TASK_DETAIL = 'UPDATE_TASK_DETAIL',
  REMOVE_ACCEPTED_TASKER = 'REMOVE_ACCEPTED_TASKER',
  CONFIRMED_TASKER = 'CONFIRMED_TASKER',
  GET_TASKS_POTENTIAL_TASKER = 'GET_TASKS_POTENTIAL_TASKER',
  UPDATE_SOFA_QUANTITY = 'UPDATE_SOFA_QUANTITY',
  UPDATE_TASK_NOTE = 'UPDATE_TASK_NOTE',
  PRICING_SUBSCRIPTION = 'PRICING_SUBSCRIPTION',
  V3_BOOKING_SUBSCRIPTION = 'V3_BOOKING_SUBSCRIPTION',
  PRICING_SUBSCRIPTION_ELDERLY_CARE = 'PRICING_SUBSCRIPTION_ELDERLY_CARE',
  BOOKING_SUBSCRIPTION_ELDERLY_CARE = 'BOOKING_SUBSCRIPTION_ELDERLY_CARE',
  PRICING_SUBSCRIPTION_PATIENT_CARE = 'PRICING_SUBSCRIPTION_PATIENT_CARE',
  BOOKING_SUBSCRIPTION_PATIENT_CARE = 'BOOKING_SUBSCRIPTION_PATIENT_CARE',
  PRICING_SUBSCRIPTION_CHILD_CARE = 'PRICING_SUBSCRIPTION_CHILD_CARE',
  BOOKING_SUBSCRIPTION_CHILD_CARE = 'BOOKING_SUBSCRIPTION_CHILD_CARE',
  APPLY_PROMOTION = 'APPLY_PROMOTION',
  BOOK_FIRST_TASK_SUBSCRIPTION = 'BOOK_FIRST_TASK_SUBSCRIPTION',
}

export type IApiKey = keyof typeof API_KEY;
type StorageApi = {
  [key in IIsoCode]: {
    [k in IApiKey]: string | null;
  };
};

export const storageApi: StorageApi = {
  [EIsoCode.VN]: vn,
  [EIsoCode.TH]: th,
  [EIsoCode.ID]: id,
};

// function getRestApiByMultiRegion(apiKey: IApiKey) {
//   const isoCode = getIsoCode();

//   const urlByKeyAndIsoCode = storageApi[isoCode][apiKey];

//   if (!urlByKeyAndIsoCode) {
//     throw new Error(`The api ${apiKey} don't exist in iso code ${isoCode}`);
//   }

//   return urlByKeyAndIsoCode;
// }

// export function getApiStorageByIsoCode(isoCode: EIsoCode) {
//   return storageApi[isoCode];
// }

// export default getRestApiByMultiRegion;
