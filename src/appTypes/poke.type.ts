import {ViewStyle} from 'react-native';

export interface IPokeButtonProps {
  title?: string;
  onPress?: () => void;
  style?: ViewStyle;
  isLoading?: boolean;
}

export interface IPokemonMenuItem {
  id: number;
  name: string;
  navigationName: string;
}

export interface IOfficialArtwork {
  front_default?: string;
}

export interface IDreamWorld {
  front_default?: string;
  front_female?: string;
}

export interface IOtherOfSprites {
  'official-artwork'?: IOfficialArtwork;
  dream_world?: IDreamWorld;
}

export interface ISprites {
  other?: IOtherOfSprites;
}

export interface IPokemonRawData {
  name?: string;
  url?: string;
}

export interface IPokemonRawResponse {
  count?: number;
  next?: string;
  previous?: string;
  results: IPokemonRawData[];
}

export interface ITypes {
  slot?: number;
  type: IPokemonRawData;
}

export interface IAbilities {
  is_hidden?: boolean;
  slot?: number;
  ability: IPokemonRawData;
}

export interface IStat {
  base_stat?: number;
  effort: number;
  stat: IPokemonRawData;
}

export interface IPokemon {
  id: number;
  name: string;
  abilities?: IAbilities[];
  height?: number;
  weight?: number;
  sprites?: ISprites;
  types?: ITypes[];
  forms?: IPokemonRawData[];
  stats?: IStat[];
}

export interface IPokemonSliceRedux {
  fetchPokemonData?: boolean;
  pokemonRawData?: IPokemonRawResponse; // union
  pokemonList?: IPokemon[];
  selectedType?: string;
  isFetchingPokemonData?: boolean;
  currentPokemonRawData?: IPokemonRawData[]; // for pagination
}

export interface IPokemonRawFromPokemonType {
  pokemon: IPokemonRawData;
  slot?: number;
}

export interface IPokemonType {
  id?: 1;
  name?: string;
  pokemon?: IPokemonRawFromPokemonType[];
}
