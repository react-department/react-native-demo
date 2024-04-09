import React from 'react';
import { View } from 'react-native';

import type ITabBarIcon from '../types/ITabBarIcons';

import InboxIcon from '../../assets/images/svg/inbox.svg';

function TabBarInboxIcon({ size, color }: ITabBarIcon) {
  return (
    <View>
      <InboxIcon width={size} height={size} color={color} />
    </View>
  );
}

export default TabBarInboxIcon;
