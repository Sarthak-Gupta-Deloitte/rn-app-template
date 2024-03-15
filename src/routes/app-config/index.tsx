import {SafeAreaView, StyleSheet} from 'react-native';
import React, {JSXElementConstructor} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomStatusBar from './custom-status-bar';

interface ComponentProps {}
interface RoutePrope {
  key: string;
  name: string;
  component: JSXElementConstructor<ComponentProps>;
  private: boolean;
  option: {headerShown: boolean};
  fullScreen: boolean;
}

export enum StatusBarString {
  LightContent = 'light-content',
  DarkContent = 'dark-content',
}

function AppConfig({route, ...rest}: {route: RoutePrope}) {
  const {component: Component} = route;
  const isDarkMode = false;
  return (
    <SafeAreaProvider>
      <CustomStatusBar
        backgroundColor={'#fff'}
        barStyle={
          isDarkMode
            ? StatusBarString.LightContent
            : StatusBarString.DarkContent
        }
      />
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <Component {...rest} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default AppConfig;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {flex: 1, backgroundColor: '#fff'},
});
