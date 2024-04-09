import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import * as queryString from 'query-string';

import { INTERNAL_SERVER_ERROR, UNAUTHORIZED } from '../../constants/httpStatus';
import { API_BASE_URL } from '../../constants/protectedConstants';
import {
  AUTH_REFRESH_TOKEN,
  POST,
} from '../../constants/requestUrls';
import { getFullVersion } from '../../utils/version';
import { logout, setTokens } from '../slices/tokens/slice';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/dist/query/react';
import type IError from '../types/IError';
import type { RootState } from '../types/TStore';

const authBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).tokens;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    headers.set('timezone', `${new Date().getTimezoneOffset()}`);
    headers.set('x-app-version', getFullVersion());
    return headers;
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

const mutex = new Mutex();
export const appBaseQueryWithReauth: BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await authBaseQuery(args, api, extraOptions);
  if (result.error) {
    const { status } = result.error;
    if (status === UNAUTHORIZED) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          const {
            tokens: {
              refreshToken,
            },
          } = api.getState() as RootState;
          const refreshResult = await authBaseQuery({
            url: AUTH_REFRESH_TOKEN,
            method: POST,
            body: {
              refreshToken,
            },
          }, api, extraOptions);
          const { data } = refreshResult as { data: { data: { accessToken: string, refreshToken: string } } };
          if (data) {
            api.dispatch(setTokens({
              accessToken: data.data.accessToken,
              refreshToken: data.data.refreshToken,
            }));

            result = await authBaseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
            // Navigate to AUTH
          }
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await authBaseQuery(args, api, extraOptions);
      }
    } else if (+status >= INTERNAL_SERVER_ERROR
      || ('originalStatus' in result.error && +result.error.originalStatus >= INTERNAL_SERVER_ERROR)
    ) {
      // Navigate to error screen
    }
  }
  return result;
};

const mainApi = createApi({
  reducerPath: 'mainApi',
  tagTypes: [],
  baseQuery: appBaseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, IError, object>,
  endpoints: () => ({}),
});

export default mainApi;
