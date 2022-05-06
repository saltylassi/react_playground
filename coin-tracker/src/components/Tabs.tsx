import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  contents: React.ReactChild[];
  isActive: boolean[];
}

const Tabs: React.FC<IProps> = ({ contents, isActive }) => {
  return (
    <Container>
      {contents.map((component, index) => {
        return (
          <ContentsColumn key={index} isActive={isActive[index]}>
            {component}
          </ContentsColumn>
        );
      })}
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0.5rem;
`;

const ContentsColumn = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid;
  border-color: ${(props) => props.theme.textColor};

  margin: 0.5rem 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  display: ${(props) => (props.isActive ? 'none' : 'flex')};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
