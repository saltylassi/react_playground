import { atom, selector } from 'recoil';

export interface ICardItem {
  id: number;
  text: string;
}

export type ICardItems = Array<ICardItem>;

export interface IKanban {
  todo: ICardItems;
  progress: ICardItems;
  done: ICardItems;
}

export const kanbanState = atom<IKanban>({
  key: 'todo',
  default: {
    todo: [],
    progress: [],
    done: [],
  },
});

export const getKanbanKeys = selector({
  key: 'getKanbanKeys',
  get: ({ get }) => Object.keys(get(kanbanState)),
});
