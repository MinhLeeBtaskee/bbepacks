import { IFilterTemplate } from '@bbepacks/types';
export declare const NOTIFICATION_TYPES: {
    label: string;
    value: number;
}[];
export declare const TEMPLATE_LANGUAGES: {
    value: string;
    label: string;
}[];
export declare const TEMPLATE_TEAMS_MAP: {
    'customer-service': string;
    tasker: string;
    marketing: string;
};
export type TYPE_TEMPLATE_TEAMS_MAP = (keyof typeof TEMPLATE_TEAMS_MAP)[];
export declare const TEMPLATE_FILTER_DEFAULT: IFilterTemplate;
export declare const NOTIFICATION_FILTER_TYPES: {
    label: string;
    value: string;
}[];
export declare const NOTIFICATION_FROM_BACKEND = 37;
