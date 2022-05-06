import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import useBoard from '../hooks/useBoard';
import Card from './Card';
import CardItemForm from './CardItemForm';

interface IProps {
  droppableId: string;
  title: string;
}

const Board: React.FC<IProps> = ({ droppableId, title }) => {
  const { filteredItems } = useBoard(title);
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <CardItemForm boardId={droppableId} />
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <CardContainer ref={provided.innerRef} {...provided.droppableProps}>
            {filteredItems.map((item, index) => {
              return (
                <Card key={`${title}${index}`} draggableId={`${item.text + item.id}`} index={index}>
                  {item.text}
                </Card>
              );
            })}
            {provided.placeholder}
          </CardContainer>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;

const Container = styled.ul`
  width: 100%;
  height: 80vh;
  margin: 3rem 3rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 1rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`;

const Title = styled.span`
  font-weight: 700;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem;
`;
