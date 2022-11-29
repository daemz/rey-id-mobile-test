import {Text} from '@components';
import * as React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';
import * as appTheme from '@assets/custom-theme.json';

interface IBrikButtonProps {
  onPress?: () => void;
  value?: string;
  onLoading?: boolean;
}

const BrikButton = ({
  onPress,
  value = 'Button',
  onLoading = false,
}: IBrikButtonProps) => {
  return (
    <TouchableOpacity
      disabled={onLoading}
      onPress={() => (onPress ? onPress() : null)}
      style={styles.brikButtonContainer}>
      {onLoading ? (
        <ActivityIndicator
          size={'large'}
          color={appTheme['color-brik-font-white']}
        />
      ) : (
        <Text fontWeight="bold" color={appTheme['color-brik-font-white']}>
          {value.toUpperCase()}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(BrikButton);
