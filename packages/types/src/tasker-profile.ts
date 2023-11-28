import { ITextLang } from './lang';

export enum STATUS_TASKER_PROFILE {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  VERIFYING = 'VERIFYING',
  ELIMINATED = 'ELIMINATED',
}

export interface ITaskerProfile {
  _id: string;
  tasker: {
    phone: string;
    username: string;
    name: string;
    gender: string;
    status: string;
  };
  status: string;
  services: { text: ITextLang }[];
  appointmentInfo: {
    name: string;
    date: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type IStatusTaskerProfile = keyof typeof STATUS_TASKER_PROFILE;
