import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import * as appTheme from '@assets/custom-theme.json';

interface IStyles {
  sectionContainer: ViewStyle;
  sectionTitle: ViewStyle;
  sectionDescription: ViewStyle;
  highlight: ViewStyle;
  bottomButton: ViewStyle;
  mainPokemonImage: ImageStyle;
  mainAreaContainer: ViewStyle;
  titleStyle: TextStyle;
  subtitleStyle: TextStyle;
  pokeButton: ViewStyle;
  attributeContainer: ViewStyle;
  attributeTitle: TextStyle;
  attributeValueType1: TextStyle;
  attributeValueType2: ViewStyle;
  attributeValueType3: ViewStyle;
  abilityValueText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  mainAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
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
  mainPokemonImage: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: appTheme['color-black-80'],
    fontSize: 30,
  },
  subtitleStyle: {
    color: appTheme['color-black-0'],
    fontSize: 20,
  },
  pokeButton: {maxWidth: '70%'},
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
});

export default styles;
