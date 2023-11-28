export interface IReportCancellationFee {
    _id: string;
    amount: number;
    tasker: ITasker;
    date: Date;
    reason: string;
}
export interface ITasker {
    _id: string;
    phone: string;
    name: string;
}
