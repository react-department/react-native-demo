import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import type ILayout from './interfaces/ILayout';

function Layout({
  children, style, safeAreaBottom, safeAreaTop,
}: ILayout) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.background,
      ...(safeAreaBottom && { paddingBottom: insets.bottom }),
      ...(safeAreaTop && { paddingTop: insets.top }),
    },
  });

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {children}
    </View>
  );
}

export default Layout;
