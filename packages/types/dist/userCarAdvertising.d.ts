import { IFilter } from './pagination';
import { TUserType } from './common';
export interface ICarAdvertising {
    referralCode: string;
    countAsker: number;
    countTasker: number;
    countEnteredCodeUser: number;
}
export interface IReferralCodes {
    _id: string;
    referralCode: string;
}
export interface IUserCarAdvertising {
    _id: string;
    friendCode?: string;
    type: TUserType;
    createdAt: Date;
    phone?: string;
}
export interface ICarAdvertisingFilter extends IFilter {
    rangeDate: Date[];
}
export interface IInformationUser extends IReferralCodes {
    phone: string;
    name: string;
    createdAt: Date;
}
export interface IPromotionTask {
    _id: string;
    promotion?: {
        code: string;
    };
}
