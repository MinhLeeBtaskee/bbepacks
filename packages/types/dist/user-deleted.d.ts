import { IIsoCode, TUserType, _ID } from './common';
export declare enum USER_STATUS {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
type TUserStatus = keyof typeof USER_STATUS;
export interface IUserForm {
    services: Array<any>;
    referralCode: string;
    status: TUserStatus;
    language: string;
    name: string;
    avatar: string;
    avgRating: number;
    taskDone: number;
    phone: string;
    score: number;
    friendCode: string;
    type: TUserType;
    nDoneTaskInMonth: number;
    address: string;
    workingPlaces: Array<any>;
    favouritedAsker: Array<any>;
    dismissTaskNumber: number;
    taskCancelByTasker: Array<any>;
    username: string;
    voiceCallToken: Array<any>;
    trainingPermission: Array<any>;
    devices: Array<any>;
    badges: Array<any>;
    scoreHistory: Array<any>;
    scoreRate: number;
    level: Array<any>;
    covid19Vaccine: Array<any>;
    isPremiumTasker: boolean;
    maxNumberOfQuizTaskerPremium: number;
    isReadyTaskerPremium: boolean;
}
export interface IUser extends IUserForm, _ID {
    fAccountId: string;
    createdAt: Date;
    lastDoneTask: Date;
    countryCode: IIsoCode;
    isoCode: IIsoCode;
    lastOnline: Date;
    checkInput: string;
    idNumber: number;
    signUpVersion: string;
    isUsedZaloPay: boolean;
    appVersion: string;
    lastLockedAt: Date;
    lastActiveAt: Date;
    dob: Date;
    changeHistory: Array<any>;
    csNotes: Array<any>;
}
export {};
