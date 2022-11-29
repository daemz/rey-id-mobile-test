import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  textInputContainer: ViewStyle;
  clearIcon: ViewStyle;
  textInput: ViewStyle;
  formInputContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  formInputContainer: {
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    marginBottom: 6,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  clearIcon: {
    justifyContent: 'center',
  },
});

export default styles;
