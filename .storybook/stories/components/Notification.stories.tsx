import React, { useState } from 'react';

import NotificationComponent from '../../../src/components/Notification/Notification';
import { NOTIFICATION_ERROR, NOTIFICATION_SUCCESS } from '../../../src/constants/general';
import Button from './Button.stories';

import type INotification from '../../../src/components/Notification/interfaces/INotification';

function Notification(args: INotification) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button title="Show modal" onPress={() => setIsVisible(true)} />
      <NotificationComponent
        {...args}
        visible={isVisible}
      />
    </>
  );
}

Notification.argTypes = {
  visible: { control: 'boolean' },
  text: { control: 'text' },
  type: {
    control: 'select',
    options: [NOTIFICATION_ERROR, NOTIFICATION_SUCCESS],
  },
};

Notification.args = {
  text: 'Something went wrong',
  type: NOTIFICATION_ERROR,
};

export default Notification;
