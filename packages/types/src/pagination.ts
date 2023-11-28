// TODO refactor with IPagination from 'types-root/common' after
// https://trello.com/c/TjQlDT7F/4-fix-pagination-correctly-imports-types-commonts done
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