import {IPokemonMenuItem} from '@appTypes/poke.type';

export enum EMenuName {
  HOME = 'Home',
  POKEMON_TYPE = 'Pokemon Type',
}

export const menuItem: IPokemonMenuItem[] = [
  {
    id: 1,
    name: EMenuName.HOME,
    navigationName: 'Main',
  },
  {
    id: 2,
    name: EMenuName.POKEMON_TYPE,
    navigationName: 'PokemonType',
  },
];
