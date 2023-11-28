import { ITextLang } from './lang';
export interface IDeTailWashingMachineForm {
    name: string;
    weightLevel: string;
    options: {
        name: string;
    }[];
}
export interface IDetailWashingMachineItem {
    name: string;
    text: ITextLang;
    type: {
        name: string;
        text: ITextLang;
        options?: {
            name: string;
            text: ITextLang;
        }[];
    };
}
export interface IFetchWashingMachinePrice {
    detailWashingMachine: IDetailWashingMachineItem[];
    task: {
        date: Date;
        taskPlace: {
            country: string;
            city: string;
            district: string;
        };
        serviceId: string;
        duration: number;
        autoChooseTasker: boolean;
        isoCode: string;
        askerId: string;
        homeType: string;
        createdAt: Date;
    };
}
export interface IFetchUpdateWashingMachine {
    taskId: string;
    detailWashingMachine: IDetailWashingMachineItem[];
}
