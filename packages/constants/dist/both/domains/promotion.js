"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROMOTION_TABS = exports.PROMOTION_TARGET_USER_OPTIONS = exports.PROMOTION_TYPE_OPTIONS = exports.PROMOTION_TARGET = exports.PROMOTION_BY = exports.PROMOTION_TYPE = void 0;
exports.PROMOTION_TYPE = {
    BOTH: 'BOTH',
    CURRENT: 'CURRENT',
    NEW: 'NEW',
};
exports.PROMOTION_BY = {
    BTASKEE: 'BTASKEE',
    TEASKER: 'TASKER',
};
exports.PROMOTION_TARGET = {
    BOTH: 'BOTH',
    ASKER: 'ASKER',
    TASKER: 'TASKER',
};
exports.PROMOTION_TYPE_OPTIONS = ['MONEY', 'PERCENTAGE'];
exports.PROMOTION_TARGET_USER_OPTIONS = ['CURRENT', 'BOTH', 'NEW'];
// TODO add permission for each tab
// permission: actionPermissionsConstant.userManagement,
exports.PROMOTION_TABS = [
    {
        label: 'Single promotion',
        value: '0',
    },
    {
        label: 'Promotion Series',
        value: '1',
    },
    {
        label: 'bRewards',
        value: '2',
    },
    {
        label: 'Campaign',
        value: '3',
    },
    {
        label: 'Combo vouchers',
        value: '4',
    },
];
