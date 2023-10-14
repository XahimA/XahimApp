import {
  Platform,
  StyleSheet
} from 'react-native';
import { DP, SCREEN_WIDTH } from './constants';
import { PRIMARY_COLOR, WHITE } from './colors';
import { MEDIUM, SEMIBOLD } from './fonts';

export const globalStyles = StyleSheet.create({
  whiteButton: {
    backgroundColor: WHITE,
    height:  DP(40),
    width:  DP(312),
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius:  DP(20),
    color:  PRIMARY_COLOR,
    fontFamily:   MEDIUM,
    marginTop:  DP(30)
  },
  blueButton: {
    backgroundColor:  PRIMARY_COLOR,
    height:  DP(40),
    width:  DP(312),
    alignSelf: 'center',
    marginTop:  DP(32),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius:  DP(20),
    color:  WHITE,
    fontFamily:   MEDIUM,
  },

  blueButtonModal: {
    backgroundColor:  PRIMARY_COLOR,
    height:  DP(40),
    width:  DP(264),
    alignSelf: 'center',
    marginTop:  DP(25),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius:  DP(20),
    color:  WHITE,
    fontFamily:   MEDIUM,
  },
  flexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonView: {
    height:  DP(40),
    width: SCREEN_WIDTH / 2,
    backgroundColor:  WHITE,
    fontFamily:   MEDIUM,
    fontSize:  DP(10),
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 3
  },
  buttonTextBlack: {
  },
  buttonText: {
    color:  WHITE,
    
    fontFamily:   SEMIBOLD,
    fontSize:  DP(12)
  },
  topElevation: {
    height: 1,
    width:  SCREEN_WIDTH,
    backgroundColor: '#fff',
    elevation: 15
  },

});