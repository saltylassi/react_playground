const fetchCoinPrice = async (coinId: string) => {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then((res) => {
    return res.json();
  });
};

export default fetchCoinPrice;
