import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {getCurrentRoute, navigationRef} from './navigation-utils';

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
      <Stack.Navigator initialRouteName={'demo'}>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
