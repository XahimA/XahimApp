import { Dimensions, Platform } from "react-native";
//responsiveness
export const DP = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const HEADER_HEIGHT = 60;
export const MOCKUP_WIDTH = 375;
export const CHANGE_BY_MOBILE_DPI = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));

export const BUTTON_OPACITY = 1;

export const IS_ANDROID = () => { if (Platform.OS === 'android') { return true } else { return false } }