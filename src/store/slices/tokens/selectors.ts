import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selfTokens = (state: RootState) => state.tokens;

export const isUserLoggedInSelector = createSelector(
  [selfTokens],
  (tokens) => !!tokens.accessToken,
);

export const accessTokenSelector = createSelector(
  [selfTokens],
  ({ accessToken }) => accessToken,
);
