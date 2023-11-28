import { ITextLang } from './lang';

export type IRangeDate = [Date, Date];

export interface IModalPayout {
  currency: string;
  data: DataType[];
  isShowModalPayout: boolean;
  loading: boolean;
  setShowModalPayout: (isShowModalPayout: boolean) => void;
  fetchAllData: (payoutNotSupport: any) => void;
  payouts: (payoutIds: any) => void;
}

export interface DataType {
  _id: string;
  avatar: string;
  name: string;
  phone: string;
  amount: number;
  TCBankNumber: string;
  isLockedOfViolate: boolean;
  taskerId: string;
}

export type TCountry = string;

export enum EIsoCode {
  VN = 'VN',
  TH = 'TH',
  ID = 'ID',
}

export type IIsoCode = keyof typeof EIsoCode;

export interface _ID {
  _id: string;
}

export interface IServiceDb {
  name: string;
  text: ITextLang;
  _id: string;
  isSubscription: boolean;
  status: string;
}
export interface IOption {
  from: string;
  data: {
    userId: string | null;
    userName: string;
  };
}

export enum SORT_TYPE {
  ASCEND = 'ascend',
  DESCEND = 'descend',
}

export enum SORT_ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

export enum SORT_NUMBER_VALUE {
  ASCEND = 1,
  DESCEND = -1,
}

export enum USER_TYPE {
  ASKER = 'ASKER',
  TASKER = 'TASKER',
}

export type ISortType = keyof typeof SORT_TYPE;
export type ISortOrder = 'asc' | 'desc';
export type TUserType = keyof typeof USER_TYPE;

export enum REFUND_STATUS {
  PAID = 'PAID',
  ERROR = 'ERROR',
  NEW = 'NEW',
  PROCESSING = 'PROCESSING',
  CANCELED = 'CANCELED',
}

export type IRefundStatus = keyof typeof REFUND_STATUS;
export type ISingleDate = 'date' | 'week' | 'month' | 'quarter' | 'year';

export type IRangeDatePicker =
  | 'range-date'
  | 'range-week'
  | 'range-month'
  | 'range-quarter'
  | 'range-year';

export type IDatePickerFormatted = ISingleDate | IRangeDatePicker;

export enum PROMOTION_VALUE_TYPE {
  MONEY = 'MONEY',
  PERCENTAGE = 'PERCENTAGE',
}

export type TPromotionValueType = keyof typeof PROMOTION_VALUE_TYPE;

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export interface IDeposit {
  user: {
    avatar: string;
    name: string;
    phone: string;
  };
  amount: number;
  source: {
    accountType: string;
    reason: string;
    cashierName: string;
    depositDate?: Date;
    withdrawDate?: Date;
    referenceCode: string;
    transactionType: string;
    value: string;
  };
  currency: {
    code: string;
    sign: string;
  };
}
