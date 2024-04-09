import React, { useState } from 'react';
import { Button } from 'react-native';

import ProvideAccessModalComponent from '../../../src/components/ProvideAccessModal/ProvideAccessModal';
import {
  CONTACTS_ACCESS_MODAL,
  GALLERY_ACCESS_MODAL,
  LOCATION_ACCESS_MODAL,
} from '../../../src/constants/general';

import type { IProvideAccessModal } from '../../../src/components/ProvideAccessModal/interfaces/IProvideAccessModal';

function ProvideAccessModal(args: IProvideAccessModal) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button title="toggle visible" onPress={() => setIsVisible(true)} />
      <ProvideAccessModalComponent {...args} visible={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
}

ProvideAccessModal.argTypes = {
  currentVisibleModal: {
    control: 'select',
    options: [
      LOCATION_ACCESS_MODAL, CONTACTS_ACCESS_MODAL, GALLERY_ACCESS_MODAL,
    ],
  },
};

ProvideAccessModal.args = {
  currentVisibleModal: GALLERY_ACCESS_MODAL,
};

export default ProvideAccessModal;
