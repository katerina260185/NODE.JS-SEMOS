
import './App.css';
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Cake } from "./components/Cake";
import {Comments} from "./components/Comments"
import {Users} from "./components/Users"
import {Posts} from "./components/Posts"


function App() {
  return (
    <div className="App">
     <h1>Redux part II</h1>
     
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
  
    </div>
  );
}

export default App;


// Da kreirate 2 dopolnitelni akcii / reduceri vo istiot primer
// i tie neka pokazuvaat useri i postovi od api-to
// https://jsonplaceholder.typicode.com/