const fetchCoinInfo = async (coinId: string) => {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((res) => {
    return res.json();
  });
};

export default fetchCoinInfo;
