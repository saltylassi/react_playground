import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';
import { getKanbanKeys, IKanban, kanbanState } from '../atoms/atoms';
import useSetter from './useSetter';

const useApp = () => {
  const { setter: setKanban } = useSetter<IKanban>(kanbanState);
  const keys = useRecoilValue(getKanbanKeys);

  const handleDrop = ({ destination, source }: DropResult): boolean => {
    if (!destination) return false;
    setKanban((current) => {
      let newKanbanItems = { ...current };
      const sourceArray = [...newKanbanItems[source.droppableId as keyof IKanban]];
      const destinationArray = [...newKanbanItems[destination!.droppableId as keyof IKanban]];

      const [eventTarget] = sourceArray.splice(source.index, 1);
      if (source.droppableId === destination?.droppableId) {
        destinationArray.splice(source.index, 1);
      }
      destinationArray.splice(destination!.index, 0, eventTarget);
      newKanbanItems[source.droppableId as keyof IKanban] = sourceArray;
      newKanbanItems[destination!.droppableId as keyof IKanban] = destinationArray;

      return newKanbanItems;
    });

    return true;
  };

  const onDrop = useCallback(handleDrop, [setKanban]);

  return { onDrop, keys };
};

export default useApp;
