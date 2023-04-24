
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import { Nav } from './Nav';
import { FindCountry } from './FindCountry';
import { AllCountries } from './AllCountries';
import {FavoriteQuote} from "./FavoriteQuote"
import {ZenQuotes} from "./ZenQuotes"

function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path='/find-Country' element={<FindCountry/>}></Route>
      <Route path='/all-Countries' element={<AllCountries/>}></Route>
      <Route path='/favorite-quote' element={< FavoriteQuote/>}></Route>
      <Route path='/zen-quotes' element={< ZenQuotes/>}></Route>


      

     </Routes>
    </div>
  );
}

export default App;
