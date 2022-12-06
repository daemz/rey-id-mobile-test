/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native PokemonDetail
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import styles from './styles';
import * as appTheme from '@assets/custom-theme.json';
import {useHeader} from '@hooks';
import {useTranslation} from 'react-i18next';
import {IPokemon} from '@appTypes/poke.type';
import {HomeParamList} from '@navigators/Home';
import {PokemonDetailAttributes} from '@screens/Pokedex';
import {useFetchPokemonDetail} from '@services/Pokemon';

export type PokemonDetailScreenRoutProp = RouteProp<
  HomeParamList,
  'PokemonDetail'
>;

interface ITextParams {
  text: string;
  variant?: 'title' | 'subtitle';
}

const PokemonDetail = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const route = useRoute<PokemonDetailScreenRoutProp>();

  const {id} = route?.params;

  const isDarkMode = useColorScheme() === 'dark';

  const {refetch: refetchPokemonDetail} = useFetchPokemonDetail(id, {
    enabled: false,
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : appTheme['color-white'],
  };

  // const [selectedPokemon, setSelectedPokemon] = React.useState<IPokemon>(null);
  const [pokemon, setPokemon] = React.useState<IPokemon>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useHeader({
    variant: 'close',
  });

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: pokemon?.name,
    });
  }, [navigation, pokemon]);

  React.useEffect(() => {
    if (isFocused) {
      (async () => {
        const {data, isLoading: pokemonDataLoading} =
          await refetchPokemonDetail();
        if (!pokemonDataLoading && data) {
          setPokemon(data);
          setIsLoading(false);
        }
      })();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={[styles.mainAreaContainer, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView
          contentContainerStyle={{paddingBottom: 24}}
          showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri: pokemon?.sprites?.other?.['official-artwork']?.front_default,
            }}
            style={styles.mainPokemonImage}
          />

          <PokemonDetailAttributes
            pokemon={pokemon}
            detailTitle={t('general.weight')}
            detailValue={pokemon?.weight}
          />
          <PokemonDetailAttributes
            pokemon={pokemon}
            detailTitle={t('general.height')}
            detailValue={pokemon?.height}
          />
          <PokemonDetailAttributes
            pokemon={pokemon}
            detailTitle={t('general.abilities')}
            variant="abilities"
            hiddenAttributeText={t('general.hidden')}
          />
          <PokemonDetailAttributes
            pokemon={pokemon}
            detailTitle={t('general.type')}
            detailValue={null}
            variant="type"
            onPressSelectedType={type => {
              navigation.navigate('PokemonType', {
                pokemonType: type,
              });
            }}
          />
          <PokemonDetailAttributes
            pokemon={pokemon}
            detailTitle={t('general.form')}
            detailValue={null}
            variant="forms"
          />
          <PokemonDetailAttributes
            pokemon={pokemon}
            detailTitle={t('general.stat')}
            detailValue={null}
            variant="stats"
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default PokemonDetail;
