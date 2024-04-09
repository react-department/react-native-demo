import React from 'react';

import ButtonComponent from '../../../src/components/Button/Button';
import {
  BLACK, GRADIENT, GREY, RED, WHITE,
} from '../../../src/constants/general';

import type IButton from '../../../src/components/Button/interfaces/IButton';

function ButtonStories(args: IButton) {
  return <ButtonComponent {...args} />;
}

ButtonStories.argTypes = {
  onPress: { action: 'pressed the button' },
  theme: {
    control: 'select',
    options: [WHITE, BLACK, GRADIENT, GREY, RED],
  },
  disabled: { control: 'boolean' },
  style: { control: 'object' },
};

ButtonStories.args = {
  title: 'Button',
  style: {},
};

export default ButtonStories;
