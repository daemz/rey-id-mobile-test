import {IPokeButtonProps} from '@appTypes/poke.type';
import * as React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import * as appTheme from '@assets/custom-theme.json';

const PokeButton = ({
  title = 'A Button',
  onPress,
  style = {},
  isLoading = false,
}: IPokeButtonProps): React.ReactElement => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress ? onPress : () => {}}>
      <View style={[styles.buttonContainer, style]}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={appTheme['color-white']} />
        ) : (
          <Text style={styles.buttonTitle}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PokeButton);
