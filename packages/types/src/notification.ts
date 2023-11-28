import { ITextLang } from './lang';

export type TLegacyImage = any[] | string | undefined;
export interface ITemplateForm {
  mainLanguage: string;
  title: {
    vi: string;
    en: string;
    ko: string;
    th: string;
    id: string;
  };
  text: {
    vi: string;
    en: string;
    ko: string;
    th: string;
    id: string;
  };
  image?: TLegacyImage;
  thumbnail?: TLegacyImage;
  name: string;
  teams: any;
}

export interface IFilterTemplate {
  type: 201 | 202 | 301 | 302;
  country: string;
  city: string;
  district: string[];
  service: string[];
  status: string;
  phone: string;
}

export type ICallbackSuccess = (result: any) => void;

export interface IServiceWithCountry {
  country: string;
  services: IService[];
}

export interface IService {
  _id: string;
  text: ITextLang;
}

export interface INotification extends ITemplateForm {
  _id: string;
  createdAt: Date;
}
