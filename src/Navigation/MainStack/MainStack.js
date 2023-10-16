import React from 'react'
import { StatusBar } from 'react-native'
import { Colors, ScreenNames } from '../../global/index';
import SplashScreen from "../../screens/Splash/SplashScreen";
import DrawerNav from '../drawer/Drawer/DrawerNav';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { CardStyleInterpolators } from '@react-navigation/stack';
import ProductDetailScreen from '../../screens/ProductDetailScreen/ProductDetailScreen';


const MainStack = () => {
  const Stack = createSharedElementStackNavigator();
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  }
  return (
    <>
      <StatusBar backgroundColor={Colors.white} barStyle='dark-content' />
      <Stack.Navigator screenOptions={options}>
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

