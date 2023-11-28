import { ITextLang } from './lang';
export interface IBonus {
    id: string;
    name: string;
    text: ITextLang;
    image: string;
}
export interface ITraining {
    name: string;
    text: ITextLang;
}
