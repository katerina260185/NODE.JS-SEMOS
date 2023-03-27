
import "./App.css";
//import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { UserInfo } from "./components/User.info";
import { Movie } from "./components/Movie";
import { Information } from "./components/Information";

export const UserContext = React.createContext();
export const User2Context = React.createContext();
export const User3Context = React.createContext();

const user = {
  name: "Katerina",
  surname: "Atanasovska",
  jobPosition: "lawyer",
  hobby: "tennis",
  embg: 666666666666,
  city: "Skopje",
  street: "Srekko Puzhalka",
  number: 35,
};

const movieObj = {
  name: "Dump and Dumper",
  actor:"Jim Carrey",
  rating:5.0,
  genere:"comedy",
  releaseDate: 1994,
  link:"https://www.imdb.com/video/vi2114888729/?ref_=tt_vi_i_1",
  images: "https://m.media-amazon.com/images/M/MV5BOTk5ZjYyZTMtYzYwOC00NmJiLTk1OGQtZTMxY2I1YWQ3ZjJmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg",  
}

function App() {
  return (
    <div className="App">
      < UserContext.Provider value="Katerina">
        <h1>React Context!</h1>
        {/* <User /> */}
        </UserContext.Provider>
        <User2Context.Provider value={{user, theme:"dark", fontSize:"35", role:"Admin"}}>
          <Homepage />
          <UserInfo/> 
          </User2Context.Provider>
          
          <User3Context.Provider value={movieObj}>
            <Movie/>
            <Information/>
          </User3Context.Provider>
       
      
     
    </div>
  );
}

export default App;


// da pratime i koristime podatoci vo bilo koja komponenta bez koristenje na props
// vo bilo koja kompoenta mozat da se koristat
//primer menuvanje na light mode/dark mode
//da go cuvame userot koj se logira, za da piseme welcome user, 
// da senime jazik
//podatocite treba da bidat podatoci koi ne se menuvaat premnogu cesto
// napraaven za koristenje i spodeluvanje na podatocite na polesen nacin 
//kako globalna varijanta za nasite komponenti
// api vgradeno vo react, moze da go koristime bez doponitelni instalacii