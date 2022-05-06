import { DragDropContext } from 'react-beautiful-dnd';
import Board from './components/Board';
import useApp from './hooks/useApp';
import MainLayout from './layouts/MainLayout';

function App() {
  const { onDrop, keys } = useApp();
  return (
    <MainLayout>
      <DragDropContext onDragEnd={onDrop}>
        {keys.map((key) => (
          <Board key={key} droppableId={key} title={key} />
        ))}
      </DragDropContext>
    </MainLayout>
  );
}

export default App;
