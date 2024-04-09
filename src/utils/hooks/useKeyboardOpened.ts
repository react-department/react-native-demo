import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import { IS_IOS } from '../../constants/general';

const useKeyboardOpened = () => {
  const [isOpened, setKeyboardIsOpened] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener(IS_IOS ? 'keyboardWillShow' : 'keyboardDidShow', () => {
      setKeyboardIsOpened(true);
    });
    const hideSubscription = Keyboard.addListener(IS_IOS ? 'keyboardWillHide' : 'keyboardDidHide', () => {
      setKeyboardIsOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return isOpened;
};

export default useKeyboardOpened;
