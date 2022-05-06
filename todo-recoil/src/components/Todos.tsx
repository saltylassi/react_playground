import * as React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { todoSelector } from '../atoms/atoms';
import Todo from './Todo';

interface IProps {}

const Todos: React.FC<IProps> = () => {
  const todos = useRecoilValue(todoSelector);
  return (
    <Container>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default Todos;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;
