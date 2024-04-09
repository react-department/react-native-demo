import React, { useState } from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';

import TabBarInternalComponent from '../../../src/components/TabBarInternal/TabBarInternal';

import type { TabsWithProps } from 'react-native-collapsible-tab-view/lib/typescript/src/types';

function TabBarInternal() {
  const [selectedRound, setSelectedRound] = useState(0);
  const tabProps: TabsWithProps = new Map([
    ['1', { index: 1, label: 'Round 1', name: '1' }],
    ['2', { index: 2, label: 'Round 2', name: '2' }],
  ]);

  return (
    <Tabs.Container>
      <Tabs.Tab name="games" label="Games">
        <Tabs.ScrollView>
          <TabBarInternalComponent
            stickyOffset={0}
            tabProps={tabProps}
            onChangeTab={({ name }) => setSelectedRound(+name)}
            selectedIndex={selectedRound}
          />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
}

export default TabBarInternal;
