import React, { useState } from 'react';

import TopModalComponent from '../../../src/components/TopModal/TopModal';
import Button from './Button.stories';

import type ITopModal from '../../../src/components/TopModal/interfaces/ITopModal';

function TopModal(args: ITopModal) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button title="Show modal" onPress={() => setIsVisible(true)} />
      <TopModalComponent
        {...args}
        visible={isVisible}
      >
        <Button title="Close modal" onPress={() => setIsVisible(false)} />
      </TopModalComponent>
    </>
  );
}

TopModal.argTypes = {
  visible: { control: 'boolean' },
};

export default TopModal;
