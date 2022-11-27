/* 
This initiator populates anything related to app, including listeners too.

Such as app version, app state, etc.
*/

import {EAppStateStatus} from '@appTypes/appState.type';
// import {setAppStateStatus} from '@store/App';
import {setAppStateStatus} from '../store/App';
import * as React from 'react';
import {AppState} from 'react-native';
import {useDispatch} from 'react-redux';

export interface IAppInfoInitiator {
  children?: JSX.Element;
}

const AppInfoInitiator = ({children}: IAppInfoInitiator) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // add some listeners here, such as network info listeners or such
    const subscription = AppState.addEventListener('change', nexAppState => {
      dispatch(setAppStateStatus(nexAppState as EAppStateStatus));
    });

    return () => {
      subscription.remove();
    };
  }, [dispatch]);

  return children;
};

export default AppInfoInitiator;
