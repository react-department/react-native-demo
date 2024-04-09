import NavigationDecorator from './decorators/Navigation';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  NavigationDecorator(),
];
