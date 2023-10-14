import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import MainStack from './Navigation/MainStack/MainStack'
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './global';
import { Provider } from 'react-native-paper';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  return (
    <Provider>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
    </Provider>

  )
}

export default App