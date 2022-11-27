import {BACK_BUTTON_TEXT} from '@constants/dummy.const';
import {HomeParamList} from '@navigators/Home';
import {useRoute} from '@react-navigation/native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export type SecondScreenRouteProp = RouteProp<HomeParamList, 'Second'>;

const SecondScreen = () => {
  const route = useRoute<SecondScreenRouteProp>();
  const navigation = useNavigation<any>();

  const {shouldShowButton} = route?.params;

  const [shouldRenderButton, setShouldRenderButton] = React.useState<boolean>(
    shouldShowButton || false,
  );

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => 'Second Screen',
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerLeftButton}
          onPress={() => navigation.goBack()}>
          <Text>{BACK_BUTTON_TEXT}</Text>
        </TouchableOpacity>
      ),
      headerRight: () => <View />,
    });
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>{'Test Second Screen'}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SecondScreen;
