import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

//styles & Services
import { styles } from './SplashStyle';
import { Colors, ScreenNames } from '../../global/index';

const SplashScreen = ({ navigation }) => {


  const retriveData = async () => {
    try {
     
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
