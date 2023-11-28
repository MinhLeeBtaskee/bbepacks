import { ITextLang } from './lang';
export interface IName {
    name: string;
    text: ITextLang;
    quantity: number;
}
export interface IType {
    type: number;
    text: ITextLang;
    quantity: number;
}
export interface ISofaCleaning {
    detailSofa: {
        sofa: Array<{
            name: string;
            text: ITextLang;
            typeSofa: IName[];
            stool: IName[];
        }>;
        mattress: IType[];
        curtain: {
            dryclean: IName[];
            washing: Partial<IType>[];
        };
        carpet: IType[];
    };
}
