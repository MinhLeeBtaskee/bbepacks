export interface IHistoryPayoutToTasker {
    name: string;
    phone: string;
    city: string;
    createdAt: Date;
    taskerId: string;
    amount: number;
    status: string;
    updatedAt: Date;
    tasker: {
        avatar: string;
        isoCode: string;
        status: string;
        TCBankNumber: string;
    };
}
