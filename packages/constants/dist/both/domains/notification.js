"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTIFICATION_FROM_BACKEND = exports.NOTIFICATION_FILTER_TYPES = exports.TEMPLATE_FILTER_DEFAULT = exports.TEMPLATE_TEAMS_MAP = exports.TEMPLATE_LANGUAGES = exports.NOTIFICATION_TYPES = void 0;
exports.NOTIFICATION_TYPES = [
    {
        label: 'Support',
        value: 201,
    },
    {
        label: 'Support and force view',
        value: 202,
    },
    {
        label: 'Notifications from bTaskee and not force to view',
        value: 301,
    },
    {
        label: 'Notifications from bTaskee and force to view',
        value: 302,
    },
];
exports.TEMPLATE_LANGUAGES = [
    {
        value: 'vi',
        label: 'Tiếng Việt',
    },
    {
        value: 'th',
        label: 'ไทย',
    },
];
exports.TEMPLATE_TEAMS_MAP = {
    'customer-service': 'Customer Service',
    tasker: 'Tasker',
    marketing: 'Marketing',
};
exports.TEMPLATE_FILTER_DEFAULT = {
    type: 301,
    country: 'all',
    city: 'all',
    district: ['all'],
    service: ['all'],
    status: 'all',
    phone: '',
};
exports.NOTIFICATION_FILTER_TYPES = [
    {
        label: 'Bulk filter',
        value: 'filter',
    },
    {
        label: 'Phone filter',
        value: 'phone',
    },
];
exports.NOTIFICATION_FROM_BACKEND = 37;
