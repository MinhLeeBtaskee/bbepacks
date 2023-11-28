export declare enum CAMPAIGN_STATUS {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare enum CAMPAIGN_ACTION {
    LINK = "link",
    APP_DIRECTION = "app_direction"
}
export declare enum APP_DIRECTION {
    REWARD_ID = "rewardId",
    NOTIFICATION_ID = "notificationId"
}
export declare enum ROUTER_NAME {
    REWARD_DETAIL = "RewardDetail",
    NOTIFICATION_DETAIL = "NotificationDetail"
}
type TStatus = keyof typeof CAMPAIGN_STATUS;
type TActionName = keyof typeof CAMPAIGN_ACTION;
export interface ITaskerCampaignForm {
    name: string;
    startDate: Date;
    endDate: Date;
    action: {
        name: TActionName;
        link: string;
    };
    image: string;
    createdAt: Date;
    status: TStatus;
    userIds: {
        [key: string]: 0 | 1;
    };
    isTesting: boolean;
}
export interface ITaskerCampaignData extends ITaskerCampaignForm {
    _id: string;
}
export {};
