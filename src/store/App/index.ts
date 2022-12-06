import {EAppLang, IAppSliceRedux} from '@appTypes/app.type';
import {EAppStateStatus} from '@appTypes/appState.type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IAppSliceRedux = {
  loading: false,
  appState: EAppStateStatus.UNKNOWN,
  appLanguage: EAppLang.EN,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setAppStateStatus(state, action: PayloadAction<EAppStateStatus>) {
      state.appState = action.payload;
    },
    setAppLang(state, action: PayloadAction<EAppLang>) {
      state.appLanguage = action.payload;
    },
  },
});

export const {setAppLoading, setAppStateStatus, setAppLang} = appSlice.actions;

export default appSlice.reducer;
