
import './App.css';
import React from "react";
import { Movie } from './components/Movie';
//import { InfoMovie } from './components/InfoMovie';

export const MovieContext = React.createContext();

const movieObj = {
  name: "Dump and Dumper",
  actor:"Jim Carrey",
  rating:5.0,
  genere:"comedy",
  releaseDate: 1994,
  link: "https://www.imdb.com/video/vi2114888729/?playlistId=tt0109686&ref_=tt_ov_vi",
  pictures : [
    "https://m.media-amazon.com/images/M/MV5BOTk5ZjYyZTMtYzYwOC00NmJiLTk1OGQtZTMxY2I1YWQ3ZjJmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg", 
    "https://api.time.com/wp-content/uploads/2019/12/GettyImages-159834198.jpg?quality=85&w=800", 
    "https://api.time.com/wp-content/uploads/2019/12/GettyImages-159834198.jpg?quality=85&w=800"
  ]
}



function App() {
  return (
    <div className="App">
      <MovieContext.Provider value={movieObj}>
      <Movie/>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
