
import '../App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import {Cities} from "./Cities"
import {Weather} from "./Weather"
import {Nav} from "./Nav"


function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path="/" element={<Navigate to="/local-weather" />} />
      <Route path="/search-cities" element={<Cities/>} />
      <Route path="/local-weather" element={<Weather/>} />



     </Routes>
    </div>
  );
}

export default App;
