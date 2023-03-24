
import './App.css';
import{useSelector, useDispatch} from "react-redux"
import {namaliVrednost, dodadiVrednost} from "./action/vrednostAction"
import { Dodadi } from './components/Dodadi';
//import { useState } from 'react';


function App() {
  
//const [pocetnaVrednost, setPocetnaVrednost] = useState(0);
const pocetnaVrednost = useSelector((state)=> state.vrednostReducer.pocetnaVrednost)


const dispatch = useDispatch();

function zgolemi () {
 // return setPocetnaVrednost(pocetnaVrednost + 1)
 dispatch(dodadiVrednost())
}

function namali () {
  //return setPocetnaVrednost(pocetnaVrednost - 1)
  dispatch(namaliVrednost())
}


return (
    <div className="App">
      <h1>Pocetna vrednost: {pocetnaVrednost}</h1>
      <button onClick={zgolemi}>Zgolemi za 1</button>
      <button onClick={namali}>Namali za 1</button>
      <hr></hr>
      
         <Dodadi/>

      
    </div>
  );
}

export default App;



// Sega da kreirame nekoja nova komponenta, slicna na sallary, taa komponenta da ima vnatre
// eden input so broj i 3 kopcinja, ednoto da ja dodava momentalnata vrednost sto ja imame vo redux
// drugovo da ja dodava onaa vrednost sto se naoga vo inputot
// tretoto kopce da ja dodava vrednost od inputot no asinhrono posle 3 sekundi, moze da stavime
// vnatre nekoj console.log, za ova da iskoristime middleware i redux thunk
