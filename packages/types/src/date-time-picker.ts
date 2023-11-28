import { IDatePickerFormatted } from './common';

export interface OnChangeDateTimePickerOptionalProp {
  date?: Date | null;
  rangeDate: [Date, Date] | null;
  picker: IDatePickerFormatted;
}

export type IOnChangeDateTimePickerOptional = (
  args: OnChangeDateTimePickerOptionalProp
) => void;
