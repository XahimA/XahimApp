import React from 'react'
import { StatusBar } from 'react-native'

// third party library
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//style
import { Colors, ScreenNames } from '../../global/index';
//screens
import SplashScreen from "../../screens/Splash/SplashScreen";

import { SPLASH } from '../../global/screenNames';


const MainStack = () => {

  const Stack = createStackNavigator();

  const inititalRouteName = ScreenNames.SPLASH;

  const showHeader = false;

  return (
    <>
      <StatusBar backgroundColor={Colors.WHITE} barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: showHeader }}
          initialRouteName={inititalRouteName}
        >

          <Stack.Screen name={ScreenNames.SPLASH} component={SplashScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default MainStack;

