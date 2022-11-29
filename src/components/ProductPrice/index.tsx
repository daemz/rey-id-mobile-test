import * as React from 'react';

import {Layout, Text} from '@components';
import styles from './styles';

export interface IProductPrice {
  priceText?: string;
  regularPrice?: string;
  isUseNeutralColor?: boolean;
  currency?: '$' | 'Rp.';
}

const ProductPrice = ({
  priceText = '',
  regularPrice = '',
  isUseNeutralColor = false,
  currency = '$',
}: IProductPrice): React.ReactElement => {
  if (regularPrice) {
    return (
      <Layout style={styles.priceText}>
        <Text variant="body1" status={'info'} fontWeight="500">
          {`${currency} ${priceText}`}
        </Text>
        <Text status="hint" variant="body2" textDecorationLine="line-through">
          {`${currency} ${regularPrice}`}
        </Text>
      </Layout>
    );
  }
  return (
    <Text variant="body1" status={'info'} fontWeight="500">
      {`${currency} ${priceText}`}
    </Text>
  );
};

export default React.memo(ProductPrice);
