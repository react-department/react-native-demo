import type { TNotificationType } from './TNotificationType';

export default interface INotification {
  visible: boolean
  text: string
  type: TNotificationType | undefined
  showAlways?: boolean
  withLeftIcon?: boolean
}
