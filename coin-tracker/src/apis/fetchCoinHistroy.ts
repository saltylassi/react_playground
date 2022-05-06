const fetchCoinHistory = async (coinId: string, start: number, end: number) => {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${start}&end=${end}`).then(
    (res) => {
      return res.json();
    }
  );
};

export default fetchCoinHistory;
