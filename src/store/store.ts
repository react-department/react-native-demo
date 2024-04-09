import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';

import { APP_STATE_STATUS_ACTIVE } from '../constants/general';
import mainApi from './apis/mainApi';
import general, { setGeneralState } from './slices/general/slice';
import localStore from './slices/localStore/slice';
import posts from './slices/posts/slice';
import tokens from './slices/tokens/slice';
import translates from './slices/translates/slice';

import type { NetInfoState } from '@react-native-community/netinfo';
import type { AppStateStatus } from 'react-native';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['tokens', 'localStore'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    translates,
    general,
    tokens,
    localStore,
    posts,
  }),
);

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: Object.keys(preloadedState).length ? preloadedState : undefined,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat([
        mainApi.middleware,
      ]),
  });
}
export const store = makeStore();

let appState: AppStateStatus | undefined;
let appOnline: boolean | undefined | null;

setupListeners(store.dispatch, (dispatch, actions) => {
  const handleOnline = (state: NetInfoState) => {
    if (state.isConnected && appOnline !== state.isConnected) {
      dispatch(actions.onOnline());
      dispatch(setGeneralState({ isDisconnected: false }));
    } else if (!state.isConnected && appOnline !== state.isConnected) {
      dispatch(actions.onOffline());
      dispatch(setGeneralState({ isDisconnected: true }));
    }
    appOnline = state.isConnected;
  };

  const handleAppState = (nextAppState: AppStateStatus) => {
    if (appState !== nextAppState) {
      if (
        nextAppState === APP_STATE_STATUS_ACTIVE
      ) {
        dispatch(actions.onFocus());
      } else {
        dispatch(actions.onFocusLost());
      }
      appState = nextAppState;
    }
  };

  const subscriptionOnline = NetInfo.addEventListener(handleOnline);
  const subscriptionAppState = AppState.addEventListener('change', handleAppState);

  return () => {
    subscriptionOnline();
    subscriptionAppState.remove();
  };
});

export const persistor = persistStore(store);
