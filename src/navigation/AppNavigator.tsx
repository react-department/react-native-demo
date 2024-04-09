import React, { useEffect, useRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import CodePushManager from '../components/CodePushManager/CodePushManager';
import InternetLostModal from '../components/InternetLostModal/InternetLostModal';
import Notification from '../components/Notification/Notification';
import { useAppSelector } from '../store/hooks/useApp';
import {
  appSelector, isBootSplashPassedSelector, topNotificationSelector,
} from '../store/slices/general/selectors';
import theme from '../theme/theme';
import useUniqueId from '../utils/hooks/useUniqueId';
import navigationReset from '../utils/navigationReset';
import MainStackNavigator from './MainStackNavigator';
import navigationRef from './RootNavigation';

function AppNavigator() {
  const topNotification = useAppSelector(topNotificationSelector);
  const isBootSplashPassed = useAppSelector(isBootSplashPassedSelector);
  const { isDisconnected } = useAppSelector(appSelector);

  const isBootSplashPassedRef = useRef<boolean>(isBootSplashPassed);

  useUniqueId();

  useEffect(() => {
    isBootSplashPassedRef.current = isBootSplashPassed;
  }, [isBootSplashPassed]);

  const navigationResetWithBootsplash = () => {
    if (isBootSplashPassedRef.current) {
      navigationReset([
        { name: 'BottomTabNavigator', params: { screen: 'Home' } },
      ]);
    }
  };

  useEffect(() => {
    navigationResetWithBootsplash();
  }, [isBootSplashPassed]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} ref={navigationRef}>
        <Notification
          visible={!!topNotification}
          text={topNotification?.text || ''}
          type={topNotification?.type}
          showAlways={topNotification?.showAlways}
          withLeftIcon={topNotification?.withLeftIcon}
        />
        <MainStackNavigator />
        <InternetLostModal isModalOpen={isDisconnected} />
      </NavigationContainer>
      <CodePushManager />
    </SafeAreaProvider>
  );
}

export default AppNavigator;
