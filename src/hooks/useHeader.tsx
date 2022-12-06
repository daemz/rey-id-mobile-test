/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Image as NativeImage, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {globalStyle} from '@assets/global.styles';
import {CloseIcon} from '@assets/Icons';
import {assets} from '@assets/assets';

interface IHeader {
  title?: string | React.ReactElement;
  onPressLeft?: () => void;
  headerRight?: React.ReactElement;
  variant?: 'logo' | 'close';
  deps?: React.DependencyList;
}

interface IHeaderLeft {
  onBack?: () => void;
  variant?: 'logo' | 'close';
}

const HeaderLeft = ({onBack, variant}: IHeaderLeft) => {
  if (variant === 'logo') {
    return (
      <NativeImage
        source={assets.logo.pokemon_logo}
        style={globalStyle.pokemonLogo}
      />
    );
  }
  return (
    <TouchableOpacity style={globalStyle.backButton} onPress={onBack}>
      <CloseIcon />
    </TouchableOpacity>
  );
};

const useHeader = ({
  title,
  onPressLeft,
  headerRight,
  variant = 'close',
  deps = [],
}: IHeader) => {
  const navigation = useNavigation<any>();

  const titleText = title
    ? typeof title === 'string'
      ? title.toUpperCase()
      : title
    : '';

  const onBack = (): void => {
    onPressLeft ? onPressLeft() : navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: titleText,
      headerStyle: globalStyle.headerStyle,
      headerTitleStyle: globalStyle.headerTitleStyle,
      headerTitleAlign: 'center',
      headerLeft: () => <HeaderLeft variant={variant} onBack={onBack} />,
      headerRight: () => headerRight,
    });
  }, [...deps]);
};

export default useHeader;
