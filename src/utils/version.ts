import CodePush from 'react-native-code-push';
import DeviceInfo from 'react-native-device-info';

import { API_BASE_URL, API_BASE_URLS } from '../constants/protectedConstants';

let codePushVersion: string | undefined | null;
const environment = Object.keys(API_BASE_URLS)
  .find((key) => API_BASE_URLS[key as keyof typeof API_BASE_URLS] === API_BASE_URL);

export const getCodePushVersion = () => {
  return codePushVersion;
};

export const updateCodePushVersion = async () => {
  const update = await CodePush.getUpdateMetadata();
  codePushVersion = update?.label || null;
};

export const getFullVersion = () => {
  return `${DeviceInfo.getVersion()}${getCodePushVersion() || ''} (${DeviceInfo.getBuildNumber()}) ${environment}`;
};
