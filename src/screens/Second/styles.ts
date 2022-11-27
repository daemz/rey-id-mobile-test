import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  headerLeftButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerLeftButton: {
    padding: 16,
  },
});

export default styles;
