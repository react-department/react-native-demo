import { Platform } from 'react-native';
import {
  getBundleId,
} from 'react-native-device-info';
import { DateTime } from 'luxon';

import { API_BASE_URL, API_BASE_URLS } from './protectedConstants';

import type { DateTimeFormatOptions } from 'luxon/src/misc';

export const IS_IOS = Platform.OS === 'ios';
export const IS_DEV = API_BASE_URL === API_BASE_URLS.DEV;
export const BundleId = getBundleId();
export const SENTRY_DSN = 'https://..';
export const MERCHANT_ID = 'merchant.com.appMerchant';
export const EMPTY_INITIAL = '_';
export const TOP_MODAL_ANIMATION_TIME = 1000;
export const IMAGE_MAX_SIZE = 30000000; // 30MB
export const NOTIFICATION_ERROR = 'error';
export const NOTIFICATION_SUCCESS = 'success';
export const NOTIFICATION_SOME_FAILED = 'someFailed';

export const ANDROID_VERSION_13 = 13;
export const APP_STATE_STATUS_ACTIVE = 'active';
export const WHITE = 'white';
export const BLACK = 'black';
export const GRADIENT = 'gradient';
export const GREY = 'grey';
export const LIGHT_GREY = 'lightGrey';
export const TRANSPARENT_20PERCENT = 'transparent20';
export const TRANSPARENT_45PERCENT = 'transparent45';
export const RED = 'red';
export const ORANGE = 'orange';
export const TRANSPARENT = 'transparent';
export const ZERO = '0';
export const BOTTOM_INDENT = 8;
export const BOTTOM_INDENT_IF_NO_INSETS = 21 + BOTTOM_INDENT;
export const STORE_ANDROID_URL = `https://play.google.com/store/apps/details?id=${BundleId}`;
export const STORE_IOS_ID = 'id0000000';
export const STORE_IOS_URL = `https://apps.apple.com/us/app/appName/${STORE_IOS_ID}`;
export const NEW_LABEL = 'new';
export const E_NO_IMAGE_DATA_FOUND = 'E_NO_IMAGE_DATA_FOUND';
export const ALLOWED_PHOTO_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/heic', 'image/heif'];
export const KEYBOARD_TEXT_AREA_MARGIN = 130;
export const KEYBOARD_MARGIN = 0;
export const KEYBOARD_TOOLBAR_SIZE = 55;
export const GALLERY_ACCESS_MODAL = 'galleryAccessModal';
export const LOCATION_ACCESS_MODAL = 'locationAccessModal';
export const CONTACTS_ACCESS_MODAL = 'contactsAccessModal';
export const CAMERA_ACCESS_MODAL = 'cameraAccessModal';
export const PERMISSION_NEVER_ASK = 'never_ask_again';

export const AUTO_COMPLETE_VARIANTS = {
  TEL: 'tel',
  TEL_DEVICE: 'tel-device',
  EMAIL: 'email',
} as const;
export const PRICING_FORMAT = 'pricingFormat';
export const LUXON_DATE_TIME_FORMAT: { [key: string]: DateTimeFormatOptions } = {
  TIME_SIMPLE: DateTime.TIME_SIMPLE,
  DATE_SHORT: DateTime.DATE_SHORT,
  DATE_MED_WITH_WEEKDAY: DateTime.DATE_MED_WITH_WEEKDAY,
  DATETIME_MED: DateTime.DATETIME_MED,
  DATE_MED: DateTime.DATE_MED,
  DATETIME_SHORT_WITH_SECONDS: DateTime.DATETIME_SHORT_WITH_SECONDS,
  TIME_12_SIMPLE: { hour: '2-digit', minute: '2-digit', hourCycle: 'h11' },
  TIME_12_WITH_TZ: {
    hour: '2-digit', minute: '2-digit', hourCycle: 'h11', timeZoneName: 'short',
  },
  FULL_TIME_WITH_TZ: {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    hour12: true,
  },
};
export const USER_NOT_GRANT_PERMISSIONS = {
  LIBRARY: 'User did not grant library permission.',
  CAMERA: 'User did not grant camera permission.',
};

export const IMAGE_CROP_PICKER_METHODS = {
  OPEN_PICKER: 'openPicker',
  OPEN_CAMERA: 'openCamera',
} as const;

export type TImageCropPickerMethods = typeof IMAGE_CROP_PICKER_METHODS[keyof typeof IMAGE_CROP_PICKER_METHODS];
export type TAutoCompleteTypes = typeof AUTO_COMPLETE_VARIANTS[keyof typeof AUTO_COMPLETE_VARIANTS];
