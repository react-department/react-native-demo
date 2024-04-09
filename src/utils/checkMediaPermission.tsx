import { PermissionsAndroid, Platform } from 'react-native';

import {
  ANDROID_VERSION_13, GALLERY_ACCESS_MODAL, IS_IOS, PERMISSION_NEVER_ASK,
} from '../constants/general';
import { setGeneralState } from '../store/slices/general/slice';

import type { AppDispatch } from '../store/types/TStore';

const checkMediaPermission = async (dispatch: AppDispatch): Promise<null> => {
  if (!IS_IOS) {
    const granted = await PermissionsAndroid.request(
      'Release' in Platform.constants
      && (+Platform.constants.Release < ANDROID_VERSION_13)
        ? PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        : PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    );
    if (granted === PERMISSION_NEVER_ASK) {
      dispatch(setGeneralState({
        currentVisibleModal: GALLERY_ACCESS_MODAL,
      }));
    }
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      return null;
    }
  }
  return null;
};

export default checkMediaPermission;
