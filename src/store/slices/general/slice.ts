import { createSlice } from '@reduxjs/toolkit';

import { logout } from '../tokens/slice';

import type { PayloadAction } from '@reduxjs/toolkit';
import type IGeneralStore from './interfaces/IGeneralStore';

export const initialState: IGeneralStore = {
  isDisconnected: false,
  initialRoute: undefined,
  topNotification: undefined,
  isBootSplashPassed: false,
  currentVisibleModal: '',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneralState: (state, action: PayloadAction<Partial<IGeneralStore>>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder): void => {
    builder
      .addCase(logout, (state) => {
        return {
          ...initialState,
          isBootSplashPassed: state.isBootSplashPassed,
        };
      });
  },
});

export const {
  setGeneralState,
} = generalSlice.actions;

export default generalSlice.reducer;
