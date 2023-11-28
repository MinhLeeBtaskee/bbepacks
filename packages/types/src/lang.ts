export interface ITextLang {
  vi: string;
  en: string;
  th: string;
  ko?: string;
  id?: string;
}

export type ITextLangRelease = Required<ITextLang>;

export type TLanguage = keyof ITextLang;
