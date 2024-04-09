import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks/useApp';
import { initialRouteSelector, isBootSplashPassedSelector } from '../../store/slices/general/selectors';
import { setGeneralState } from '../../store/slices/general/slice';
import BootSplashView from './BootSplashView';

function BootSplash() {
  const dispatch = useAppDispatch();
  const initialRoute = useAppSelector(initialRouteSelector);
  const isBootSplashPassed = useAppSelector(isBootSplashPassedSelector);

  useEffect(() => {
    setTimeout(async () => {
      dispatch(setGeneralState({
        isBootSplashPassed: true,
      }));
    }, 3000);
  }, []);

  useEffect(() => {
    if (isBootSplashPassed) {
      const init = async () => {
        // const check = await checkVersion({
        //   version: DeviceInfo.getVersion(),
        //   iosStoreURL: STORE_IOS_URL,
        //   androidStoreURL: STORE_ANDROID_URL,
        //   country: 'us',
        // });
        // if (check.result === NEW_LABEL) {
        //   navigationReset(''); // Route Name For Need Update App Message
        // }
      };

      init();
    }
  }, [isBootSplashPassed, initialRoute]);

  return (
    <BootSplashView />
  );
}

export default BootSplash;
