import {Dimensions, ImageStyle, StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  modalContainer: ViewStyle;
  headerMenu: ViewStyle;
  scroll: ViewStyle;
  headerLeftIcon: ImageStyle;
  headerRightIcon: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  modalContainer: {
    // flex: 1,
    top: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  headerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headerLeftIcon: {
    marginLeft: 20,
    width: 80,
    height: 30,
  },
  headerRightIcon: {
    alignSelf: 'center',
    paddingRight: 12,
  },
  scroll: {
    backgroundColor: 'rgba(17, 17, 17, 0.6)',
  },
});

export default styles;
