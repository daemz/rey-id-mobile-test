/*

  this page is to match the response structure of the API used

*/

import {IProduct} from './product.type';
import {IUser} from './user.type';

export interface IApiUserResponse {
  data: IUser;
  status?: number;
}

export interface IApiProductListResponse {
  data: IProduct[];
  count?: number;
  status?: number;
}

export interface IApiProductResponse {
  data: IProduct;
  count?: number;
  status?: number;
}
