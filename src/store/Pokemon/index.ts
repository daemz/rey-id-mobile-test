import {
  IPokemon,
  IPokemonRawData,
  IPokemonRawResponse,
  IPokemonSliceRedux,
} from '@appTypes/poke.type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IPokemonSliceRedux = {
  fetchPokemonData: false,
  pokemonRawData: undefined,
  currentPokemonRawData: [],
  pokemonList: [],
  selectedType: '',
  isFetchingPokemonData: true,
};

const pokemonSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFetchPokemonData(state, action: PayloadAction<boolean>) {
      state.fetchPokemonData = action.payload;
    },
    setPokemonRawData(state, action: PayloadAction<IPokemonRawResponse>) {
      state.pokemonRawData = action.payload;
    },
    setPokemonList(state, action: PayloadAction<IPokemon[]>) {
      state.pokemonList = action.payload;
    },
    setSelectedType(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
    setIsFetchingPokemonData(state, action: PayloadAction<boolean>) {
      state.isFetchingPokemonData = action.payload;
    },
    setCurrentPokemonRawData(state, action: PayloadAction<IPokemonRawData[]>) {
      state.currentPokemonRawData = action.payload;
    },
  },
});

export const {
  setCurrentPokemonRawData,
  setFetchPokemonData,
  setIsFetchingPokemonData,
  setPokemonList,
  setPokemonRawData,
  setSelectedType,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
