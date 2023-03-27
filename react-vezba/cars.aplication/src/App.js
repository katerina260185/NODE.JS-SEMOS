
import './App.css';
import { useState } from 'react';
import { CarsForSale } from "./components/CarsForSale"





function App() {

  // CARS FOR SALE
  const[car, setCar] = useState([
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "audi"},

  ]);

  // "state" za dodavanje na nova kola od input vo cars for sale
  const[newCar, setNewcar] = useState("")

// funkcija za nova kola
  function AddnewCar () {
    let newObject =  {
      brand: newCar,
      id: car.length + 1,
   };
      setCar([...car, newObject]);
      setNewcar("")
   }

  return (
    <div className="App">

      
<CarsForSale listOfCar={car}/>

      </div>
       
)
  }

export default App;
