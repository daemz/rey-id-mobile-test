import {StyleSheet} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

export const globalStyle = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  mainAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 24,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 8,
  },
  button: {
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
  },
  inputText: {alignContent: 'center', textAlign: 'center'},
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  backButton: {
    left: 0,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    // backgroundColor: appTheme['color-success-500'],
    backgroundColor: appTheme['color-white'],
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontFamily: 'Druk Text',
    textTransform: 'uppercase',
    color: appTheme['color-black-100'],
  },
  avatarRightSpace: {marginRight: 16},
  toastStyle: {
    flex: 0,
    bg: appTheme['color-primary-500'],
    borderRadius: 8,
    borderColor: 'transparent',
    marginVertical: 20,
  },
  toastNewStyleBlack: {
    flex: 0,
    bg: appTheme['color-black'],
    borderRadius: 8,
    marginVertical: 20,
  },
  toastStyleWhite: {
    flex: 1,
    bg: appTheme['color-white'],
    borderRadius: 8,
    borderColor: appTheme['color-white'],
    paddingLeft: -15,
    minWidth: 100,
    // width: 50,
  },
  toastMessagePropsStyle: {
    fontSize: 14,
    letterSpacing: -0.2,
    fontFamily: 'Noto Sans',
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
    color: appTheme['color-white'],
  },
  toastMessagePropsWhiteToastStyle: {
    fontSize: 13,
    fontFamily: 'Noto Sans',
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
    color: appTheme['color-black'],
    marginLeft: -15,
  },
  toastCloseButtonStyle: {
    px: 10,
    bg: 'transparent',
    alignSelf: 'flex-end',
  },
  marginBottom: {
    marginBottom: 16,
  },
  toastCustomStyle: {
    flex: 1,
    bg: appTheme['color-white'],
    borderRadius: 8,
    borderColor: appTheme['color-white'],
    minWidth: 100,
    width: 310,
    alignSelf: 'center',
  },
  headerLeftButton: {
    padding: 16,
  },
  dividerLine: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    // width: '100%',
    position: 'relative',
    borderBottomColor: appTheme['color-black-20'],
    borderBottomWidth: 1,
    // paddingBottom: 30,
    // marginBottom: 20,
  },
  pokemonLogo: {marginLeft: 20, width: 80, height: 30},
  menuLogoStyle: {
    marginRight: 16,
  },
});
