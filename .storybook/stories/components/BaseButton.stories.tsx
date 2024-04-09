import React from 'react';

import BaseButtonComponent from '../../../src/components/BaseButton/BaseButton';
import { BLACK, TRANSPARENT, WHITE } from '../../../src/constants/general';

import type IBaseButton from '../../../src/components/BaseButton/interfaces/IBaseButton';

import AddNoteIcon from '../../../src/assets/images/svg/addNote.svg';

function BaseButton(args: IBaseButton) {
  return (
    <BaseButtonComponent {...args} />
  );
}

BaseButton.argTypes = {
  onPress: { action: 'onPress' },
  style: { control: 'object' },
  disabled: { control: 'boolean' },
  theme: { control: 'select', options: [TRANSPARENT, BLACK, WHITE] },
  children: { control: 'text' },
};

BaseButton.args = {
  theme: BLACK,
  children: 'BaseButton',
  renderLeftIcon: (color: string) => <AddNoteIcon color={color} />,
};

export default BaseButton;
