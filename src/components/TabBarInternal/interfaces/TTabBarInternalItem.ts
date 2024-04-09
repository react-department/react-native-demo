import type { TabName, TabProps } from 'react-native-collapsible-tab-view/src/types';

type TTabBarInternalItem<T extends TabName = TabName> = Omit<TabProps<T>, 'children'> & { index: number };

export default TTabBarInternalItem;
