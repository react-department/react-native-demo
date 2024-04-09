import React from 'react';

import EmptyListComponent from '../../../src/components/EmptyList/EmptyList';

import type IEmptyList from '../../../src/components/EmptyList/interface/IEmptyList';

import EmptyInvitesIcon from '../../../src/assets/images/svg/emptyInvites.svg';

function EmptyListStories(args: IEmptyList) {
  return (
    <EmptyListComponent {...args} />
  );
}

EmptyListStories.argTypes = {
  text: { control: 'text' },
  style: { control: 'object' },
  styleText: { control: 'object' },
};

EmptyListStories.args = {
  icon: <EmptyInvitesIcon />,
  text: 'Some text',
};

export default EmptyListStories;
