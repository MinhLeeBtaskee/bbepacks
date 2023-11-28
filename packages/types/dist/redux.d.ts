export interface ICommonState {
    loading: boolean;
    total?: number;
}
export interface IAskerInactiveUnverifiedReducer extends ICommonState {
    params: any;
    data: any;
}
