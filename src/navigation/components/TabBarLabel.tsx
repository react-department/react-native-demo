import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { ILabel, ITabBarLabel } from '../types/ITabBarLabel';

const LABELS: ILabel = {
  Home: 'home',
  Schedule: 'schedule',
  Inbox: 'inbox',
  Posts: 'posts',
};

function TabBarLabel({ children, focused, color }: ITabBarLabel) {
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    label: {
      fontFamily: 'Urbanist',
      fontSize: 12,
    },
    labelFocused: {
      fontWeight: '600',
      fontFamily: 'Urbanist-SemiBold',
    },
  });
  return (
    <Pressable>
      <Text style={StyleSheet.flatten([styles.label, { color }, focused && styles.labelFocused])}>
        {LABELS[children] ? t(LABELS[children]) : children }
      </Text>
    </Pressable>
  );
}

export default TabBarLabel;
