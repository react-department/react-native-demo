import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import { IS_IOS } from '../constants/general';

import type IShowNotification from './interfaces/IShowNotification';

const showNotification = ({
  id, title, body, userInfo,
}: IShowNotification): void => {
  if (IS_IOS) {
    PushNotificationIOS.addNotificationRequest({
      id: id.toString(),
      title,
      body,
      userInfo,
    });
  } else {
    PushNotification.createChannel(
      {
        channelId: id.toString(),
        channelName: id.toString(),
        vibrate: true,
      },
      () => {
        PushNotification.localNotification({
          channelId: id.toString(),
          title,
          userInfo,
          message: body,
        });
      },
    );
  }
};

export default showNotification;
