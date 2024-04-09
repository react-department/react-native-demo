import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import CustomText from '../CustomText/CustomText';

import type TTheme from '../../theme/interfaces/TTheme';
import type IEmptyList from './interface/IEmptyList';

function EmptyList({
  icon, text, style, styleText,
}: IEmptyList) {
  const { colors } = useTheme() as TTheme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
    },
    text: {
      marginTop: 16,
      textAlign: 'center',
      color: colors.fontDisable,
    },
  });

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {icon}
      <CustomText style={StyleSheet.flatten([styles.text, styleText])}>{text}</CustomText>
    </View>
  );
}

export default EmptyList;
