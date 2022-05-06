import * as React from 'react';
import styled from 'styled-components';
import useTodoList from '../hooks/useTodoList';
import CreateTodo from './CreateTodo';
import StatusSelector from './StatusSelector';
import Todos from './Todos';

interface IProps {}

const ToDoList: React.FC<IProps> = () => {
  const { onInput } = useTodoList();
  return (
    <Container>
      <StatusSelector onInput={onInput} />
      <CreateTodo />
      <Todos />
    </Container>
  );
};

export default ToDoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
