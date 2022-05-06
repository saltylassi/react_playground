import * as React from 'react';
import styled from 'styled-components';
import { IStatusState } from '../atoms/atoms';

interface IProps {
  onInput: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const StatusSelector: React.FC<IProps> = ({ onInput }) => {
  return (
    <StatusSelect onInput={onInput}>
      <StatusOption defaultChecked value={IStatusState.yet}>
        yet
      </StatusOption>
      <StatusOption value={IStatusState.progress}>progress</StatusOption>
      <StatusOption value={IStatusState.done}>done</StatusOption>
    </StatusSelect>
  );
};

export default StatusSelector;

const StatusSelect = styled.select`
  width: 15rem;
`;

const StatusOption = styled.option``;
