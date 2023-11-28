import { IIsoCode } from "./common";
import { IStatusTaskerProfile } from "./tasker-profile";
import { ITextLang } from "./lang";
import { ITrainingType } from "./taskerTraining";
export interface FetchSendNotificationParams {
    userIds: Array<string>;
    message: {
        title: ITextLang;
        body: ITextLang;
    };
    payload?: {
        navigateTo?: string;
        notificationId?: string;
    };
}
export interface FetchAllowTaskerDoTrainingTestAgainParams {
    taskerId: string;
    trainingType: ITrainingType;
}
export interface FetchAllowTaskerDoAdditionalTestParams {
    taskerId: string;
}
export interface FetchGetStatusTaskerTrainingParams {
    taskerId: string;
}
export interface FetchUpdateTaskerProfileParams {
    taskerProfileId: string;
    isoCode: IIsoCode;
    identityCardStatus?: IStatusTaskerProfile;
    householdStatus?: IStatusTaskerProfile;
}
