import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selfGeneral = (state: RootState) => state.general;

export const appSelector = createSelector(
  [selfGeneral],
  ({ isDisconnected }) => ({
    isDisconnected,
  }),
);

export const initialRouteSelector = createSelector(
  [selfGeneral],
  ({ initialRoute }) => initialRoute,
);

export const topNotificationSelector = createSelector(
  [selfGeneral],
  ({ topNotification }) => topNotification,
);

export const isBootSplashPassedSelector = createSelector(
  [selfGeneral],
  ({ isBootSplashPassed }) => isBootSplashPassed,
);
