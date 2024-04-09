import type { QueryLifecycleApi } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/dist/query/react';
import type IError from '../../store/types/IError';

export type TClearDataOnError =
  QueryLifecycleApi<unknown, BaseQueryFn<string | FetchArgs, unknown, IError, object>, unknown | null, 'mainApi'>;
