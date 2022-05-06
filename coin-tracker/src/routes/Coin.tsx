import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import { useCoin } from '../hooks/useCoin';

const Container = styled.div`
  padding: 0 1.5rem;
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0.5rem 0.5rem;
  padding: 1rem 1rem;
  background-color: black;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.textColor};
`;

const ContentColumn = styled.div``;

const DescriptionContainer = styled.div`
  margin: 0.5rem 0.5rem;
  padding: 1rem 1rem;
`;

const Description = styled.span``;

const Coin = () => {
  const { coinId, state, priceMatch, chartMatch, isLoading, coinInfoData, coinPriceData } = useCoin();

  return (
    <Container>
      {isLoading ? null : (
        <>
          <Header contents={state && state.name ? state.name : isLoading ? 'loading' : coinInfoData?.name} />
          {coinInfoData?.error ? (
            <Error error={coinInfoData?.error} />
          ) : (
            <ContentsContainer>
              <ContentColumn>Rank - {coinInfoData?.rank}</ContentColumn>
              <ContentColumn>Symbol - {coinInfoData?.symbol}</ContentColumn>
              <ContentColumn>Price - {coinPriceData?.quotes?.USD.price.toString().slice(0, 10)}</ContentColumn>
            </ContentsContainer>
          )}
          {coinInfoData?.error ? (
            <Error error={coinInfoData?.error} />
          ) : (
            <DescriptionContainer>
              <Description>{coinInfoData?.description}</Description>
            </DescriptionContainer>
          )}
          {coinPriceData?.error ? (
            <ContentsContainer>Error</ContentsContainer>
          ) : (
            <ContentsContainer>
              <ContentColumn>totalSup - {coinPriceData?.total_supply}</ContentColumn>
              <ContentColumn>maxSup - {coinPriceData?.max_supply}</ContentColumn>
            </ContentsContainer>
          )}
          <Tabs
            isActive={[priceMatch !== null, chartMatch !== null]}
            contents={[<Link to={`/${coinId}/price`}>Price</Link>, <Link to={`/${coinId}/chart`}>Chart</Link>]}
          />

          <Outlet context={{ coinId }} />
        </>
      )}
    </Container>
  );
};

export default Coin;
