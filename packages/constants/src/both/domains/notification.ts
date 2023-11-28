// TODO
// import { IFilterTemplate } from 'types-root/notification';
type IFilterTemplate = any;

export const NOTIFICATION_TYPES = [
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

export const TEMPLATE_LANGUAGES = [
  {
    value: 'vi',
    label: 'Tiếng Việt',
  },
  {
    value: 'th',
    label: 'ไทย',
  },
];

export const TEMPLATE_TEAMS_MAP = {
  'customer-service': 'Customer Service',
  tasker: 'Tasker',
  marketing: 'Marketing',
};

export type TYPE_TEMPLATE_TEAMS_MAP = (keyof typeof TEMPLATE_TEAMS_MAP)[];

export const TEMPLATE_FILTER_DEFAULT: IFilterTemplate = {
  type: 301,
  country: 'all',
  city: 'all',
  district: ['all'],
  service: ['all'],
  status: 'all',
  phone: '',
};

export const NOTIFICATION_FILTER_TYPES = [
  {
    label: 'Bulk filter',
    value: 'filter',
  },
  {
    label: 'Phone filter',
    value: 'phone',
  },
];
export const NOTIFICATION_FROM_BACKEND = 37;
