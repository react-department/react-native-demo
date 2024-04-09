import type React from 'react';
import type { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { StyleProp, ViewStyle } from 'react-native/types';
import type { TButtonThemes } from './TButtonThemes';

export default interface IButton {
  title: React.ReactNode,
  onPress: () => void,
  disabled?: boolean,
  theme?: TButtonThemes,
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  cornerColor?: string,
  renderLeftIcon?: (color?: string) => React.ReactNode,
  isLoading?: boolean
}
