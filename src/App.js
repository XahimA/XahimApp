import { View, Text } from 'react-native'
import React from 'react'
import MainStack from './Navigation/MainStack/MainStack'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };
  return (
    <SafeAreaView style={backgroundStyle}>

<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white} />
    <NavigationContainer>

   <MainStack />
   </NavigationContainer>
    </SafeAreaView>

  )
}

export default App