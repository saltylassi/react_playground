import { useQuery } from 'react-query';
import { useLocation, useMatch } from 'react-router';
import { useParams } from 'react-router-dom';
import APIs from '../apis/APIs';

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface ICoinInfo {
  error?: string;
  id?: string;
  name?: string;
  symbol?: string;
  rank?: number;
  is_new?: boolean;
  is_active?: boolean;
  type?: string;
  tags?: Array<any>;
  team?: Array<any>;
  description?: string;
  message?: string;
  open_source?: boolean;
  started_at?: string;
  development_status?: string;
  hardware_wallet?: boolean;
  proof_type?: string;
  org_structure?: string;
  hash_algorithm?: string;
  links?: any;
  links_extended?: Array<any>;
  whitepaper?: any;
  first_data_at?: string;
  last_data_at?: string;
}

interface IPriceInfo {
  error?: string;
  id?: string;
  name?: string;
  symbol?: string;
  rank?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number;
  beta_value?: number;
  first_data_at?: string;
  last_updated?: string;
  quotes?: IQuotes;
}

interface IQuotes {
  USD: {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number;
    ath_date: string;
    percent_from_price_ath: number;
  };
}

export const useCoin = () => {
  const { coinId } = useParams() as unknown as RouteParams;
  const location = useLocation();
  const state = location.state as RouteState;

  const { isLoading: isCoinInfoLoading, data: coinInfoData } = useQuery<ICoinInfo>(['fetchCoinInfo', coinId], () => {
    return APIs.fetchCoinInfo(coinId);
  });

  const { isLoading: isCoinPriceLoading, data: coinPriceData } = useQuery<IPriceInfo>(
    ['fetchCoinPrice', coinId],
    () => {
      return APIs.fetchCoinPrice(coinId);
    },
    { refetchInterval: 3000 }
  );

  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');
  const isLoading = isCoinInfoLoading || isCoinPriceLoading;

  return {
    coinId,
    state,
    priceMatch,
    chartMatch,
    isLoading,
    coinInfoData,
    coinPriceData,
  };
};
