import React from 'react'
import { StatusBar } from 'react-native'
import { Colors, ScreenNames } from '../../global/index';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';



const MainStack = () => {
  const Stack = createSharedElementStackNavigator();
  const inititalRouteName = ScreenNames.SPLASH_SCREEN;

  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  }
  return (
    <>
      <StatusBar backgroundColor={Colors.WHITE} barStyle='dark-content'   />
      <Stack.Navigator initialRouteName={inititalRouteName} screenOptions={options}>
          <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={SplashScreen} />
          <Stack.Screen name={ScreenNames.LOGINSCREEN} component={LoginScreen} />

          
        </Stack.Navigator>
    </>
  )
}

export default MainStack;

