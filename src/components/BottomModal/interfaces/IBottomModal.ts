import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export default interface IBottomModal {
  children: React.ReactNode,
  visible: boolean,
  containerStyle?: StyleProp<ViewStyle>,
  contentStyle?: StyleProp<ViewStyle>,
  contentWrapperStyle?: StyleProp<ViewStyle>,
}
