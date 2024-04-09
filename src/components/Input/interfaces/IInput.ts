import type { ReactElement } from 'react';
import type { KeyboardTypeOptions } from 'react-native';
import type { TextInputSubmitEditingEventData } from 'react-native/Libraries/Components/TextInput/TextInput';
import type { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import type { StyleProp, ViewStyle } from 'react-native/types';
import type { MaskArray } from 'react-native-mask-input';
import type { TAutoCompleteTypes } from '../../../constants/general';

export default interface IInput {
  placeholder: string
  value: string
  onChangeText?: (maskedText: string, text: string) => void
  withEye?: boolean
  containerStyle?: ViewStyle
  textContentType?: 'telephoneNumber' | undefined
  mask?: (text?: string | undefined) => MaskArray
  icon?: ReactElement
  inputStyle?: StyleProp<ViewStyle | TextStyle>
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  disabled?: boolean
  autoCorrect?: boolean
  iconRight?: ReactElement
  onPressIconRight?: () => void
  onFocus?: () => void
  showSoftInputOnFocus?: boolean
  isError?: boolean
  maskAutoComplete?: boolean
  autoComplete?: TAutoCompleteTypes
  keyboardType?: KeyboardTypeOptions
  maxLength?: number
  onBlur?: () => void
  editable?: boolean
  withoutTopLabel?: boolean
  borderColorStyle?: string
  borderFocusColorStyle?: string,
  multiline?: boolean
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
  autoFocus?: boolean
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
  withCounter?: boolean
}
