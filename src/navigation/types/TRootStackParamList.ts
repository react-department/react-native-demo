import type { StackNavigationProp } from '@react-navigation/stack';
import type IBottomTabNavigation from './IBottomTabNavigation';

export type TRootStackParamListMain = {
  BootSplash: undefined
  BottomTabNavigator?: IBottomTabNavigation
};

export type TRootStackParamList = TRootStackParamListMain;

export type TStackNavigation = StackNavigationProp<TRootStackParamList>;
