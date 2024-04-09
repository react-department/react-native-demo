import './i18n';

import React, { Suspense } from 'react';
import { StatusBar, View } from 'react-native';

// import * as Sentry from '@sentry/react-native';
import { IS_IOS } from './constants/general';
import AppNavigator from './navigation/AppNavigator';

// Sentry.init({
//   dsn: SENTRY_DSN,
//   environment: SENTRY_ENVIRONMENT,
// });
function App() {
  return (
    <Suspense fallback={<View />}>
      <StatusBar
        barStyle={IS_IOS ? 'dark-content' : 'light-content'}
        backgroundColor="black"
      />
      <AppNavigator />
    </Suspense>
  );
}

export default App;
