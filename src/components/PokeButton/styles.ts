import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  buttonContainer: ViewStyle;
  buttonTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  buttonContainer: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: appTheme['color-pokemon-primary'],
    borderRadius: 10,
  },
  buttonTitle: {
    color: appTheme['color-white'],
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
