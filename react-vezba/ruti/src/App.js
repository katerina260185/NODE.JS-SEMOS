
import React from "react";
import './App.css';
import {  Route, Routes, Link} from "react-router-dom"
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Newmovie } from "./components/Newmovie"
import { Movienotfound } from "./components/Movienotfound";
import { MovieByid } from "./components/MovieById";
import { IdOne } from "./components/IdOne";

export const MovieContext = React.createContext();

const movies =  [
      { id:1, title: 'The Shawshank Redemption',  genre:"comedy", rating: 3 },
      { id:2, title: 'The Godfather',  genre:"action", rating: 5 },
      { id:3, title: 'The Dark Knight',  genre:"drama", rating: 4 } 
    ];
function App() {

  return (
    <div className="App">
      <MovieContext.Provider value={movies}>
      <nav>
    <ul>
      <li><Link to="/">Home</Link> </li>
      <li><Link to="/movies">Movies</Link> </li>
      <li><Link to="/movies/new">New movie</Link></li>
      <li><Link to="/movies/id">Find movie by ID</Link> </li>
       
      
    </ul>
   </nav>

   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/movies/new" element ={<Newmovie/>}/>
    <Route path="/movies/id" element={<MovieByid/>}/>
    <Route path="/movie/:id" element={<IdOne/>}/>
    <Route path="*" element={<Movienotfound/>}/>


    
   </Routes>
      </MovieContext.Provider>
     
   


  
    </div>
  );
}

export default App;
