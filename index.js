/**
 * @format
 */

import 'react-native-gesture-handler';
import './.storybook/storybook.requires';

import React, { useEffect, useState } from 'react';
import { AppRegistry, DevSettings } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Root from './src/Root';
import Storybook from './.storybook';
import { name as appName } from './app.json';

function App() {
  const [showStorybook, setShowStorybook] = useState(false);
  const Component = showStorybook ? Storybook : Root;

  useEffect(() => {
    if (__DEV__) {
      AsyncStorage.getItem('showStorybook').then((value) => {
        setShowStorybook(value === 'true');
      });

      DevSettings.addMenuItem('Toggle Storybook', () => setShowStorybook((prev) => {
        AsyncStorage.setItem('showStorybook', !prev ? 'true' : 'false');
        return !prev;
      }));
    }
  }, []);

  return <Component />;
}

AppRegistry.registerComponent(appName, () => App);
