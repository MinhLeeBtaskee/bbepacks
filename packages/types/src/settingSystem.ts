import { ITextLang } from './lang';

export interface IDepositIntruction {
  city: string;
  address: string;
  accountHolder: string;
  accountNumber: string;
  bankName: ITextLang;
  bankDepartment: ITextLang;
}

export interface IInitialState {
  loading: boolean;
  data: any[];
  filterOpen: boolean;
  currency: string;
}

export interface IexchangePriceToPoint {
  price: number;
  point: number;
}

export interface IPrivilegeOfRankSetting {
  icon: string;
  text: ITextLang;
}

export interface IRankSetting {
  rankName: string;
  color: string;
  point: number;
  rate: number;
  text: ITextLang;
  webLink: {
    text: ITextLang;
    url: ITextLang;
  };
  privilege: IPrivilegeOfRankSetting[];
}

export interface IGiftSetting {
  startDate: Date;
  exchangePriceToPoint: IexchangePriceToPoint;
  rankingCycle: {
    startDate: Date;
    expectedDate: Date;
    isResetbPointRunning: number;
  };
  'Q&A': IQAOfGiftSetting[];
  phaseResetPoint: number;
  description: ITextLang;
}

export interface ICampaignSetting {
  autoPlay: boolean;
  duration: number;
  loop: boolean;
}

export interface ITaskerNotComingFee {
  earlyCancelFee: number;
  lateCancelFee: number;
  notCommingFee: number;
}
export interface IVersionApp {
  ios: {
    version: string;
    forcedVersion: string;
    isForce: boolean;
    description: string;
    link: string;
    isShow: boolean;
  };
  android: {
    version: string;
    forcedVersion: string;
    isForce: boolean;
    description: string;
    link: string;
    isShow: boolean;
  };
}
export interface ITaskerMonthlyAwardByHours {
  hours: number;
  gift: number;
}

export interface ISettingSystem {
  _id: string;
  submitionAddressForTasker: ISubmitionAddressForTasker[];
  giftSetting: IGiftSetting;
  versionAsker: IVersionApp;
  listOfToolsForTasker: string;
  numOfTaskToRating: number;
  numOfTaskToCancel: number;
  taskerNotCommingFee: ITaskerNotComingFee;
  rankSetting: IRankSetting[];
  taskerMonthlyAwardByHour: ITaskerMonthlyAwardByHours[];
  depositIntruction: IDepositIntruction[];
  campaignSetting: ICampaignSetting;
  phaseResetPoint: number;
  tester: string[];
}

export interface ISubmitionAddressForTasker {
  city: string;
  address: string;
  phoneNumber?: string;
  name: string;
}

export interface IQAOfGiftSetting {
  question: ITextLang;
  answer: ITextLang;
}
