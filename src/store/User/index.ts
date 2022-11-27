import {ITokenData, IUser, IUserSliceRedux} from '@appTypes/user.type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IUserSliceRedux = {
  userDetail: undefined,
  tokenData: {
    access_token: '',
    reset_token: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetail(state, action: PayloadAction<IUser>) {
      state.userDetail = action.payload;
    },
    setTokenData(state, action: PayloadAction<ITokenData>) {
      state.tokenData = action.payload;
    },
  },
});

export const {setUserDetail, setTokenData} = userSlice.actions;

export default userSlice.reducer;
