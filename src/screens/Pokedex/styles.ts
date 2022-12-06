import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  headerLeftButton: ViewStyle;
  backgroundImage: ImageStyle;
  titleView: ViewStyle;
  titleText: TextStyle;
  subtitleText: TextStyle;
  body: ViewStyle;
  list: ViewStyle;
  cardContainer: ViewStyle;
  cardImage: ImageStyle;
  cardIdContainer: ViewStyle;
  idText: TextStyle;
  titleTextStyle: TextStyle;
  type: ViewStyle;
  typeText: TextStyle;
  typeContainer: ViewStyle;
  typeContainerStats: ViewStyle;
  sheetContainer: ViewStyle;
  sheetImage: ImageStyle;
  attributeContainer: ViewStyle;
  attributeTitle: TextStyle;
  attributeValueType1: TextStyle;
  attributeValueType2: ViewStyle;
  attributeValueType3: ViewStyle;
  abilityValueText: TextStyle;
  sheetButton: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  headerLeftButton: {
    padding: 16,
  },
  titleView: {
    marginVertical: 16,
    alignSelf: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitleText: {
    textAlign: 'center',
    fontSize: 16,
  },
  body: {
    paddingHorizontal: 16,
  },
  list: {
    // height: '100%',
    alignItems: 'center',
    marginVertical: 16,
    paddingTop: 16,
  },
  cardContainer: {
    padding: 20,
    backgroundColor: appTheme['color-pokemon-card-container'],
    borderRadius: 10,
    marginBottom: 20,
  },
  cardImage: {
    width: 210,
    height: 210,
    resizeMode: 'cover',
  },
  cardIdContainer: {marginVertical: 8},
  idText: {fontSize: 18, fontWeight: '700', color: appTheme['color-black-50']},
  titleTextStyle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: appTheme['color-black-100'],
  },
  type: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  typeText: {color: appTheme['color-black-100']},
  typeContainer: {
    marginRight: 8,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  typeContainerStats: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginRight: 8,
    borderRadius: 50,
    marginBottom: 8,
  },
  sheetContainer: {
    paddingHorizontal: 16,
  },
  sheetImage: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  attributeContainer: {
    flex: 2.5,
    marginHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  attributeTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: appTheme['color-black-90'],
    alignSelf: 'baseline',
  },
  attributeValueType1: {
    flex: 1.5,
    fontSize: 18,
  },
  attributeValueType2: {
    flex: 1.5,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  attributeValueType3: {
    flex: 1.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  abilityValueText: {
    fontSize: 18,
  },
  sheetButton: {alignSelf: 'center'},
});

export default styles;
