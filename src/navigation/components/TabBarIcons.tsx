import React from 'react';
import { useTheme } from '@react-navigation/native';

import type TTheme from '../../theme/interfaces/TTheme';
import type ITabBarIcon from '../types/ITabBarIcons';

import HomeIcon from '../../assets/images/svg/home.svg';
import PostsIcon from '../../assets/images/svg/posts.svg';

export function TabBarHomeIcon({ size, color }: ITabBarIcon) {
  return <HomeIcon width={size} height={size} color={color} />;
}

export function TabBarStatKeeperIcon({ size, focused }: ITabBarIcon) {
  const { colors } = useTheme() as TTheme;
  return focused
    ? <PostsIcon width={size} height={size} color={colors.iconPrimary} />
    : <PostsIcon width={size} height={size} />;
}
