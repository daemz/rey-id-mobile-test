/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {globalStyle} from '@assets/global.styles';
import {CloseIcon} from '@assets/Icons';
import {BACK_BUTTON_TEXT} from '@constants/dummy.const';

interface IHeader {
  title?: string | React.ReactElement;
  onPressLeft?: () => void;
  headerRight?: React.ReactElement;
  variant?: 'back' | 'close';
  deps?: React.DependencyList;
}

interface IHeaderLeft {
  onBack?: () => void;
  variant?: 'back' | 'close';
}

const HeaderLeft = ({onBack, variant}: IHeaderLeft) => {
  if (variant === 'back') {
    return (
      <TouchableOpacity style={globalStyle.headerLeftButton} onPress={onBack}>
        <Text>{BACK_BUTTON_TEXT}</Text>
      </TouchableOpacity>
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
  variant = 'back',
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
