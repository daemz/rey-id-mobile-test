import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 16,
  },
});

export default styles;
