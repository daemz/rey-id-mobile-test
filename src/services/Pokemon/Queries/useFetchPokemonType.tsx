import {IPokemonType} from '@appTypes/poke.type';
import {POKEMON_TYPE} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useQuery} from 'react-query';

interface IOptions {
  enabled: boolean;
}

export const fetchPokemonType = async (
  pokemonTypeId: number,
): Promise<IPokemonType> => {
  try {
    const response: IPokemonType = await APIClient.get(
      'type',
      `${pokemonTypeId}`,
    );

    return response;
  } catch (err: any) {
    console.error(
      'services/User/Queries/useFetchPokemonType',
      'fetchPokemonType',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchPokemonType = (
  pokemonId: number,
  options: IOptions = {enabled: true},
) => {
  return useQuery<IPokemonType, Error>(
    POKEMON_TYPE,
    async () => {
      const response = await fetchPokemonType(pokemonId);
      if (!response) {
        throw new Error('fetchPokemonType failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchPokemonType;
