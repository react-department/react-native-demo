import { Keyboard } from 'react-native';

const dismissKeyboard = () => new Promise((resolve) => {
  if (Keyboard.isVisible()) {
    Keyboard.dismiss();
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      keyboardDidHideListener.remove();
      resolve(null);
    });
  } else {
    resolve(null);
  }
});

export default dismissKeyboard;
