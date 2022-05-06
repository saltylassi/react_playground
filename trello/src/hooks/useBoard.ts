import { useRecoilValue } from 'recoil';
import { IKanban, kanbanState } from '../atoms/atoms';

const useBoard = (title: string) => {
  const items = useRecoilValue(kanbanState);
  const filteredItems = items[title as keyof IKanban];

  return { filteredItems };
};

export default useBoard;
