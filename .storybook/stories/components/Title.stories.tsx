import React from 'react';

import TitleComponent from '../../../src/components/Title/Title';

import type ITitle from '../../../src/components/Title/interfaces/ITitle';

function Title(args: ITitle) {
  return <TitleComponent {...args} />;
}

Title.argTypes = {
  title: { control: 'text' },
  style: { control: 'object' },
};

Title.args = {
  title: 'Title',
  style: {},
};

export default Title;
