import { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 70vw;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
`;
