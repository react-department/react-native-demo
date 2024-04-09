import { batch } from 'react-redux';

import mainApi from '../store/apis/mainApi';

import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type IError from '../store/types/IError';
import type { AppDispatch } from '../store/types/TStore';

export const checkErrorType = (error: FetchBaseQueryError | SerializedError | undefined): error is IError => (
  !!error && 'data' in error
);

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined): string | undefined => {
  let result;

  if (checkErrorType(error)) {
    result = `${error.data.error.message}`;
  }

  return result;
};

export const resetApiCache = (dispatch: AppDispatch): void => { // Example on logout
  batch(() => {
    dispatch(mainApi.util.resetApiState());
  });
};
