import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {getCurrentRoute, navigationRef} from './navigation-utils';
import {MAIN_ROUTES_SCREEN, SCREEN_NAME} from './screens-details';
import AppConfig from './app-config';

const Stack = createStackNavigator();

const AppNavigator = () => {
  let previousRouteName = '';

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        previousRouteName = getCurrentRoute()?.name ?? '';
      }}
      onStateChange={() => {
        const currentRouteName = getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName && currentRouteName) {
          previousRouteName = currentRouteName;
        }
      }}>
      <Stack.Navigator initialRouteName={SCREEN_NAME.login}>
        {MAIN_ROUTES_SCREEN.map(route => {
          return (
            <Stack.Screen
              key={route.key}
              name={route.name}
              options={route.option}>
              {props => <AppConfig {...props} route={route} />}
            </Stack.Screen>
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
