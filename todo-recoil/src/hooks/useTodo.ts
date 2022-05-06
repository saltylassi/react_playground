import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IStatusState, todoState } from '../atoms/atoms';

const useTodo = (id: number) => {
  const setTodos = useSetRecoilState(todoState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = event.currentTarget.value;

    setTodos((current) => {
      const newArr = current.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: targetValue as IStatusState };
        }
        return todo;
      });

      return newArr;
    });
  };

  return { handleClick };
};

export default useTodo;
