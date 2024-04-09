import type IBaseQueryPaginationResult from '../../store/types/IBaseQueryPaginationResult';

export interface IPaginationData<T> extends IBaseQueryPaginationResult<T[]> {}
export interface IQueryArgs {
  page?: number;
}
export interface IPaginationSerializeQueryArgs {
  endpointName: string;
  queryArgs: IQueryArgs;
}
export interface IPaginationForceRefetch {
  currentArg?: IQueryArgs;
  previousArg?: IQueryArgs;
}
