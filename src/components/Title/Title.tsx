import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { IS_IOS } from '../../constants/general';
import CustomText from '../CustomText/CustomText';

import type TTheme from '../../theme/interfaces/TTheme';
import type ITitle from './interfaces/ITitle';

function Title({ title, style }: ITitle) {
  const { colors } = useTheme() as TTheme;
  const styles = StyleSheet.create({
    text: {
      color: colors.titleFont,
      fontSize: 28,
      lineHeight: 36,
      fontWeight: IS_IOS ? '700' : undefined,
      fontFamily: 'Urbanist-Bold',
    },
  });
  return (
    <CustomText style={StyleSheet.flatten([styles.text, style])}>{title}</CustomText>
  );
}

export default Title;
