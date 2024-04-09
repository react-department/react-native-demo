import { CommonActions } from '@react-navigation/native';

import navigationRef from '../navigation/RootNavigation';

import type TNavigationParams from '../navigation/types/TNavigationParams';
import type TNavigationRoute from '../navigation/types/TNavigationRoute';

const navigationReset = (routes: TNavigationRoute[] | string, params?: TNavigationParams) => {
  if (typeof routes === 'string') {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routes, params }],
      }),
    );
  } else {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: routes.length - 1,
        routes,
      }),
    );
  }
};

export default navigationReset;
