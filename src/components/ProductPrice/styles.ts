import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  priceText: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  priceText: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 2,
  },
});

export default styles;
