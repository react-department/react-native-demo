import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import BottomModalComponent from '../../../src/components/BottomModal/BottomModal';
import Title from '../../../src/components/Title/Title';
import {
  GREY, RED,
} from '../../../src/constants/general';
import Button from './Button.stories';

import type IBottomModal from '../../../src/components/BottomModal/interfaces/IBottomModal';

function BottomModal(args: IBottomModal) {
  const styles = StyleSheet.create({
    actionBtn: {
      marginTop: 24,
      marginBottom: 16,
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button title="Show modal" onPress={() => setIsVisible(true)} />
      <BottomModalComponent
        {...args}
        visible={isVisible}
      >
        <Title title="Log out of account" />
        <Button
          title="Log out"
          theme={RED}
          onPress={() => {}}
          style={styles.actionBtn}
        />
        <Button
          title="Cancel"
          theme={GREY}
          onPress={() => setIsVisible(false)}
        />
      </BottomModalComponent>
    </>
  );
}

BottomModal.argTypes = {
  containerStyle: { control: 'object' },
  contentStyle: { control: 'object' },
};

export default BottomModal;
