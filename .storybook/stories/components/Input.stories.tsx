import React from 'react';

import InputComponent from '../../../src/components/Input/Input';

import type IInput from '../../../src/components/Input/interfaces/IInput';

import ChevronRightIcon from '../../../src/assets/images/svg/chevronRight.svg';
import SearchIcon from '../../../src/assets/images/svg/search.svg';

function Input(args: IInput) {
  return <InputComponent {...args} icon={<SearchIcon />} iconRight={<ChevronRightIcon />} />;
}

Input.argTypes = {
  placeholder: { control: 'text' },
  value: { control: 'text' },
  onChangeText: { action: 'changed text' },
  withEye: { control: 'boolean' },
  containerStyle: { control: 'object' },
  textContentType: {
    control: 'select',
    options: [undefined, 'telephoneNumber'],
  },
  iconStyle: { control: 'object' },
  inputStyle: { control: 'object' },
  autoCapitalize: {
    control: 'select',
    options: ['none', 'sentences', 'words', 'characters'],
  },
  onPressIconRight: { action: 'pressed right icon' },
  showSoftInputOnFocus: { control: 'boolean' },
  onFocus: { action: 'onFocus' },
  isError: { control: 'boolean' },
};

Input.args = {
  placeholder: 'Phone number',
  autoCapitalize: 'none',
};

export default Input;
