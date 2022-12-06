import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  headerMenu: ViewStyle;
  headerLeftIcon: ImageStyle;
  headerRightIcon: ViewStyle;
  menuButton: ViewStyle;
  topLine: ViewStyle;
  drawerLayout: ViewStyle;
  textActive: TextStyle;
  textInactive: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  headerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headerLeftIcon: {
    marginLeft: 20,
    width: 80,
    height: 30,
  },
  headerRightIcon: {
    alignSelf: 'center',
    paddingRight: 12,
  },
  menuButton: {
    paddingVertical: 8,
    // backgroundColor: 'blue',
  },
  topLine: {
    borderTopColor: appTheme['color-black-20'],
    borderTopWidth: 1,
  },
  drawerLayout: {
    // height: '100%',
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  textActive: {
    fontWeight: 'bold',
    fontSize: 18,
    color: appTheme['color-pokemon-text-primary'],
  },
  textInactive: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: appTheme['color-black-100'],
  },
});

export default styles;
