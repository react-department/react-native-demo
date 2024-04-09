import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type ILocalStoreStore from './interfaces/ILocalStore';

export const initialState: ILocalStoreStore = {
  isWelcomeScreenPassed: false,
};

export const localStoreSlice = createSlice({
  name: 'localStore',
  initialState,
  reducers: {
    setLocalStoreState: (state, action: PayloadAction<Partial<ILocalStoreStore>>) => {
      return { ...state, ...action.payload };
    },
    clearLocalStore: () => {
      return { ...initialState };
    },
  },
  extraReducers: () => {},
});

export const {
  setLocalStoreState,
} = localStoreSlice.actions;

export default localStoreSlice.reducer;
