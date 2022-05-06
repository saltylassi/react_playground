import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atoms/atoms';

interface IProps {
  contents: string | undefined;
}

const Header: React.FC<IProps> = ({ contents }) => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleTheme = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <ToggleThemeBtn onClick={toggleTheme}>ToggleTheme</ToggleThemeBtn>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0.25rem;
`;

const Contents = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 4rem;
`;

const ToggleThemeBtn = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.textColor};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0.25rem;

  &:active {
    opacity: 0.5;
  }
`;
