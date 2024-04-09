import type { StyleProp, TextProps, TextStyle } from 'react-native/types';

export default interface ICustomText extends TextProps {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
}
