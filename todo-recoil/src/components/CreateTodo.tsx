import * as React from 'react';
import styled from 'styled-components';
import useCreateTodo from '../hooks/useCreateTodo';

interface IProps {}

const CreateTodo: React.FC<IProps> = () => {
  const { handleSubmit, handleValid, register, errors } = useCreateTodo();
  return (
    <Container onSubmit={handleSubmit(handleValid)}>
      <TodoInput
        {...register('todo', {
          required: 'required',
          minLength: {
            value: 3,
            message: 'too short',
          },
          maxLength: {
            value: 10,
            message: 'too long',
          },
          validate: {
            includeTodo: (value) => (/.*todo.*/.test(value.toLowerCase()) ? 'todo includes todo' : true),
          },
        })}
        placeholder="TODO"
      />
      <ErrorText>{errors?.todo?.message}</ErrorText>
      <SubmitBtn>ADD</SubmitBtn>
    </Container>
  );
};

export default CreateTodo;

const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15rem;
`;

const TodoInput = styled.input`
  width: 100%;
`;

const ErrorText = styled.span``;

const SubmitBtn = styled.button``;
