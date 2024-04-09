import { GET, POSTS } from '../../../../constants/requestUrls';
import { paginationForceRefetch, paginationMerge, paginationSerializeQueryArgs } from '../../../../utils/storeHelpers';
import mainApi from '../../../apis/mainApi';

import type IBaseQueryPaginationResult from '../../../types/IBaseQueryPaginationResult';
import type { TPost } from '../interfaces/TPost';

export const authGame7Api = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<
    IBaseQueryPaginationResult<TPost[], { currentPage: number, isLastPage?: boolean }>,
    { page: number, perPage: number }>({
      query: ({ page, perPage }) => {
        return ({
          url: POSTS,
          method: GET,
          params: {
            page,
            _start: page === 1 ? 0 : page * perPage,
            _limit: perPage,
          },
        });
      },
      merge: paginationMerge,
      serializeQueryArgs: paginationSerializeQueryArgs,
      forceRefetch: paginationForceRefetch,
      transformResponse: (data: TPost[], meta, params) => ({
        data: [...data],
        meta: {
          currentPage: params.page,
          isLastPage: data.length < params.perPage,
        },
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
} = authGame7Api;
