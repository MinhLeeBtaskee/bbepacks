export interface IReportSupportGas {
    _id: string;
    amount: number;
    reason: string;
    createdAt: Date;
    updatedAt: Date;
    tasker: ITasker;
}
export interface ITasker {
    _id: string;
    phone: string;
    name: string;
}
