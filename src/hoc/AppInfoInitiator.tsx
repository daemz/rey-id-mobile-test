/* eslint-disable react-hooks/exhaustive-deps */
/* 
This initiator populates anything related to app, including listeners too.

Such as app version, app state, etc.
*/

import {EAppStateStatus} from '@appTypes/appState.type';
// import {setAppStateStatus} from '@store/App';
import {setAppLang, setAppStateStatus} from '../store/App';
import * as React from 'react';
import {AppState, NativeModules, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import i18n from '../translations';
import {EAppLang} from '@appTypes/app.type';

export interface IAppInfoInitiator {
  children?: JSX.Element;
}

const AppInfoInitiator = ({children}: IAppInfoInitiator) => {
  const dispatch = useDispatch();

  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  React.useEffect(() => {
    if (deviceLanguage === EAppLang.ID) {
      i18n.changeLanguage(deviceLanguage);
      dispatch(setAppLang(deviceLanguage));
    } else {
      dispatch(setAppLang(deviceLanguage));
    }
  }, [deviceLanguage]);

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
