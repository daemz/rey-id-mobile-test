import {EAppStateStatus} from './appState.type';

export interface IAppSliceRedux {
  loading?: boolean;
  appState?: EAppStateStatus;
}
