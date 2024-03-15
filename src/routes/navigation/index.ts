import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../screens-details';

export type NavigationRouteProps = {
  [SCREEN_NAME.login]: undefined;
  [SCREEN_NAME.userOtp]: undefined;
  [SCREEN_NAME.registerUser]: undefined;
  [SCREEN_NAME.dashboard]: undefined;
};

export type NavigationRouteProp =
  NativeStackNavigationProp<NavigationRouteProps>;
