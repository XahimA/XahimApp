import React from 'react'
import { StatusBar } from 'react-native'

// third party library
import { NavigationContainer } from '@react-navigation/native';
//style
import { Colors, ScreenNames } from '../../global/index';
//screens
import SplashScreen from "../../screens/Splash/SplashScreen";

import DrawerNav from '../drawer/Drawer/DrawerNav';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { CardStyleInterpolators } from '@react-navigation/stack';
import ProductDetailScreen from '../../screens/ProductDetailScreen/ProductDetailScreen';


const MainStack = () => {

  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  }

  const Stack = createSharedElementStackNavigator();
  const inititalRouteName = ScreenNames.SPLASH;

  const showHeader = false;
  return (
    <>
      <StatusBar backgroundColor={Colors.white} barStyle='dark-content' />
        <Stack.Navigator screenOptions={{ headerShown: showHeader }}
          initialRouteName={inititalRouteName}
        >
          <Stack.Screen name={ScreenNames.SPLASH} component={SplashScreen} />
          <Stack.Screen name={ScreenNames.DRAWERNAV} component={DrawerNav} />
          <Stack.Screen name={ScreenNames.PRODUCT_DETAIL_SCREEN} component={ProductDetailScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
        </Stack.Navigator>
    </>
  )
}

export default MainStack;

