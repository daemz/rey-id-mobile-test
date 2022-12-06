import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '@screens/Main';
import SecondScreen from '@screens/Second';
import PokeDexScreen from '@screens/Pokedex';
import PokemonDetail from '@screens/PokemonDetail';
import PokemonTypeScreen from '@screens/PokemonType';

import {ITypes} from '@appTypes/poke.type';

export type HomeParamList = {
  Main: undefined;
  Second: {shouldShowButton?: boolean};
  PokeDex: undefined;
  PokemonDetail: {id: number};
  PokemonType: {pokemonType: ITypes};
};

export type DrawerParamList = {
  MainDrawer: undefined;
};

const Stack = createStackNavigator<HomeParamList>();

const HomeNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        title: '',
        headerStyle: {elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokeDex"
        component={PokeDexScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      <Stack.Screen name="PokemonType" component={PokemonTypeScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
