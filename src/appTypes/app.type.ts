import {EAppStateStatus} from './appState.type';

export enum EAppLang {
  EN = 'en',
  ID = 'in_ID',
}
export interface IAppSliceRedux {
  loading?: boolean;
  appState?: EAppStateStatus;
  appLanguage?: EAppLang;
}
