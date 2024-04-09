import { PermissionsAndroid } from 'react-native';

import { CAMERA_ACCESS_MODAL, IS_IOS, PERMISSION_NEVER_ASK } from '../constants/general';
import { setGeneralState } from '../store/slices/general/slice';

import type { AppDispatch } from '../store/types/TStore';

const checkCameraPermission = async (dispatch: AppDispatch): Promise<null> => {
  if (!IS_IOS) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PERMISSION_NEVER_ASK) {
      dispatch(setGeneralState({
        currentVisibleModal: CAMERA_ACCESS_MODAL,
      }));
    }
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      return null;
    }
  }
  return null;
};

export default checkCameraPermission;
