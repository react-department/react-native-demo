import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  MaterialTabBar,
} from 'react-native-collapsible-tab-view';
import { useTheme } from '@react-navigation/native';

import TabBarContext from './TabBarContext';
import TabBarItem from './TabBarItem';

import type TTheme from '../../theme/interfaces/TTheme';
import type ITabBar from './interfaces/ITabBar';

function TabBar({
  tabContainerStyle, tabWithExclamation, ...props
}: ITabBar<string>) {
  const { colors } = useTheme() as TTheme;
  const styles = StyleSheet.create({
    tabContainerStyle: {
      backgroundColor: colors.card,
      paddingHorizontal: 16,
    },
    labelStyle: {
      fontFamily: 'Urbanist',
      fontWeight: '500',
      fontSize: 14,
      textTransform: 'none',
    },
    indicatorStyle: {
      backgroundColor: colors.black,
    },
    tabStyle: {
      flex: 0,
      paddingHorizontal: 16,
      paddingTop: 6,
      paddingBottom: 0,
    },
  });

  const contextValue = useMemo(() => (
    { tabWithExclamation }
  ), [tabWithExclamation]);

  return (
    <TabBarContext.Provider value={contextValue}>
      <MaterialTabBar
        {...props}
        TabItemComponent={TabBarItem}
        labelStyle={styles.labelStyle}
        indicatorStyle={styles.indicatorStyle}
        activeColor={colors.fontPrimary}
        inactiveColor={colors.fontInactive}
        style={StyleSheet.flatten([styles.tabContainerStyle, tabContainerStyle])}
        tabStyle={styles.tabStyle}
        scrollEnabled
      />
    </TabBarContext.Provider>
  );
}

export default TabBar;
