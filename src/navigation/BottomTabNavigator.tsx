import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import { IS_IOS } from '../constants/general';
import Home from '../screens/Home/Home';
import Inbox from '../screens/Inbox/Inbox';
import Posts from '../screens/Posts/Posts';
import TabBar from './components/TabBar';
import { TabBarHomeIcon, TabBarStatKeeperIcon } from './components/TabBarIcons';
import TabBarInboxIcon from './components/TabBarInboxIcon';
import TabBarLabel from './components/TabBarLabel';

import type TTheme from '../theme/interfaces/TTheme';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { colors } = useTheme() as TTheme;
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    optionHeaderStyle: {
      backgroundColor: colors.backgroundGhost,
      elevation: 0,
      shadowColor: 'transparent',
    },
    optionHeaderTitleStyle: {
      fontWeight: IS_IOS ? '700' : undefined,
      fontFamily: 'Urbanist-Bold',
      fontSize: 24,
    },
  });

  const options = {
    tabBarActiveTintColor: colors.fontPrimary,
    tabBarInactiveTintColor: colors.fontInactive,
    headerStyle: {
      elevation: 0,
      shadowColor: 'transparent',
    },
    headerTitleAlign: 'center' as const,
  };

  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          ...options,
          tabBarLabel: TabBarLabel,
          tabBarIcon: TabBarStatKeeperIcon,
          headerTitle: `${t('posts')}`,
          headerTitleAlign: 'left',
          headerStyle: styles.optionHeaderStyle,
          headerTitleStyle: styles.optionHeaderTitleStyle,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          ...options,
          tabBarLabel: TabBarLabel,
          tabBarIcon: TabBarHomeIcon,
          headerTitleAlign: 'left',
          headerStyle: styles.optionHeaderStyle,
          headerTitle: '',
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          ...options,
          tabBarLabel: TabBarLabel,
          tabBarIcon: TabBarInboxIcon,
          headerTitleAlign: 'left',
          headerStyle: styles.optionHeaderStyle,
          headerTitleStyle: styles.optionHeaderTitleStyle,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
