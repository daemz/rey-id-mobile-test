/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native Main
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import * as appTheme from '@assets/custom-theme.json';
import {globalStyle} from '@assets/global.styles';
import {useHeader} from '@hooks';
import {BottomSheet, PokeButton, TopSheet} from '@components';
import {MenuIcon} from '@assets/Icons';
import {assets} from '@assets/assets';
import DrawerComponent from '@navigators/components/DrawerComponent';
import {useTranslation} from 'react-i18next';
import {Modalize} from 'react-native-modalize';
import {IPokemonRawData, ITypes} from '@appTypes/poke.type';
import {EMenuName} from '@constants/drawerMenu.const';
import GestureRecognizer from 'react-native-swipe-gestures';

const HEIGHT_FOR_MODAL = Dimensions.get('screen').height / 1.2;

interface ITextParams {
  text: string;
  variant?: 'title' | 'subtitle';
}

const Main = () => {
  const {t} = useTranslation();
  const modalRef = React.useRef<Modalize>(null);
  const navigation = useNavigation<any>();

  const isDarkMode = useColorScheme() === 'dark';

  const {isFetchingPokemonData} = useSelector(
    (state: RootState) => state?.pokemon,
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : appTheme['color-white'],
  };

  const [selectedMenu] = React.useState<EMenuName>(EMenuName?.HOME);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  // const [selectedPokemon, setSelectedPokemon] = React.useState<IPokemon>(null);
  const [selectedPokemon] = React.useState<IPokemonRawData>(null);

  const toggleModalVisible = React.useCallback(() => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [isVisible]);

  const handleOnPressMenu = (navigationName: string) => {
    const dataToBePassed: ITypes = {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    };

    setIsVisible(false);
    navigation.navigate(navigationName, {
      pokemonType: dataToBePassed,
    });
  };

  const onSwipeUp = () => {
    navigation.navigate('PokeDex');
  };

  useHeader({
    variant: 'logo',
    headerRight: (
      <Pressable
        onPress={() => {
          toggleModalVisible();
        }}
        style={globalStyle.menuLogoStyle}>
        <MenuIcon />
      </Pressable>
    ),
    deps: [modalRef],
  });

  React.useEffect(() => {
    navigation.setOptions({
      gestureEnabled: true,
      gestureDirection: 'vertical',
    });
  }, [navigation]);

  const RenderTitleText = ({text, variant}: ITextParams) => (
    <Text
      style={variant === 'title' ? styles.titleStyle : styles.subtitleStyle}>
      {text}
    </Text>
  );

  return (
    <GestureRecognizer style={{flex: 1}} onSwipeUp={() => onSwipeUp()}>
      <SafeAreaView style={[styles.mainAreaContainer, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Image
          source={assets.image.pokemon_home_image}
          style={styles.mainPokemonImage}
        />
        <RenderTitleText text={t('general.mainTitle')} variant="title" />
        <RenderTitleText text={t('general.mainSubtitle')} variant="subtitle" />

        <PokeButton
          style={styles.pokeButton}
          title={t('general.mainButtonText')}
          onPress={() => navigation.navigate('PokeDex')}
          isLoading={isFetchingPokemonData}
        />

        <TopSheet visible={isVisible} onClosePress={() => setIsVisible(false)}>
          <DrawerComponent
            selectedMenu={selectedMenu}
            onMenuPress={(nav: string) => handleOnPressMenu(nav)}
          />
        </TopSheet>
        <BottomSheet
          sheetRef={modalRef}
          title={selectedPokemon?.name}
          height={HEIGHT_FOR_MODAL}>
          <DrawerComponent
            onMenuPress={(nav: string) => handleOnPressMenu(nav)}
          />
        </BottomSheet>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

export default Main;
