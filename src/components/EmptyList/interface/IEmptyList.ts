import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export default interface IEmptyList {
  icon: ReactElement
  text: string
  style?: StyleProp<ViewStyle>
  styleText?: StyleProp<ViewStyle>
}
