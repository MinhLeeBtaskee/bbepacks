export declare enum E_VAT_STATUS {
    NEW = "NEW",
    DONE = "DONE",
    PROCESSING = "PROCESSING"
}
export type IVatStatus = keyof typeof E_VAT_STATUS;
