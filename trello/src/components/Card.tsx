import { ReactNode, memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
  draggableId: string;
  index: number;
}

const Card: React.FC<IProps> = ({ children, draggableId, index }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {children}
        </Container>
      )}
    </Draggable>
  );
};

export default memo(Card);

const Container = styled.li`
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.cardColor};
  padding: 1rem 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid black;
`;
