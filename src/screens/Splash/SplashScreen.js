import React, { useEffect } from 'react'
import { Image, View } from 'react-native';
//styles & Services
import { styles } from './SplashStyle';
import { Colors, ScreenNames } from '../../global/index';

const SplashScreen = ({ navigation }) => {


  const retriveData = async () => {
    try {
     navigation.dispatch(ScreenNames.DRAWER)
    } catch (error) {
      console.log('error', error);

    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      retriveData();
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles}>
        <Image style={styles.image} source={require('../../assets/images/xahim_x.png')} />
      </View>
    </View>
  )
}

export default SplashScreen;
