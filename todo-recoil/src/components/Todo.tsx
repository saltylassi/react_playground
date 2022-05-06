import * as React from 'react';
import styled from 'styled-components';
import { IStatusState, ITodoState } from '../atoms/atoms';
import useTodo from '../hooks/useTodo';

interface IProps {
  todo: ITodoState;
}

const Todo: React.FC<IProps> = ({ todo }) => {
  const { handleClick } = useTodo(todo.id);
  return (
    <Container>
      <ContentsContainer>
        <Contents>{todo.text}</Contents>
      </ContentsContainer>
      <ContentsContainer>
        {todo.status !== IStatusState.yet && (
          <SetRecoilStateBtn value={IStatusState.yet} onClick={handleClick}>
            {IStatusState[IStatusState.yet].toUpperCase()}
          </SetRecoilStateBtn>
        )}
        {todo.status !== IStatusState.progress && (
          <SetRecoilStateBtn value={IStatusState.progress} onClick={handleClick}>
            {IStatusState[IStatusState.progress].toUpperCase()}
          </SetRecoilStateBtn>
        )}
        {todo.status !== IStatusState.done && (
          <SetRecoilStateBtn value={IStatusState.done} onClick={handleClick}>
            {IStatusState[IStatusState.done].toUpperCase()}
          </SetRecoilStateBtn>
        )}
      </ContentsContainer>
    </Container>
  );
};

export default Todo;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 15rem;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0.25rem;
`;

const Contents = styled.span``;

const SetRecoilStateBtn = styled.button``;
