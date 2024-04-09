import ImageCropPicker from 'react-native-image-crop-picker';
import i18next from 'i18next';

import {
  ALLOWED_PHOTO_FORMATS, CAMERA_ACCESS_MODAL,
  E_NO_IMAGE_DATA_FOUND,
  GALLERY_ACCESS_MODAL,
  IMAGE_MAX_SIZE,
  NOTIFICATION_ERROR,
  USER_NOT_GRANT_PERMISSIONS,
} from '../constants/general';
import { setGeneralState } from '../store/slices/general/slice';
import { store } from '../store/store';

import type { TImageCropPickerMethods } from '../constants/general';
import type IImageCropPickerError from './interfaces/IImageCropPickerError';

const imageCropPicker = async (
  method: TImageCropPickerMethods,
  {
    cropperCircleOverlay = true,
    useFrontCamera = false,
    forceJpg = true,
    compressImageQuality = 0.8,
    cropping = true,
  } = {},
) => {
  const { dispatch } = store;

  let image;
  try {
    image = await ImageCropPicker[method]({
      mediaType: 'photo',
      cropping: false,
      useFrontCamera,
      forceJpg,
      cropperCircleOverlay,
      compressImageQuality,
    });

    if (cropping) {
      image = await ImageCropPicker.openCropper({
        mediaType: 'photo',
        path: image.path,
      });
    }

    if (image.size > IMAGE_MAX_SIZE) {
      dispatch(setGeneralState({
        topNotification: {
          text: i18next.t('thePhotoIsTooBig'),
          type: NOTIFICATION_ERROR,
        },
      }));
    } else if (!ALLOWED_PHOTO_FORMATS.includes(image.mime)) {
      dispatch(setGeneralState({
        topNotification: {
          text: i18next.t('fileTypeFormat'),
          type: NOTIFICATION_ERROR,
        },
      }));
    }
  } catch (error) {
    const { message, code } = error as IImageCropPickerError;
    if (message === USER_NOT_GRANT_PERMISSIONS.LIBRARY) {
      dispatch(setGeneralState({
        currentVisibleModal: GALLERY_ACCESS_MODAL,
      }));
    } else if (message === USER_NOT_GRANT_PERMISSIONS.CAMERA) {
      dispatch(setGeneralState({
        currentVisibleModal: CAMERA_ACCESS_MODAL,
      }));
    }
    if (code === E_NO_IMAGE_DATA_FOUND) {
      dispatch(setGeneralState({
        topNotification: {
          text: i18next.t('fileTypeFormat'),
          type: NOTIFICATION_ERROR,
        },
      }));
    }
  }
  return image;
};

export default imageCropPicker;
