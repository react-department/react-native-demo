import type { TabsWithProps } from 'react-native-collapsible-tab-view/lib/typescript/src/types';
import type TTabBarInternalItem from './TTabBarInternalItem';

export default interface ITabBarInternal {
  tabProps: TabsWithProps<string>
  onChangeTab: (item: TTabBarInternalItem) => void
  selectedIndex: number
  stickyOffset?: number
}
