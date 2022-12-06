/* eslint-disable react-hooks/exhaustive-deps */
/* 
This initiator populates anything related to app, including listeners too.

Such as app version, app state, etc.
*/

import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFetchPokemonList} from '@services/Pokemon';
import {
  setCurrentPokemonRawData,
  setIsFetchingPokemonData,
  setPokemonRawData,
} from '../store/Pokemon';
import {RootState} from '@store/index';

export interface IPokemonInitiator {
  children?: JSX.Element;
}

const PokemonInitiator = ({children}: IPokemonInitiator) => {
  const dispatch = useDispatch();

  const {pokemonList} = useSelector((state: RootState) => state?.pokemon);

  const {refetch: refetchPokemonList} = useFetchPokemonList({
    enabled: false,
  });

  const populatePokemonList = React.useCallback(async (): Promise<any> => {
    try {
      const {data, isLoading: pokemonListLoading} = await refetchPokemonList();
      // console.info('data fetched nih coy: ', data);

      if (!pokemonListLoading) {
        console.info('data fetched nih coy: ', data);

        dispatch(setPokemonRawData(data));
        dispatch(setCurrentPokemonRawData(data?.results));
        dispatch(setIsFetchingPokemonData(false));
      }
    } catch (err) {
      console.error('error fetchUserData: ', err);
      throw err;
    }
  }, [pokemonList]);

  React.useEffect(() => {
    (async () => {
      await populatePokemonList();
    })();
  }, []);

  return children;
};

export default PokemonInitiator;
