import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../src/store/store';

const StoreDecorator = () => function Store(Story: React.ElementType) {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export default StoreDecorator;
