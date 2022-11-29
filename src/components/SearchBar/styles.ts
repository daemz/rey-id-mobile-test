import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  searchBarContainer: ViewStyle;
  clearIcon: ViewStyle;
  textInput: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  searchBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
  },
  clearIcon: {
    justifyContent: 'center',
  },
});

export default styles;
