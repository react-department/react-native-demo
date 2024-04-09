import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';

import CustomText from '../../../src/components/CustomText/CustomText';
import TabBarComponent from '../../../src/components/TabBar/TabBar';

function TabBar() {
  return (
    <Tabs.Container
      renderTabBar={(props) => <TabBarComponent {...props} />}
    >
      <Tabs.Tab name="tab" label="tab">
        <Tabs.ScrollView>
          <CustomText>My Tab</CustomText>
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
}

export default TabBar;
