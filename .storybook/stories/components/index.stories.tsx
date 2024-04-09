import MarginDecorator from '../../decorators/Margin';

const ComponentsStory = {
  title: 'Components',
  decorators: [
    MarginDecorator(),
  ],
};

export default ComponentsStory;

export { default as BaseButton } from './BaseButton.stories';
export { default as BottomModal } from './BottomModal.stories';
export { default as Button } from './Button.stories';
export { default as CustomText } from './CustomText.stories';
export { default as CodePushManager } from './CodePushManager.stories';
export { default as Input } from './Input.stories';
export { default as TabBar } from './TabBar.stories';
export { default as TabBarInternal } from './TabBarInternal.stories';
export { default as TopModal } from './TopModal.stories';
export { default as EmptyList } from './EmptyList.stories';
export { default as Notification } from './Notification.stories';
export { default as ProvideAccessModal } from './ProvideAccessModal.stories';
export { default as IconItem } from './IconItem.stories';
export { default as InternetLostModal } from './InternetLostModal.stories';
