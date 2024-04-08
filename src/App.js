import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from '../src/components/DragDrop';


function App() {
  return (

    // ! need to wrap the highest order component with the provider
    <DndProvider backend={HTML5Backend}>

      <div className="App">
        <h1>Drag N Drop Trial Phase</h1>

        <DragDrop /> 


      </div>


    </DndProvider>
  );
}

export default App;
