import type IBaseQueryResult from './IBaseQueryResult';

type TMeta = {
  total: number,
  lastPage: number,
  currentPage: number,
  perPage: number,
  prev?: number | null,
  next?: number | null,
};

export default interface IBaseQueryPaginationResult<T, U = TMeta> extends IBaseQueryResult<T> {
  meta: U
}
