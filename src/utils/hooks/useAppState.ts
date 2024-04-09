import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';

import { APP_STATE_STATUS_ACTIVE } from '../../constants/general';

// set disable=true when getting permission request
// android trigger AppState.addEventListener when requesting permission
function useAppState(onAppStateActive?: () => void, disable?: boolean) {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current !== APP_STATE_STATUS_ACTIVE
        && nextAppState === APP_STATE_STATUS_ACTIVE && !disable
      ) {
        if (onAppStateActive) {
          onAppStateActive();
        }
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [onAppStateActive, disable]);
  return appStateVisible;
}

export default useAppState;
