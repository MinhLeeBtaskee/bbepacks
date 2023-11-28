import { TPromotionValueType } from './common';
import { ITextLang } from './lang';
type TFileAntd = any;
type Moment = any;
export declare enum PROMOTION_STATUS {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare enum COMBO_VOUCHER_TARGET_USER {
    BOTH = "BOTH",
    NEW = "NEW",
    CURRENT = "CURRENT"
}
export declare enum COMBO_VOUCHER_FROM_PARTNER {
    SYSTEM = "SYSTEM"
}
export type TAskerRank = 'ASKER_RANK_NAME_MEMBER' | 'ASKER_RANK_NAME_SILVER' | 'ASKER_RANK_NAME_GOLD' | 'ASKER_RANK_NAME_PLATINUM';
type TStatus = keyof typeof PROMOTION_STATUS;
type TTargetUser = keyof typeof COMBO_VOUCHER_TARGET_USER;
export interface IVouchersForm {
    image: TFileAntd[];
    title: ITextLang;
    content: ITextLang;
    note: ITextLang;
    brandInfo: {
        image: TFileAntd[];
    };
    quantity: number;
    promotion: {
        prefix: string;
        type: TPromotionValueType;
        value: number;
        maxValue?: number;
        isChosenExpiredDate: boolean;
        numberOfDayDueDate?: number;
        expiredDate?: Moment;
    };
    applyFor: {
        cities: string[];
        services: string;
        isAllUsers: boolean;
        isSharePublic: boolean;
        applyForType?: 'isAllUsers' | 'isSharePublic';
    };
}
export interface IComboVoucherForm {
    thumbnail: TFileAntd[];
    image: TFileAntd[];
    isTesting: boolean;
    cost: number;
    price: number;
    title: ITextLang;
    content: ITextLang;
    termsAndCondition: ITextLang;
    rangeDate: [Moment, Moment];
    vouchers: IVouchersForm[];
    target: TTargetUser;
}
export interface IComboVoucherItem extends Omit<IComboVoucherForm, 'thumbnail' | 'image' | 'vouchers' | 'rangeDate'> {
    _id: string;
    createdAt: Date;
    startDate: Date;
    endDate: Date;
    status: TStatus;
    thumbnail: string;
    image: string;
    vouchers: Array<Omit<IVouchersForm, 'image' | 'brandInfo' | 'promotion' | 'applyFor'> & {
        _id?: string;
        image: string;
        brandInfo: {
            image: string;
        };
        promotion: {
            type: TPromotionValueType;
            value: number;
            maxValue: number;
            prefix: string;
            numberOfDayDueDate?: number;
            expiredDate?: Date;
        };
        applyFor: {
            cities?: string[];
            services?: string[];
            isAllUsers: boolean;
            isSharePublic: boolean;
        };
    }>;
}
export interface IIncentiveInfoForm {
    _id: string;
    originalPoint: number;
    point: number;
    image: string;
    title: ITextLang;
    content: ITextLang;
}
export interface IAskerFlashSaleForm {
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    status: string;
    description: string;
    isTesting: boolean;
    incentiveInfos: Array<IIncentiveInfoForm>;
}
export interface IAskerFlashSaleData extends IAskerFlashSaleForm {
    _id: string;
}
export interface IAskerReferralCampaignForm {
    image: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    status: string;
    description: string;
    isTesting: boolean;
    inviter: Array<IInviteTypeForm>;
    invitee: Array<IInviteTypeForm>;
}
export interface IInviteTypeForm {
    incentiveId: string;
    quantity: number;
    image: string;
    title: ITextLang;
}
export interface IAskerReferralCampaignData extends IAskerReferralCampaignForm {
    _id: string;
}
export {};
