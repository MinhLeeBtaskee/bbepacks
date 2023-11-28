export interface INewRefundAmountForm {
    newRefundAmount: number;
    reason: string;
}
export interface ITransactionAmount {
    transactionAmount: number;
}
export interface IRefundRequestItem {
    _id: string;
    currency: string;
}
