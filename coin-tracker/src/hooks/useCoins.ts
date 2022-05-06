import { useQuery } from 'react-query';
import APIs from '../apis/APIs';

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export const useCoins = () => {
  const { isLoading, data: coins } = useQuery<Array<ICoin>>('fetchCoins', APIs.fetchCoins);

  return { coins, isLoading };
};
