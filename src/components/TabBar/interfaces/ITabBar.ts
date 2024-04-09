import type { StyleProp, ViewStyle } from 'react-native';
import type { MaterialTabBarProps } from 'react-native-collapsible-tab-view';

export default interface ITabBar<T extends string> extends MaterialTabBarProps<T> {
  tabContainerStyle?: StyleProp<ViewStyle>;
  tabWithExclamation?: string
}
