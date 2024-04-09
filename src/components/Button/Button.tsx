import React, { useMemo } from 'react';
import {
  ActivityIndicator, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import {
  BLACK, GRADIENT, GREY, IS_IOS,
  LIGHT_GREY, ORANGE, RED, TRANSPARENT_20PERCENT,
  TRANSPARENT_45PERCENT, WHITE,
} from '../../constants/general';
import CustomText from '../CustomText/CustomText';

import type TTheme from '../../theme/interfaces/TTheme';
import type IButton from './interfaces/IButton';

function Button({
  title,
  onPress,
  disabled,
  theme,
  style,
  textStyle,
  cornerColor: cornerColorProp,
  renderLeftIcon,
  isLoading,
}: IButton) {
  const { colors } = useTheme() as TTheme;

  const cornerColor = useMemo(() => {
    const cornerColorMap: { [key: string]: string } = {
      [WHITE]: colors.black,
      [TRANSPARENT_20PERCENT]: colors.fontPrimary,
      [TRANSPARENT_45PERCENT]: colors.fontPrimary,
    };
    return cornerColorProp || (theme ? cornerColorMap[theme] || colors.background : colors.background);
  }, [theme, cornerColorProp]);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 48,
    },
    wrapper: {
      flex: 1,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    whiteButton: {
      backgroundColor: colors.white,
    },
    blackButton: {
      backgroundColor: colors.black,
    },
    disabledButton: {
      backgroundColor: colors.grey,
    },
    redButton: {
      backgroundColor: colors.red,
    },
    orangeButton: {
      backgroundColor: colors.orange,
    },
    lightGreyButton: {
      backgroundColor: colors.backgroundGhost,
    },
    transparent20: {
      backgroundColor: colors.backgroundTransparent20Percent,
    },
    transparent45: {
      backgroundColor: colors.backgroundTransparent45Percent,
    },
    leftCorner: {
      zIndex: 1,
      position: 'absolute',
      width: 0,
      height: 0,
      borderRightWidth: 15,
      borderTopWidth: 15,
      borderRightColor: 'transparent',
      borderTopColor: cornerColor,
    },
    rightCorner: {
      zIndex: 1,
      position: 'absolute',
      width: 0,
      height: 0,
      borderLeftWidth: 15,
      borderBottomWidth: 15,
      borderLeftColor: 'transparent',
      borderBottomColor: cornerColor,
      right: 0,
      bottom: 0,
    },
    text: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontFamily: 'Urbanist-SemiBoldItalic',
      fontSize: 17,
      lineHeight: 24,
      color: colors.fontSecondary,
    },
    whiteButtonText: {
      color: colors.fontPrimary,
    },
    blackButtonText: {
      color: colors.fontSecondary,
    },
    disabledText: {
      color: colors.fontDisable,
    },
    lightGreyText: {
      color: colors.fontPrimary,
      fontWeight: IS_IOS ? '700' : undefined,
      fontFamily: 'Urbanist-BoldItalic',
      fontSize: 15,
    },
    leftIcon: {
      marginRight: 8,
    },
  });

  const colorIcon = useMemo(() => {
    const iconColorMap: { [key: string]: string } = {
      [WHITE]: colors.fontPrimary,
      [BLACK]: colors.fontSecondary,
      [GREY]: colors.fontPrimary,
      [RED]: colors.fontSecondary,
      [LIGHT_GREY]: colors.fontPrimary,
      [GRADIENT]: colors.fontSecondary,
      [ORANGE]: colors.fontSecondary,
    };
    return disabled ? colors.fontDisable : iconColorMap[theme || ''] || colors.fontPrimary;
  }, [theme, disabled]);

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <View style={styles.leftCorner} />
      <TouchableOpacity style={styles.wrapper} onPress={onPress} disabled={disabled}>
        <View
          style={StyleSheet.flatten([
            styles.button,
            theme === WHITE && styles.whiteButton,
            theme === BLACK && styles.blackButton,
            theme === GREY && styles.disabledButton,
            theme === RED && styles.redButton,
            theme === LIGHT_GREY && styles.lightGreyButton,
            theme === TRANSPARENT_20PERCENT && styles.transparent20,
            theme === TRANSPARENT_45PERCENT && styles.transparent45,
            theme === ORANGE && styles.orangeButton,
            disabled && styles.disabledButton,
          ])}
        >
          {renderLeftIcon && (
          <View style={styles.leftIcon}>
            {renderLeftIcon(colorIcon)}
          </View>
          )}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <CustomText
              style={StyleSheet.flatten([
                styles.text,
                theme === WHITE && styles.whiteButtonText,
                theme === BLACK && styles.blackButtonText,
                theme === GREY && styles.whiteButtonText,
                theme === RED && styles.blackButtonText,
                theme === LIGHT_GREY && styles.lightGreyText,
                theme === ORANGE && styles.blackButtonText,
                textStyle,
                disabled && styles.disabledText,
              ])}
            >
              {title}
            </CustomText>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.rightCorner} />
    </View>
  );
}

Button.defaultProps = {
  theme: GRADIENT,
};

export default Button;
