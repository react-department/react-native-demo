import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import themeUI from '../../src/theme/theme';

type NavigationDecoratorStack = {
  myScreen: undefined;
};

const Stack = createStackNavigator<NavigationDecoratorStack>();

const NavigationDecorator = (theme = themeUI) => function Navigation(Story: React.FC) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="myScreen" component={Story} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationDecorator;
