import { IIsoCode } from './common';
export interface ISettingCountry {
    isoCode: IIsoCode;
    countryCode: string;
    text: string;
    locale: string;
    flag: string;
}
