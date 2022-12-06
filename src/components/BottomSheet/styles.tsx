import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  modalContainer: ViewStyle;
  headerModal: ViewStyle;
  scroll: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  modalContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 6,
  },
  headerModal: {
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  scroll: {
    flex: 1,
    // height: Dimensions.get('screen').height * 0.9,
    // flexGrow: 1,
  },
});

export default styles;
