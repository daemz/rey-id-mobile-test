import {StyleSheet, ViewStyle} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  brikButtonContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  brikButtonContainer: {
    minWidth: '30%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: appTheme['color-brik-red'],
  },
});

export default styles;
