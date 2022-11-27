import {IApiProductResponse} from '@appTypes/api.type';
import {IProduct} from '@appTypes/product.type';
import {PRODUCT_LIST} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useQuery} from 'react-query';

interface IOptions {
  enabled: boolean;
}

export const fetchProductById = async (id: string): Promise<IProduct> => {
  try {
    const response: IApiProductResponse = await APIClient.get(
      'products',
      `/${id}`,
    );
    return response?.data;
  } catch (err: any) {
    console.error(
      'services/User/Queries/useFetchProductById',
      'fetchProductById',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchProductById = (
  id: string,
  options: IOptions = {enabled: true},
) => {
  return useQuery<IProduct, Error>(
    PRODUCT_LIST,
    async () => {
      const response = await fetchProductById(id);
      if (!response) {
        throw new Error('fetchProductById failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchProductById;
