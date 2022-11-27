import {StyleSheet, ViewStyle} from 'react-native';

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
