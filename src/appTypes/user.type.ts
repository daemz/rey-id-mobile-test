export interface IUserSliceRedux {
  userDetail?: IUser;
  tokenData?: ITokenData;
}

export interface IUser {
  id: string;
  username?: string;
  name: string;
  address?: string;
  email?: string;
  phone_number?: string;
  gender?: string;
}

export interface ITokenData {
  access_token?: string;
  reset_token?: string;
}
