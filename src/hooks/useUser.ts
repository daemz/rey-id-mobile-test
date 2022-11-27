import {RootState} from '@store/index';
import {useSelector} from 'react-redux';
import {ITokenData} from '@appTypes/user.type';

const useUser = () => {
  const {tokenData} = useSelector((state: RootState) => state?.user);

  const getTokenData = (): ITokenData => {
    return tokenData;
  };

  return {
    getTokenData,
  };
};

export default useUser;
