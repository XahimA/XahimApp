
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Constants, ScreenNames } from '../../global'
import { DP, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../global/constants'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BrandTextLogo from "../../assets/svgs/BrandTextLogo"
import WhatsappLogo from "../../assets/svgs/whatsapp"
import IndianFlag from "../../assets/svgs/IndianFlag"
import ArrowDown from "../../assets/svgs/ArrowDown"
import LinearGradient from 'react-native-linear-gradient';
import { Checkbox } from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={{ flex: 1,backgroundColor:Colors.WHITE }}>

      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} useAngle={true} angle={120} angleCenter={{x:0.6,y:0.5}} colors={['#3FBECB', '#088D9A',"#088D9A"]} style={styles.logoContainer}>
      <BrandTextLogo style={{marginTop:"18%"}} />
      </LinearGradient>

      <View style={styles.mainContainer}>
        <View style={{ }}>
          <Text style={{ fontSize: 34, fontWeight: '700', color: '#000' }}>Hello !</Text>
          <Text style={{ color: '#000',fontSize:14 }}>Start your journey by sharing the information below to unlock a path to success</Text>
        </View>
        <View style={{marginTop:24}}>
          <Text style={{ color: Colors.BLACK_41,fontSize:14 }}>Phone Number</Text>
          <View style={styles.textInputView}>
          <View style={styles.svgStyle}>
          <IndianFlag />
                        </View>
                        <ArrowDown />
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
       
        <View style={{ marginTop: 24, }}>

          <View style={{ flexDirection: 'row',alignItems:'center',marginLeft:DP(-7) }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={Colors.PRIMARY}
         />
            <Text style={styles.textStyle}>I accept the <Text style={{color:Colors.PRIMARY }}>Terms and condition*
            </Text></Text>
          </View>
          <View style={{ flexDirection: 'row',alignItems:'center',marginLeft:DP(-7) }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={Colors.PRIMARY}
         />
         <View style={{flexDirection:'row',alignItems:'center'}}>

            <Text style={styles.textStyle}>Receive updates and reminders on </Text>
            <WhatsappLogo />
            <Text style={styles.textStyle}> WhatsApp. </Text>
         </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.sendOtpButtonStyle}>
          <Text style={styles.signUpTxtStyle}>Send OTP</Text>
        </TouchableOpacity>


        <View style={{ marginTop: 25, alignItems: 'center' }}>
          <Text style={{ color: '#000', fontSize: 14}}>Already a client? <Text style={{ color: Colors.PRIMARY,fontWeight:'700' }}>Login
          </Text>
          </Text>
        </View>

        <View style={{ marginTop: 73, alignItems: 'center' }}>
          <Text style={{ color: '#000', fontSize: 14, textAlign: 'center' }}>We are happy to help you. 
          </Text>
          <Text style={{ color: Colors.BLACK_55, fontSize: 14, textAlign: 'center' }}>If you are having trouble or cannot login, Kindly contact :
          <Text style={{ color: Colors.PRIMARY, fontWeight: '700' }}>8928001617
          </Text>
          </Text>
        
        </View>
        
        <View style={{ alignSelf: 'center', backgroundColor: '#000', height: 8, marginTop: 25, borderRadius: 20, width: 170 }}>

        </View>
      </View>


    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
logoContainer:{
  height: "40%", backgroundColor: Colors.PRIMARY, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, alignItems: 'center', position: 'absolute', width: SCREEN_WIDTH + 10, alignSelf: 'center'
},
mainContainer:{
  width: SCREEN_WIDTH - 40, alignSelf: 'center', backgroundColor: '#fff', height: "100%", marginTop: '50%', borderRadius: 20,paddingHorizontal:20,paddingVertical:28
},
  textInputStyle: {
    flexDirection: 'row',
    marginLeft: Constants.DP(20),
    color: Colors.WHITE,
    width: Constants.DP(225),
    height: Constants.DP(18),
    padding: 0,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Constants.DP(5),
    height: 50,
    borderWidth: Constants.DP(1),
    borderColor: '#C8C8C8',
    borderRadius: 5

  },
sendOtpButtonStyle: {
    backgroundColor:Colors.PRIMARY,
    height: Constants.DP(40),
    width:'100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Constants.DP(10),
    marginTop: 28,
  },
  signUpTxtStyle: {
    color: '#fff', fontSize: 18, fontWeight: "700"
  },
  textStyle:{
    color: '#000', fontSize: 12
  },
  svgStyle: {
    marginLeft: Constants.DP(16),
    marginRight:DP(5),
},
})