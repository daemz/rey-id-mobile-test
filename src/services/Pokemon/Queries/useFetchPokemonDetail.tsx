import {IPokemon} from '@appTypes/poke.type';
import {POKEMON_DETAIL} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useQuery} from 'react-query';

interface IOptions {
  enabled: boolean;
}

export const fetchPokemonDetail = async (
  pokemonId: number,
): Promise<IPokemon> => {
  try {
    const response: IPokemon = await APIClient.get('pokemon', `${pokemonId}`);

    // return await APIClient.get('pokemon');
    return response;
  } catch (err: any) {
    console.error(
      'services/User/Queries/useFetchPokemonDetail',
      'fetchPokemonDetail',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchPokemonDetail = (
  pokemonId: number,
  options: IOptions = {enabled: true},
) => {
  return useQuery<IPokemon, Error>(
    POKEMON_DETAIL,
    async () => {
      const response = await fetchPokemonDetail(pokemonId);
      if (!response) {
        throw new Error('fetchPokemonDetail failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchPokemonDetail;
