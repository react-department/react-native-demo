import type { TNotificationType } from '../../../../components/Notification/interfaces/TNotificationType';
import type TNavigationRoute from '../../../../navigation/types/TNavigationRoute';

type TNotification = {
  text: string
  type: TNotificationType
  showAlways?: boolean
  withLeftIcon?: boolean
};

export default interface IGeneralStore {
  isDisconnected: boolean
  initialRoute?: TNavigationRoute
  afterRegistrationRoute?: TNavigationRoute
  topNotification: TNotification | undefined
  isBootSplashPassed: boolean
  currentVisibleModal: string
}
