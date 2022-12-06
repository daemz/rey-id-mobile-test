/* 
populate your things here before the app starts.

you can even add some more new initializers.
*/

import * as React from 'react';
import AppInfoInitiator from './AppInfoInitiator';
import PokemonInitiator from './PokemonInitiator';

export interface IInitializeApp {
  children: JSX.Element;
}

const InitializeApp = ({children}: IInitializeApp) => {
  React.useEffect(() => {
    // add some listeners here, such as network info listeners or such
  }, []);

  return (
    <AppInfoInitiator>
      <PokemonInitiator>{children}</PokemonInitiator>
    </AppInfoInitiator>
  );
};

export default InitializeApp;
