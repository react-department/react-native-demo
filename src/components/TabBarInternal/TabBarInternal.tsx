import React, {
  useCallback, useEffect,
  useMemo, useRef,
} from 'react';
import { StyleSheet } from 'react-native';
import { useCurrentTabScrollY } from 'react-native-collapsible-tab-view';
import Animated, {
  useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';

import TabBar from '../TabBar/TabBar';

import type PagerView from 'react-native-pager-view';
import type ITabBarInternal from './interfaces/ITabBarInternal';

function TabBarInternal({
  tabProps, onChangeTab, selectedIndex, stickyOffset = 0,
}: ITabBarInternal) {
  const index = useSharedValue(0);
  const focusedTab = useSharedValue('');
  const indexDecimal = useSharedValue(0);

  const scrollY = useCurrentTabScrollY();

  const tabContainerRef = useRef<PagerView>(null);

  const animatedStyle = useAnimatedStyle(() => ({
    zIndex: 2,
    transform: [{ translateY: scrollY.value > stickyOffset ? scrollY.value - stickyOffset : 0 }],
  }), [stickyOffset]);

  const tabNames = useMemo(() => {
    return [...tabProps.values()].map(({ name }) => `${name}`).reverse();
  }, [tabProps]);

  const styles = StyleSheet.create({
    tabContainerStyle: {
      paddingHorizontal: 0,
    },
  });

  useEffect(() => {
    index.value = withTiming(selectedIndex);
    indexDecimal.value = withTiming(selectedIndex);
  }, [selectedIndex]);

  const onPressRoundTab = useCallback((name: string) => {
    const pressedTab = tabProps.get(name);
    if (pressedTab) {
      onChangeTab(pressedTab);
    }
  }, [tabProps]);

  return (
    <Animated.View style={animatedStyle}>
      <TabBar
        tabNames={tabNames}
        index={index}
        tabProps={tabProps}
        indexDecimal={indexDecimal}
        onTabPress={onPressRoundTab}
        focusedTab={focusedTab}
        containerRef={tabContainerRef}
        tabContainerStyle={styles.tabContainerStyle}
      />
    </Animated.View>
  );
}

export default TabBarInternal;
