import styled from 'styled-components';
import useCardItemForm from '../hooks/useCardItemForm';

interface IProps {
  boardId: string;
}

const TodoForm: React.FC<IProps> = ({ boardId }) => {
  const { handleSubmit, register, onValid } = useCardItemForm(boardId);
  return (
    <Container onSubmit={handleSubmit(onValid)}>
      <TodoInput type="text" {...register('cardItem', { required: true })} />
      <SubmitBtn>Add</SubmitBtn>
    </Container>
  );
};

export default TodoForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
`;

const TodoInput = styled.input`
  margin: 0.5rem 0;
`;

const SubmitBtn = styled.button`
  border: 1px solid black;
  border-radius: 0.2rem;
  margin: 0.5rem 0;
  :active {
    opacity: 0.7;
  }
  padding: 1rem 0;
`;
