import React from 'react';
import { useRecoilState } from 'recoil';
import { IStatusState, statusState } from '../atoms/atoms';

const useTodoList = () => {
  const [status, setStatus] = useRecoilState(statusState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setStatus(() => event.currentTarget.value as IStatusState);
  };

  return { onInput, status };
};

export default useTodoList;
