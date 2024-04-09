import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function TabBar({
  state, descriptors, navigation, insets,
}: BottomTabBarProps) {
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
  });

  return (
    <View>
      <BottomTabBar
        state={state}
        navigation={navigation}
        descriptors={descriptors}
        insets={insets}
        style={styles.container}
      />
    </View>
  );
}

export default TabBar;
