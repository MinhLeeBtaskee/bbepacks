export interface ITaskUsePromotionCode {
    _id: string;
    costDetail: {
        cost: number;
        finalCost: number;
    };
    createdAt: Date;
    originCurrency: {
        sign: string;
    };
    promotionCode: string;
    promotionValue: {
        type: string;
        value: number;
        maxValue: number;
    };
    users: {
        name: string;
        phone: string;
    };
}
