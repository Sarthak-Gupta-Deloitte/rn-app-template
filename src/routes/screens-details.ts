import Dashboard from '../screens/dashboard';
import Login from '../screens/login';
import RegisterUser from '../screens/register-user';
import UserOtp from '../screens/user-otp';

export enum SCREEN_NAME {
  login = 'Login',
  userOtp = 'UserOtp',
  registerUser = 'RegisterUser',
  dashboard = 'Dashboard',
}

export const MAIN_ROUTES_SCREEN = [
  {
    key: 'login',
    name: SCREEN_NAME.login,
    component: Login,
    private: false,
    option: {headerShown: true},
    fullScreen: false,
  },
  {
    key: 'UserOtp',
    name: SCREEN_NAME.userOtp,
    component: UserOtp,
    private: false,
    option: {headerShown: true},
    fullScreen: false,
  },
  {
    key: 'register_user',
    name: SCREEN_NAME.registerUser,
    component: RegisterUser,
    private: false,
    option: {headerShown: true},
    fullScreen: false,
  },
  {
    key: 'dashboard',
    name: SCREEN_NAME.dashboard,
    component: Dashboard,
    private: false,
    option: {headerShown: false},
    fullScreen: false,
  },
];
