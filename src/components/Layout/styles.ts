import * as appTheme from 'assets/custom-theme.json';
import {StyleSheet, TextStyle} from 'react-native';

interface IStyles {
  layout: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  layout: {
    backgroundColor: appTheme['color-white'],
  },
});

export default styles;
