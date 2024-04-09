import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialTabItem } from 'react-native-collapsible-tab-view';
import { useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';

import { IS_IOS } from '../../constants/general';
import TabBarContext from './TabBarContext';

import type { MaterialTabItemProps } from 'react-native-collapsible-tab-view';
import type { TabName } from 'react-native-collapsible-tab-view/src/types';
import type TTheme from '../../theme/interfaces/TTheme';

import ExclamationCircleIcon from '../../assets/images/svg/exclamationMarkCircle.svg';

function TabBarItem <T extends TabName = string>(props: MaterialTabItemProps<T>) {
  const { colors } = useTheme() as TTheme;
  const {
    indexDecimal,
    index,
    labelStyle,
    activeColor,
    inactiveColor,
    name,
  } = props;

  const styles = StyleSheet.create({
    exclamationIcon: {
      paddingTop: 18,
      right: 15,
    },
  });

  const contextProps = useContext(TabBarContext);

  const animatedStyle = useAnimatedStyle(() => (
    Math.abs(index - indexDecimal.value) < 0.5
      ? {
        fontWeight: IS_IOS ? '700' : undefined,
        fontFamily: 'Urbanist-Bold',
        color: activeColor,
      } : {
        fontWeight: '500',
        color: inactiveColor,
      }
  ));

  return (
    <>
      <MaterialTabItem
        {...props}
        labelStyle={[labelStyle, animatedStyle]}
      />
      {name === contextProps?.tabWithExclamation && (
        <View style={styles.exclamationIcon}>
          <ExclamationCircleIcon color={colors.orange} />
        </View>
      )}
    </>
  );
}

export default TabBarItem;
