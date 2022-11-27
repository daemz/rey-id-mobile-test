import {IApiUserResponse} from '@appTypes/api.type';
import {IUser} from '@appTypes/user.type';
import {USER_DATA} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useQuery} from 'react-query';

interface IOptions {
  enabled: boolean;
}

export const fetchUser = async (): Promise<IUser> => {
  try {
    const response: IApiUserResponse = await APIClient.get('users');
    return response?.data;
  } catch (err: any) {
    console.error(
      'services/User/Queries/useFetchUser',
      'fetchUser',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchUser = (options: IOptions = {enabled: true}) => {
  return useQuery<any, Error>(
    USER_DATA,
    async () => {
      const response = await fetchUser();
      if (!response) {
        throw new Error('fetchUser failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchUser;
