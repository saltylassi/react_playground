import { atom, selector } from 'recoil';

export interface ITodoState {
  text: string;
  id: number;
  status: IStatusState;
}

export enum IStatusState {
  'yet' = 'yet',
  'progress' = 'progress',
  'done' = 'done',
}

export const statusState = atom<IStatusState>({
  key: 'status',
  default: IStatusState.yet,
});

export const todoState = atom<Array<ITodoState>>({
  key: 'todo',
  default: [],
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const status = get(statusState);

    return get(todoState).filter((todo) => todo.status === status);
  },
});
