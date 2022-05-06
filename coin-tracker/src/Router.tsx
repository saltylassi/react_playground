import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';

const RoutesPath = {
  COIN_ID: '/:coinId/*',
  COIN: '/',
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesPath.COIN_ID} element={<Coin />}>
          <Route path={`price`} element={<Price />}></Route>
          <Route path={`chart`} element={<Chart />}></Route>
        </Route>
        <Route path={`${RoutesPath.COIN}`} element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
