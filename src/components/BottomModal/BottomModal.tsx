import React from 'react';
import {
  Modal, StyleSheet, View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import type TTheme from '../../theme/interfaces/TTheme';
import type IBottomModal from './interfaces/IBottomModal';

function BottomModal({
  children,
  visible,
  containerStyle,
  contentStyle,
  contentWrapperStyle,
}:IBottomModal) {
  const { colors } = useTheme() as TTheme;
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: colors.greyDark,
    },
    contentWrapper: {
      backgroundColor: colors.white,
      paddingBottom: insets.bottom !== 0 ? insets.bottom : 34,
      maxHeight: '85%',
    },
    content: {
      paddingHorizontal: 16,
      paddingTop: 24,
      paddingBottom: 8,
    },
  });
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        <View style={StyleSheet.flatten([styles.contentWrapper, contentWrapperStyle])}>
          <View style={StyleSheet.flatten([styles.content, contentStyle])}>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default BottomModal;
