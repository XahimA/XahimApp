import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Constants, ScreenNames } from '../global'
import { DP, SCREEN_HEIGHT, SCREEN_WIDTH } from '../global/constants'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const ForgotPassScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>

    <View style={{ height: SCREEN_HEIGHT / 3, backgroundColor: "#18335E", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, alignItems: 'center', position: 'absolute', width: SCREEN_WIDTH + 10, alignSelf: 'center' }}>
      <Image source={require("../assets/images/xahim_x.png")} style={{ height: 100, width: 100 }} />
    </View>

    <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', backgroundColor: '#fff', height: "100%", marginTop: '30%', borderRadius: 30 }}>


      <View style={{ margin: 20,alignSelf:'center',alignItems:'center' }}>
        
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#000' }}> Forgot Password</Text>
        <Text style={{ color: '#000' }}>Enter Your Email Address Below</Text>
      </View>

      <View style={{ marginHorizontal: 25 }}>
        <Text style={{ color: '#000' }}>Email</Text>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInputStyle}
            placeholder='Please Enter Your Email Address'
            placeholderTextColor={'#d3d3d3'}
            keyboardType='number-pad'
            // onChangeText={e => { onChange1(e) }}
            maxLength={10}
          />
        </View>
      </View>




     


      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.signUpButtonStyle}>

        <Text style={styles.signUpTxtStyle}>Send Otp</Text>

      </TouchableOpacity>

      <View style={{ marginTop: 25, alignItems: 'center' }}>
        <Text style={{ color: '#000',  fontSize: 16 }}>Go Back to <Text onPress={()=>{
          navigation.navigate(ScreenNames.LOGINSCREEN)
        }} style={{ color: '#00F9FD',fontWeight:'700' }}>Login
        </Text>
        </Text>
      </View>

      <View style={{ marginTop: "60%", alignItems: 'center' }}>
        <Text style={{fontSize:16,textAlign:'center',color: '#000', }}>We Are Happy to Help You.</Text>
        <Text style={{ color: '#00000090', fontSize: 16, textAlign: 'center' }}>If You are having Trouble or Cannot Login Kindly Contact : <Text style={{ color: '#00F9FD', fontWeight: '700' }}>8928001617
        </Text>
        </Text>
      </View>
      <View style={{ alignSelf: 'center', backgroundColor: '#000', height: 8, marginTop: 25, borderRadius: 20, width: 170 }}>

      </View>
    </View>


  </View>
  )
}

export default ForgotPassScreen

const styles = StyleSheet.create({
  textInputStyle: {
    marginLeft: Constants.DP(20),
    width: Constants.DP(225),
    height: Constants.DP(18),
    padding: 0,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Constants.DP(10),
    height: Constants.DP(36),
    borderWidth: Constants.DP(1),
    borderColor: '#eee',
    borderRadius: 5

  },
  signUpButtonStyle: {
    backgroundColor: "#00F9FD",
    height: Constants.DP(40),
    width: Constants.DP(264),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constants.DP(10),
    marginTop: 30,
  },
  signUpTxtStyle: {
    color: '#fff', fontSize: 18, fontWeight: "700"
  }
})