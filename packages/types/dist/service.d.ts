export interface IService {
    name: string;
    weight: number;
    isTesting: boolean;
    isSubscription: boolean;
    city: {
        name: string;
        district: Array<string>;
    };
    isNewService: boolean;
}
