"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER_NAME = exports.APP_DIRECTION = exports.CAMPAIGN_ACTION = exports.CAMPAIGN_STATUS = void 0;
var CAMPAIGN_STATUS;
(function (CAMPAIGN_STATUS) {
    CAMPAIGN_STATUS["ACTIVE"] = "ACTIVE";
    CAMPAIGN_STATUS["INACTIVE"] = "INACTIVE";
})(CAMPAIGN_STATUS || (exports.CAMPAIGN_STATUS = CAMPAIGN_STATUS = {}));
var CAMPAIGN_ACTION;
(function (CAMPAIGN_ACTION) {
    CAMPAIGN_ACTION["LINK"] = "link";
    CAMPAIGN_ACTION["APP_DIRECTION"] = "app_direction";
})(CAMPAIGN_ACTION || (exports.CAMPAIGN_ACTION = CAMPAIGN_ACTION = {}));
var APP_DIRECTION;
(function (APP_DIRECTION) {
    APP_DIRECTION["REWARD_ID"] = "rewardId";
    APP_DIRECTION["NOTIFICATION_ID"] = "notificationId";
})(APP_DIRECTION || (exports.APP_DIRECTION = APP_DIRECTION = {}));
var ROUTER_NAME;
(function (ROUTER_NAME) {
    ROUTER_NAME["REWARD_DETAIL"] = "RewardDetail";
    ROUTER_NAME["NOTIFICATION_DETAIL"] = "NotificationDetail";
})(ROUTER_NAME || (exports.ROUTER_NAME = ROUTER_NAME = {}));
