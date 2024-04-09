import type INotification from './INotification';

type TMemoData = Omit<INotification, 'visible'> | null;

export default TMemoData;
