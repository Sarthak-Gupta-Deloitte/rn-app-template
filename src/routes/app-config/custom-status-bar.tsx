import {
  View,
  SafeAreaView,
  StatusBar,
  ColorValue,
  StatusBarStyle,
} from 'react-native';
import React from 'react';
export interface CustomStatusInterface {
  backgroundColor: ColorValue | undefined;
  barStyle: StatusBarStyle | null | undefined;
}

function CustomStatusBar({backgroundColor, barStyle}: CustomStatusInterface) {
  return (
    <View style={{backgroundColor}}>
      <SafeAreaView style={{backgroundColor}}>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </SafeAreaView>
    </View>
  );
}

export default CustomStatusBar;
