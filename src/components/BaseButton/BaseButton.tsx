import React from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import {
  BLACK, TRANSPARENT, WHITE,
} from '../../constants/general';
import CustomText from '../CustomText/CustomText';

import type TTheme from '../../theme/interfaces/TTheme';
import type IBaseButton from './interfaces/IBaseButton';

function BaseButton({
  children,
  placeholder,
  isChildrenComponent,
  isPlaceholderComponent,
  onPress,
  onPressOut,
  style,
  contentStyle,
  textContainerStyle,
  titleStyle,
  placeholderStyle,
  renderLeftIcon,
  renderRightIcon,
  disabled,
  hitSlop,
  withBorderGradient = false,
  theme = TRANSPARENT,
}: IBaseButton) {
  const { colors } = useTheme() as TTheme;

  const backgroundColorMap = {
    [WHITE]: colors.white,
    [BLACK]: colors.black,
    [TRANSPARENT]: colors.backgroundTransparent,
  };

  const textColor = theme === BLACK ? colors.white : colors.black;

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: backgroundColorMap[theme],
      paddingHorizontal: 16,
      paddingVertical: 6,
      overflow: 'hidden',
    },
    text: {
      color: textColor,
      fontWeight: '600',
      fontFamily: 'Urbanist-SemiBold',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowWithBorderGradient: {
      backgroundColor: colors.white,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftIcon: {
      marginRight: 4,
    },
    rightIcon: {
      marginLeft: 4,
    },
    placeholder: {
      fontSize: 15,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressOut={onPressOut}
      style={StyleSheet.flatten([styles.button, style])}
      disabled={disabled}
      hitSlop={hitSlop}
    >
      <View style={StyleSheet.flatten([withBorderGradient ? styles.rowWithBorderGradient : styles.row, contentStyle])}>
        {renderLeftIcon && (
        <View style={styles.leftIcon}>
          {renderLeftIcon(textColor)}
        </View>
        )}

        <View style={textContainerStyle}>
          {isChildrenComponent ? children : (
            <CustomText style={StyleSheet.flatten([styles.text, titleStyle])}>
              {children}
            </CustomText>
          )}

          {!!placeholder && (
            isPlaceholderComponent ? placeholder : (
              <CustomText style={StyleSheet.flatten([styles.placeholder, placeholderStyle])}>
                {placeholder}
              </CustomText>
            )
          )}
        </View>
      </View>

      {renderRightIcon && (
        <View style={styles.rightIcon}>
          {renderRightIcon(textColor)}
        </View>
      )}
    </TouchableOpacity>
  );
}

export default BaseButton;
