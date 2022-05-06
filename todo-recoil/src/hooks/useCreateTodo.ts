import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { IStatusState, ITodoState, todoState } from '../atoms/atoms';

interface IForm {
  todo: string;
}

const useCreateTodo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  const setTodos = useSetRecoilState(todoState);
  const handleValid = (data: IForm) => {
    setTodos((prev: Array<ITodoState>) => [
      ...prev,
      {
        text: data.todo,
        id: Date.now(),
        status: IStatusState.yet,
      },
    ]);
    setValue('todo', '');
  };

  return { handleSubmit, handleValid, register, errors };
};

export default useCreateTodo;
