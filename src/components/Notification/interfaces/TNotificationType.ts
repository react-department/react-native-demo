import type { NOTIFICATION_ERROR, NOTIFICATION_SOME_FAILED, NOTIFICATION_SUCCESS } from '../../../constants/general';

export type TNotificationType =
    typeof NOTIFICATION_SUCCESS | typeof NOTIFICATION_SOME_FAILED | typeof NOTIFICATION_ERROR;
