import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Constants, ScreenNames } from '../../global'
import BrandLogo from '../../assets/svgs/BrandLogo'
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  const navigateUser =async() =>{

    setTimeout(() => {
    navigation.navigate(ScreenNames.LOGINSCREEN)
  }, 3000);
  }
    useEffect(() => {
      navigateUser()
    }, []);
  return (
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={120} angleCenter={{x:0.6,y:0.5}} colors={['#3FBECB', '#088D9A',"#088D9A"]} style={styles.container}>
        <BrandLogo />
      </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: Constants.DP(200),
    width: Constants.DP(200),

  },
})