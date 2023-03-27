
import './App.css';
import {Routes, Route} from "react-router-dom"
import { Motivation } from './components/Motivation';
import { Navigation } from './components/Navigation';
import { Todos } from './components/Todos';
import { FetchExamples } from './components/FetchExamples';


function App() {
  return (
    <div className="App">
      <Navigation/>

       <Routes>

         <Route path="/motivation" element={<Motivation/>}/>
          <Route path="/todos" element={<Todos/>}/>
          <Route path="/FetchExamples" element={<FetchExamples/>}/>


        </Routes>
    </div>
  );
}

export default App;
