import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import i18next, { appLocales } from '../../../i18n';

export const initialState = {
  locale: i18next.language,
  isLoading: false,
};

export const toggleLocaleAsync = createAsyncThunk(
  'translates/toggleLocale',
  async () => {
    const nextLocaleIndex = appLocales.indexOf(i18next.language) + 1;
    const locale = nextLocaleIndex >= appLocales.length ? appLocales[0] : appLocales[nextLocaleIndex];
    await i18next.changeLanguage(locale);
    await AsyncStorage.setItem('language', locale);
    return locale;
  },
);

export const translatesSlice = createSlice({
  name: 'translates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleLocaleAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleLocaleAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locale = action.payload;
      });
  },
});

export default translatesSlice.reducer;
