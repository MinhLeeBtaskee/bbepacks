export interface IPagination {
    pageNumber: number;
    pageSize: number;
}
export type IParamsWithPagination<T> = T & IPagination;
export interface ISort {
    [key: string]: 1 | -1;
}
export interface IFilter {
    [key: string]: any;
}
export interface GetParamsPaginationReturn {
    skip: number;
    limit: number;
    sort?: ISort;
}
