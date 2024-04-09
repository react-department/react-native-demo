import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import type TTheme from '../../theme/interfaces/TTheme';
import type ICustomText from './interfaces/ICustomText';

function CustomText({
  children, style, numberOfLines, ellipsizeMode, onPress,
}: ICustomText) {
  const { colors } = useTheme() as TTheme;
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Urbanist',
      fontWeight: '500',
      fontSize: 17,
      lineHeight: 24,
      color: colors.fontInactive,
    },
  });

  return (
    <Text
      style={StyleSheet.flatten([styles.text, style])}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}

export default CustomText;
