import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import CustomText from '../CustomText/CustomText';

import type TTheme from '../../theme/interfaces/TTheme';
import type IIconItem from './Interfaces/IIconItem';

function IconItem({ Icon, name }: IIconItem) {
  const { colors } = useTheme() as TTheme;
  const style = StyleSheet.create({
    item: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '30%',
    },
  });
  return (
    <View style={style.item}>
      <Icon color={colors.iconSecondary} width={40} height={40} />
      <CustomText>{name}</CustomText>
    </View>
  );
}
export default IconItem;
