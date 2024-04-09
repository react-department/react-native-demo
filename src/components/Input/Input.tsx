import React, { useState } from 'react';
import {
  Pressable, StyleSheet, Text,
  View,
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import { useTheme } from '@react-navigation/native';

import { ZERO } from '../../constants/general';
import CustomText from '../CustomText/CustomText';

import type { Ref } from 'react';
import type { TextInput } from 'react-native';
import type TTheme from '../../theme/interfaces/TTheme';
import type IInput from './interfaces/IInput';

import EyeClosedIcon from '../../assets/images/svg/eyeClosed.svg';
import EyeOpenIcon from '../../assets/images/svg/eyeOpen.svg';

function Input({
  placeholder,
  value,
  onChangeText,
  withEye,
  containerStyle,
  textContentType,
  mask,
  icon,
  inputStyle,
  autoCapitalize,
  disabled,
  autoCorrect,
  iconRight,
  onPressIconRight,
  onFocus,
  isError,
  maskAutoComplete,
  autoComplete,
  keyboardType,
  maxLength,
  onBlur,
  editable,
  borderColorStyle,
  borderFocusColorStyle,
  multiline,
  showSoftInputOnFocus = true,
  withoutTopLabel = false,
  returnKeyType,
  autoFocus,
  onSubmitEditing,
  withCounter,
}: IInput, ref: Ref<TextInput>) {
  const { colors } = useTheme() as TTheme;

  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(withEye);

  const borderColor = () => {
    let color = borderColorStyle || colors.grey;
    if (disabled) {
      color = colors.background;
    }
    if (isFocused) {
      color = borderFocusColorStyle || colors.fontPrimary;
    }
    return color;
  };

  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      width: '100%',
      borderColor: borderColor(),
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 16,
      backgroundColor: disabled ? colors.backgroundGhost : colors.background,
    },
    input: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 14,
      paddingBottom: 12,
      fontFamily: 'Urbanist',
      fontWeight: '500',
      fontSize: 17,
      color: disabled ? colors.fontDisable : colors.fontPrimary,
    },
    placeholder: {
      position: 'absolute',
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 16,
      color: isError ? colors.fontError : colors.fontInactive,
      left: 16,
      top: -8,
      backgroundColor: colors.background,
    },
    counter: {
      position: 'absolute',
      right: 16,
      fontFamily: 'Urbanist',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14,
      color: colors.fontDisable,
    },
  });

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {!withoutTopLabel && value && (
        <CustomText style={styles.placeholder}>{placeholder}</CustomText>
      )}
      {icon}
      {disabled ? (
        <Text style={StyleSheet.flatten([styles.input, inputStyle])}>
          {value}
        </Text>
      ) : (
        <MaskInput
          value={value}
          onChangeText={onChangeText}
          style={StyleSheet.flatten([styles.input, inputStyle])}
          placeholder={placeholder}
          placeholderTextColor={colors.fontInactive}
          onFocus={() => {
            setIsFocused(true);
            if (onFocus) {
              onFocus();
            }
          }}
          onBlur={() => {
            setIsFocused(false);
            if (onBlur) {
              onBlur();
            }
          }}
          secureTextEntry={isHidden}
          textContentType={textContentType}
          mask={mask}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          showSoftInputOnFocus={showSoftInputOnFocus}
          maskAutoComplete={maskAutoComplete}
          autoComplete={autoComplete}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
        />
      )}

      {withEye && (
        <Pressable onPress={() => setIsHidden((prevValue) => !prevValue)}>
          {isHidden ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </Pressable>
      )}

      {iconRight && (
        <Pressable onPress={onPressIconRight} disabled={disabled}>
          {iconRight}
        </Pressable>
      )}

      {withCounter && (
        <Text style={styles.counter}>
          {value?.length || ZERO}
          {`/${maxLength}`}
        </Text>
      )}
    </View>
  );
}

export default React.forwardRef(Input);
