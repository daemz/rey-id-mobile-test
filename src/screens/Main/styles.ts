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
}

const styles = StyleSheet.create<IStyles>({
  mainAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
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
    maxWidth: '100%',
    maxHeight: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
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
});

export default styles;
