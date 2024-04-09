import MarginDecorator from '../../decorators/Margin';

const ComponentsStory = {
  title: 'Icons',
  decorators: [
    MarginDecorator(),
  ],
};

export default ComponentsStory;

export { default as IconsStories } from './icons.stories';
export { default as SocialStories } from './social.stories';
