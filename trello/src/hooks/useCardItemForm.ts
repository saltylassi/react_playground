import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { IKanban, kanbanState } from '../atoms/atoms';

interface IForm {
  cardItem: string;
}

const useCardItemForm = (boardId: string) => {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const setCardItem = useSetRecoilState(kanbanState);
  const onValid = (data: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: data.cardItem,
    };

    setCardItem((prev) => {
      return {
        ...prev,
        [boardId]: [...prev[boardId as keyof IKanban], newTodo],
      };
    });

    setValue('cardItem', '');
  };

  return { handleSubmit, register, setValue, onValid };
};

export default useCardItemForm;
