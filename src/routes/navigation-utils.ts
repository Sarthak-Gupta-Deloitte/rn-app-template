import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export const navigateTo = (name: string) =>
  navigationRef?.current?.navigate(name);

export const getCurrentRoute = () => navigationRef?.current?.getCurrentRoute();
