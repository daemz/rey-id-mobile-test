import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  sectionContainer: ViewStyle;
  sectionTitle: ViewStyle;
  sectionDescription: ViewStyle;
  highlight: ViewStyle;
  bottomButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottomButton: {
    flex: 1,
    padding: 16,
    alignSelf: 'center',
    margin: 16,
    backgroundColor: appTheme['color-azure'],
  },
});

export default styles;
