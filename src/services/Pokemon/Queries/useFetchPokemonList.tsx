import {IPokemonRawResponse} from '@appTypes/poke.type';
import {POKEMON_RAW_RESPONSE} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useQuery} from 'react-query';

interface IOptions {
  enabled: boolean;
}

export const fetchPokemonList = async (
  offset: number = 0,
): Promise<IPokemonRawResponse> => {
  try {
    const response: IPokemonRawResponse = await APIClient.get(
      `pokemon?offset=${offset}&limit=5`,
    );

    // return await APIClient.get('pokemon');
    return response;
  } catch (err: any) {
    console.error(
      'services/User/Queries/useFetchPokemonList',
      'fetchPokemonList',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchPokemonList = (options: IOptions = {enabled: true}) => {
  return useQuery<IPokemonRawResponse, Error>(
    POKEMON_RAW_RESPONSE,
    async () => {
      const response = await fetchPokemonList();
      if (!response) {
        throw new Error('fetchPokemonList failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchPokemonList;
