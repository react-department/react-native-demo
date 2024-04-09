import React from 'react';

import IconItemComponent from '../../../src/components/IconItem/IconItem';

import type IIconItem from '../../../src/components/IconItem/Interfaces/IIconItem';

function IconItem(args: IIconItem) {
  return (
    <IconItemComponent {...args} />
  );
}

IconItem.args = {
  name: 'test',
};

export default IconItem;
