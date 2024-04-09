import React from 'react';

import type { TTabBarContext } from './interfaces/TTabBarContext';

const TabBarContext = React.createContext<TTabBarContext>(undefined);

export default TabBarContext;
