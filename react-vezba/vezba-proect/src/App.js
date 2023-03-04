
import './App.css';
import React, { useState } from "react";
import { CarsForSale } from './components/CarsForSale';
import { OwnedCars } from './components/OwnedCars';
//import { Buynewcar } from './components/Buynewcar';
//import "./css/login.css"
//import "./css/food.css"
//import { Food } from './components/Food';
//import { Header } from './components/Header';
//import { Login } from './components/Login';
//import { Image } from './components/Image';
//import { Hover } from './components/Hover';
//import { Shot } from './components/Shot';


function App() {
  
    const[car, setCar] = useState([
      { id: 1, brand: "Ford" },
      { id: 2, brand: "BMW" },
      { id: 3, brand: "audi"},

    ]);
  const [newCar, setNewcar] = useState(true)
  /*
  const[ownCar, setOwnCar] = useState([
    {id:1, brand:"FORD"},
    { id: 2, brand: "BMW" },
    { id: 3, brand: "audi"},
])
const[ownNewCar, setOwnNewCar] = useState(true)
*/
    function AddnewCar () {
     let newObject =  {
       brand: newCar,
       id: car.length + 1,
    };
       setCar([...car, newObject]);
       setNewcar("")
    }
    
    function Buynewcar () {
   
      
     }
      
  return (
    /*
    <div>
      <Header/>
      <Login/>
      <Image/>
      <Hover/>
    </div>
    */
   <div>
  {/*<Food/>*/}
 {/*<Shot/>*/}
{/*<Car/>
<Garage/> */}
{/*<ListOfCars/> */}

<div>
      <h1>Cars for Sell</h1>
      <input
      type="text"
      placeholder="Enter new brand"
      value={newCar}
      onChange={(e)=> {setNewcar(e.target.value)
      }}
      />
      <button onClick={AddnewCar}>Add new brand</button>
      </div>
    
      <CarsForSale listOfCar={car} />
      <div>
      
     
      </div>
      <hr></hr>
      <h1>Owned Cars</h1>
      
      
   </div>
  
  );
}

export default App;
