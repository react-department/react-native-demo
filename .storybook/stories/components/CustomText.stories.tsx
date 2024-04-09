import React from 'react';

import CustomTextComponent from '../../../src/components/CustomText/CustomText';

import type ICustomText from '../../../src/components/CustomText/interfaces/ICustomText';

function CustomText(args: ICustomText) {
  return <CustomTextComponent {...args}>Custom Text</CustomTextComponent>;
}

CustomText.argTypes = {
  children: { control: 'text' },
  style: { control: 'object' },
};

CustomText.args = {
  children: 'CustomText',
  style: {},
};

export default CustomText;
