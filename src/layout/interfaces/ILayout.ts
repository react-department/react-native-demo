import type { StyleProp, ViewStyle } from 'react-native/types';

export default interface ILayout {
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>
  safeAreaBottom?: boolean
  safeAreaTop?: boolean
}
