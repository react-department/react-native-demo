import type React from 'react';
import type { TextStyle } from 'react-native';
import type { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import type { StyleProp, ViewStyle } from 'react-native/types';

export type TBaseButtonThemes =
  'white' |
  'black' |
  'transparent';

export default interface IBaseButton {
  children?: React.ReactNode,
  onPress?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>,
  contentStyle?: StyleProp<ViewStyle>,
  textContainerStyle?: StyleProp<ViewStyle>,
  titleStyle?: StyleProp<TextStyle>,
  placeholderStyle?: StyleProp<TextStyle>,
  disabled?: boolean,
  theme?: TBaseButtonThemes,
  renderLeftIcon?: (color?: string) => React.ReactNode,
  renderRightIcon?: (color?: string) => React.ReactNode,
  placeholder?: string | React.ReactNode,
  isChildrenComponent?: boolean,
  withBorderGradient?: boolean,
  isPlaceholderComponent?: boolean,
  hitSlop?: {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
  },
}
