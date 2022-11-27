import {useHeader} from '@hooks';
import {HomeParamList} from '@navigators/Home';
import {useRoute} from '@react-navigation/native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {useFetchProductById} from '@services/Product';
import * as React from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

export type SecondScreenRouteProp = RouteProp<HomeParamList, 'ProductDetail'>;

const ProductDetail = () => {
  const route = useRoute<SecondScreenRouteProp>();
  const navigation = useNavigation<any>();
  const {id} = route?.params;

  const {data, isLoading} = useFetchProductById(id, {
    enabled: true,
  });

  useHeader({
    title: 'Product Detail',
    // variant: 'close',
    // onPressLeft: () => navigation.goBack(),
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View>
            <Text>{data?.name}</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
