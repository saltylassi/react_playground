import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router';
import APIs from '../apis/APIs';
import { getStartEndTime } from '../utils';

interface IHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const useChart = () => {
  const { coinId } = useOutletContext<{ coinId: string }>();
  const { start, end } = getStartEndTime(Date.now());
  const { isLoading, data } = useQuery<Array<IHistory>>(['ohlcv', coinId], () =>
    APIs.fetchCoinHistory(coinId, start, end)
  );

  return { isLoading, data, start, end };
};

export default useChart;
