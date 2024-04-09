export default interface IShowNotification {
  id: string,
  title: string,
  body: string,
  userInfo?: Record<string, string | number>
}
