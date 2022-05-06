import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { useCoins } from '../hooks/useCoins';

const Coins = () => {
  const { coins, isLoading } = useCoins();

  return (
    <Container>
      <Header contents="Coins" />
      {isLoading ? null : (
        <CoinsList>
          {coins?.length
            ? coins.slice(0, 30).map((coin) => (
                <Coin key={coin.id}>
                  <Link
                    to={{
                      pathname: `/${coin.id}`,
                    }}
                    state={{ name: coin.name }}
                  >
                    {coin.name} &rarr;
                  </Link>
                </Coin>
              ))
            : null}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
const Container = styled.div`
  padding: 0 1.5rem;
  max-width: 30rem;
  margin: 0 auto;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.textColor};
  margin-bottom: 0.6rem;
  border-radius: 1rem;
  a {
    padding: 1.2rem;
    transition: all 0.1s ease-in-out;
    display: block;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
