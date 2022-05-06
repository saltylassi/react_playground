import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  error: Error | string | undefined;
}

const Error: React.FC<IProps> = ({ error }) => {
  return <ContentsContainer>{error?.toString()}</ContentsContainer>;
};

export default Error;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0.5rem 0.5rem;
  padding: 1rem 1rem;
  background-color: black;
  border-radius: 0.5rem;
`;
