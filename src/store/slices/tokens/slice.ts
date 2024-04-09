import { createAction, createSlice } from '@reduxjs/toolkit';

import type ITokens from './interfaces/ITokens';

export const logout = createAction('logout');

export const initialState: ITokens = {
  accessToken: '',
  refreshToken: '',
};

export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return {
        ...initialState,
      };
    });
  },
});

export const {
  setTokens,
} = tokensSlice.actions;

export default tokensSlice.reducer;
