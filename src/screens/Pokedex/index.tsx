/* eslint-disable react-hooks/exhaustive-deps */
import {
  IAbilities,
  IPokemon,
  IPokemonRawData,
  IPokemonRawResponse,
  IStat,
  ITypes,
} from '@appTypes/poke.type';
import {assets} from '@assets/assets';
import {BottomSheet, PokeButton} from '@components';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '@store/index';
import {
  setCurrentPokemonRawData,
  setFetchPokemonData,
  setIsFetchingPokemonData,
  setPokemonList,
  setPokemonRawData,
} from '../../store/Pokemon';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Text as CustomText} from '@components';
import {Modalize} from 'react-native-modalize';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {fetchPokemonDetail} from '@services/Pokemon/Queries/useFetchPokemonDetail';
import {APIClient} from '@utils/api';
import {capitalizeFirstLetter} from '@utils/common';
import {EPokemonType, POKEMON_TYPE} from '@constants/pokemon.const';
import * as appTheme from '@assets/custom-theme.json';

const HEIGHT_FOR_MODAL = Dimensions.get('screen').height / 1.2;

export interface IPokeDexScreenProps {
  pokemonData?: IPokemonRawData[];
}

type TPokemonAttributesVariant =
  | 'number'
  | 'abilities'
  | 'type'
  | 'forms'
  | 'stats';

export interface IPokemonAttributesParams {
  pokemon: IPokemon;
  detailTitle: string;
  detailValue?: number | [];
  variant?: TPokemonAttributesVariant;
  hiddenAttributeText?: string;
  onPressSelectedType?: (type: ITypes) => void;
  disabled?: boolean;
}

interface IHeaderText {
  title?: string;
}

export const renderPokemonType = (
  pokemonType: EPokemonType,
  onPress?: () => void,
  disabled?: boolean,
) => {
  // const pokemonType =
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <View
        style={[
          styles.typeContainer,
          {backgroundColor: POKEMON_TYPE[pokemonType]},
        ]}>
        <Text style={styles.typeText}>
          {capitalizeFirstLetter(pokemonType)}
        </Text>
      </View>
    </Pressable>
  );
};

export const renderPokemonStats = (pokemonType: IStat) => {
  return (
    <View style={[styles.typeContainerStats]}>
      <CustomText variant="headline5" flex={1}>
        {capitalizeFirstLetter(pokemonType?.stat?.name)}
      </CustomText>
      <CustomText variant="headline5">
        {capitalizeFirstLetter(pokemonType?.base_stat.toString())}
      </CustomText>
    </View>
  );
};

export const renderTextAbilities = (
  abilities: IAbilities,
  isHiddenText?: string,
) => {
  return (
    <Text style={styles.abilityValueText}>
      {`• ${capitalizeFirstLetter(abilities?.ability?.name)} `}
      {abilities?.is_hidden && `(${isHiddenText})`}
    </Text>
  );
};

export const renderTextForms = (form: IPokemonRawData) => {
  return (
    <Text style={styles.abilityValueText}>
      {`• ${capitalizeFirstLetter(form?.name)} `}
    </Text>
  );
};

export const PokemonDetailAttributes = ({
  pokemon,
  detailTitle,
  detailValue,
  variant = 'number',
  hiddenAttributeText = 'Hidden',
  onPressSelectedType,
}: IPokemonAttributesParams) => {
  const variantAttributeStyle = {
    ['number']: styles.attributeValueType1,
    ['abilities']: styles.attributeValueType2,
    ['forms']: styles.attributeValueType2,
    ['stats']: styles.attributeValueType2,
    ['type']: styles.attributeValueType3,
  };

  return (
    <View style={styles.attributeContainer}>
      <Text style={styles.attributeTitle}>{detailTitle}:</Text>
      {variant === 'number' && (
        <Text style={variantAttributeStyle[variant]}>{detailValue}</Text>
      )}
      {variant === 'abilities' && (
        <View style={variantAttributeStyle[variant]}>
          {pokemon?.abilities?.map(item =>
            renderTextAbilities(item, hiddenAttributeText),
          )}
        </View>
      )}
      {variant === 'forms' && (
        <View style={variantAttributeStyle[variant]}>
          {pokemon?.forms.map(item => renderTextForms(item))}
        </View>
      )}
      {variant === 'type' && (
        <View style={variantAttributeStyle[variant]}>
          {pokemon?.types.map(item =>
            renderPokemonType(item?.type?.name as EPokemonType, () =>
              onPressSelectedType(item),
            ),
          )}
        </View>
      )}
      {variant === 'stats' && (
        <View style={variantAttributeStyle[variant]}>
          {pokemon?.stats.map(item => renderPokemonStats(item))}
        </View>
      )}
    </View>
  );
};

