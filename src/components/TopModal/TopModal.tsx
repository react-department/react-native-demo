import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TOP_MODAL_ANIMATION_TIME } from '../../constants/general';

import type ITopModal from './interfaces/ITopModal';

function TopModal({ children, visible, onModalHide }: ITopModal) {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      zIndex: 2,
      position: 'absolute',
      top: insets.top,
      right: 0,
      left: 0,
      margin: 0,
    },
  });

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInDown"
      animationOut="fadeOutUp"
      animationInTiming={TOP_MODAL_ANIMATION_TIME}
      animationOutTiming={TOP_MODAL_ANIMATION_TIME}
      style={styles.container}
      coverScreen={false}
      hasBackdrop={false}
      onModalHide={onModalHide}
    >
      {children}
    </Modal>
  );
}

export default TopModal;
