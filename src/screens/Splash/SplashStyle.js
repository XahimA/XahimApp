import { StyleSheet } from "react-native";

import { Colors, Constants, Fonts, } from '../../global/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: Constants.DP(170),
    width: Constants.DP(160),
    top: -20
  },

})