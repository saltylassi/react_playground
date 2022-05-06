import { RecoilState, useSetRecoilState } from 'recoil';

const useSetter = <T>(state: RecoilState<T>) => {
  const setter = useSetRecoilState(state);
  return { setter };
};

export default useSetter;
