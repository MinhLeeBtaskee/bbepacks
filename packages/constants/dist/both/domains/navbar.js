"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LHS_MODULES = void 0;
var permissions_1 = require("../permissions");
exports.LHS_MODULES = [
    {
        value: "asker",
        label: "ASKER",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readAskersSearch,
        extends: [
            {
                value: "phone",
                label: "Phone",
            },
            {
                value: "name",
                label: "Name",
            },
            {
                value: "referralCode",
                label: "Referral Code",
            },
            {
                value: "friendCode",
                label: "Friend Code",
            },
            {
                value: "all",
                label: "All",
            },
        ],
    },
    {
        value: "tasker",
        label: "TASKER",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readTaskerSearch,
        extends: [
            {
                value: "phone",
                label: "Phone",
            },
            {
                value: "name",
                label: "Name",
            },
            {
                value: "referralCode",
                label: "Referral Code",
            },
            {
                value: "friendCode",
                label: "Friend Code",
            },
            {
                value: "all",
                label: "All",
            },
        ],
    },
    {
        value: "task",
        label: "TASK",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readTaskSearch,
        extends: [
            {
                value: "asker",
                label: "Asker",
            },
            {
                value: "tasker",
                label: "Tasker",
            },
        ],
    },
    {
        value: "grocery",
        label: "GROCERY",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readGrocery,
    },
    {
        value: "schedule",
        label: "SCHEDULE",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readTaskSchedulesSearch,
        extends: [
            {
                value: "asker",
                label: "Asker",
            },
            {
                value: "tasker",
                label: "Tasker",
            },
        ],
    },
    {
        value: "subscription",
        label: "SUBSCRIPTION",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readSubscriptionSearch,
        extends: [
            {
                value: "asker",
                label: "Asker",
            },
            {
                value: "tasker",
                label: "Tasker",
            },
        ],
    },
    {
        value: "marketing",
        label: "MARKETING",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.readPromotion,
    },
    {
        value: "report",
        label: "REPORT",
        requiredPermission: false,
    },
    {
        value: "others",
        label: "OTHERS",
        requiredPermission: false,
    },
    {
        value: "settings",
        label: "SETTING",
        requiredPermission: [
            permissions_1.ACTION_PERMISSION_CONSTANTS.userManagement,
            permissions_1.ACTION_PERMISSION_CONSTANTS.managerEmployee,
        ],
    },
    {
        value: "accounting",
        label: "ACCOUNTING",
        requiredPermission: permissions_1.ACCOUNTING_PERMISSION,
    },
    {
        value: "users-deleted",
        label: "USERS_DELETED",
        requiredPermission: permissions_1.ACTION_PERMISSION_CONSTANTS.USERS_DELETED_GET_LIST,
    },
    {
        value: "tasker-report",
        label: "TASKER_REPORT",
        requiredPermission: false,
    },
];
