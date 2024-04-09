import './storybook.requires';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorybookUI } from '@storybook/react-native';

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  port: 7007,
  host: '0.0.0.0',
  resetStorybook: true,
  disableWebsockets: true,
  isSplitPanelVisible: false,
});

export default StorybookUIRoot;
