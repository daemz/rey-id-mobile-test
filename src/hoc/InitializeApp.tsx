/* 
populate your things here before the app starts.

you can even add some more new initializers.
*/

import {RootState} from '@store/index';
import * as React from 'react';
import {useSelector} from 'react-redux';
import AppInfoInitiator from './AppInfoInitiator';

export interface IInitializeApp {
  children: JSX.Element;
}

const InitializeApp = ({children}: IInitializeApp) => {
  const {loading} = useSelector((state: RootState) => state?.app);

  React.useEffect(() => {
    // add some listeners here, such as network info listeners or such
  }, []);

  return <AppInfoInitiator>{children}</AppInfoInitiator>;
};

export default InitializeApp;
