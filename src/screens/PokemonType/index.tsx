import {Text} from '@components';
import {IPokemonRawData, IPokemonRawFromPokemonType} from '@appTypes/poke.type';
import {HomeParamList} from '@navigators/Home';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import styles from './styles';
import {useHeader} from '@hooks';
import {useTranslation} from 'react-i18next';
import {useFetchPokemonType} from '@services/Pokemon';
import * as appTheme from '@assets/custom-theme.json';
import {POKEMON_TYPE} from '@constants/pokemon.const';
import {capitalizeFirstLetter} from '@utils/common';

export type PokemonTypeScreenRoutProp = RouteProp<HomeParamList, 'PokemonType'>;

const PokemonTypeScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<PokemonTypeScreenRoutProp>();
  const {t} = useTranslation();
  const pokemonType = route?.params?.pokemonType;

  const [pokemonList, setPokemonList] =
    React.useState<IPokemonRawFromPokemonType[]>();
  const [typeOfPokemon, setTypeOfPokemon] = React.useState('');

  const pokemonTypeId =
    pokemonType?.type?.url?.split('/')[
      pokemonType?.type?.url?.split('/').length - 2
    ] || '1';

  const onPress = (typePokemon: IPokemonRawData) => {
    const pokemonId =
      typePokemon?.url?.split('/')[typePokemon?.url?.split('/').length - 2];

    // console.log('pokemonId: ', pokemonId);

    navigation.navigate('PokemonDetail', {
      id: parseInt(pokemonId, 10),
    });
  };

  const {data, isLoading} = useFetchPokemonType(
    parseInt(pokemonTypeId, 10) || 1,
  );

  useHeader({
    title: t('general.pokemonType'),
  });

  const renderItem = (
    pokemonRaw: IPokemonRawFromPokemonType,
    onSelectPokemon?: (data: IPokemonRawData) => void,
  ) => {
    const {pokemon} = pokemonRaw;

    return (
      <Pressable onPress={() => onSelectPokemon(pokemon)}>
        <View style={{paddingVertical: 10}}>
          <Text>{pokemon?.name}</Text>
        </View>
      </Pressable>
    );
  };

  React.useEffect(() => {
    setPokemonList(data?.pokemon);
    setTypeOfPokemon(data?.name);
  }, [data, isLoading]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={appTheme['color-white']} />
      ) : (
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <View
            style={{
              padding: 10,
              backgroundColor: POKEMON_TYPE[typeOfPokemon],
              alignItems: 'center',
              maxWidth: '50%',
            }}>
            <Text fontWeight="bold" color={appTheme['color-white']}>
              {capitalizeFirstLetter(pokemonType?.type?.name)}
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingVertical: 20,
            }}>
            {pokemonList?.map(item => {
              return renderItem(item, pokemonData => onPress(pokemonData));
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PokemonTypeScreen;