const PokeDexScreen = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  const modalRef = React.useRef<Modalize>(null);

  const {
    currentPokemonRawData,
    pokemonList,
    isFetchingPokemonData,
    pokemonRawData,
  } = useSelector((state: RootState) => state?.pokemon);

  const [selectedPokemon, setSelectedPokemon] = React.useState<IPokemon>(null);

  const fetchNextPage = React.useCallback(async (): Promise<any> => {
    const nextPageData: IPokemonRawResponse = await APIClient.getWithFullUrl(
      pokemonRawData?.next,
    );

    dispatch(setPokemonRawData(nextPageData));
    dispatch(setCurrentPokemonRawData(nextPageData?.results));
  }, [pokemonList]);

  const fetchForPokemonData = React.useCallback(async (): Promise<any> => {
    let pokemonData: IPokemon[] = [...pokemonList];

    for (const pokemon of currentPokemonRawData) {
      const pokemonId = parseInt(
        pokemon?.url.split('/')[pokemon?.url.split('/').length - 2],
        10,
      );

      const {id, name, height, sprites, weight, types, abilities} =
        await fetchPokemonDetail(pokemonId);

      const pokemonResponseBody: IPokemon = {
        id,
        name,
        height,
        sprites,
        weight,
        types,
        abilities,
      };

      pokemonData.push(pokemonResponseBody);
    }

    dispatch(setPokemonList(pokemonData));
    dispatch(setFetchPokemonData(false));
    dispatch(setIsFetchingPokemonData(false));
  }, [pokemonList]);

  const onPokemonSelected = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);

    modalRef.current?.open();
  };

  const Header = ({title = 'Some Title'}: IHeaderText) => (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );

  const renderPokemonCard = (
    pokemon: IPokemon,
    onPress?: (pokemon: IPokemon) => void,
  ) => {
    return (
      <Pressable onPress={() => onPress(pokemon)}>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: pokemon?.sprites?.other?.['official-artwork']?.front_default,
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardIdContainer}>
            <Text style={styles.idText}>{`#${pokemon?.id}`}</Text>
          </View>
          <Text style={styles.titleTextStyle}>
            {capitalizeFirstLetter(pokemon?.name)}
          </Text>
          <View style={styles.type}>
            {pokemon?.types.map(item =>
              renderPokemonType(item?.type?.name as EPokemonType),
            )}
          </View>
        </View>
      </Pressable>
    );
  };

  const BottomSheetContent = () => {
    return (
      <View style={styles.sheetContainer}>
        <Image
          source={{
            uri: selectedPokemon?.sprites?.other?.['official-artwork']
              ?.front_default,
          }}
          style={styles.sheetImage}
        />
        <PokemonDetailAttributes
          pokemon={selectedPokemon}
          detailTitle={t('general.weight')}
          detailValue={selectedPokemon?.weight}
        />
        <PokemonDetailAttributes
          pokemon={selectedPokemon}
          detailTitle={t('general.height')}
          detailValue={selectedPokemon?.height}
        />
        <PokemonDetailAttributes
          pokemon={selectedPokemon}
          detailTitle={t('general.abilities')}
          variant="abilities"
          hiddenAttributeText={t('general.hidden')}
        />
        <PokemonDetailAttributes
          pokemon={selectedPokemon}
          detailTitle={t('general.type')}
          detailValue={null}
          variant="type"
          onPressSelectedType={() => {}}
        />

        <PokeButton
          onPress={() => {
            navigation.navigate('PokemonDetail', {
              id: selectedPokemon?.id,
            });
            modalRef?.current.close();
          }}
          style={styles.sheetButton}
          title={t('general.moreDetail')}
        />
      </View>
    );
  };

  React.useEffect(() => {
    (async () => {
      await fetchNextPage();
      await fetchForPokemonData();
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (isFetchingPokemonData) {
        await fetchNextPage();
        await fetchForPokemonData();
      }
    })();
  }, [isFetchingPokemonData]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={assets.image.pokemon_background_image}>
          <ScrollView nestedScrollEnabled>
            <Header title="PokéDex" />
            <View style={styles.body}>
              <Text style={styles.subtitleText}>
                {t('general.allGeneration', {total: pokemonRawData?.count})}
              </Text>

              <FlatList
                data={pokemonList}
                extraData={pokemonList}
                renderItem={({item}) =>
                  renderPokemonCard(item, onPokemonSelected)
                }
                contentContainerStyle={styles.list}
                keyExtractor={(item, index) => `${item?.name} - ${index}`}
                ListFooterComponent={() => (
                  <Pressable
                    disabled={isFetchingPokemonData}
                    onPress={async () => {
                      dispatch(setIsFetchingPokemonData(true));
                    }}>
                    {isFetchingPokemonData ? (
                      <ActivityIndicator
                        size={'large'}
                        color={appTheme['color-white']}
                      />
                    ) : (
                      <CustomText fontWeight="bold" variant="body1">
                        {t('general.loadMore')}
                      </CustomText>
                    )}
                  </Pressable>
                )}
              />
            </View>
          </ScrollView>
          <BottomSheet
            sheetRef={modalRef}
            title={selectedPokemon?.name}
            onClose={() => modalRef?.current.close()}
            height={HEIGHT_FOR_MODAL}>
            <BottomSheetContent />
          </BottomSheet>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default PokeDexScreen;
