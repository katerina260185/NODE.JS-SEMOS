// funkcionalna komponenta, tuka nema import react

import { AppClass } from "./AppClass";
import { Hello } from "./components/Hello";
import { Hobi } from "./components/Hobi";
import { Macedonija } from "./components/Macedonija";
import { OmilenoHobi } from "./components/OmilenoHobi";
import { Slika } from "./components/slika";
import"./css/example.css";
import { Ime } from "./Ime";


// imeto na komponentite mora da pocnuva so golema bukva (App.js, AppClass1 itn)
function App() {

let number = 4 ;
const element = <h1>hello hello hello</h1>

const student = {
  name: "Laura",
  lastName: "Angelova",
};

function studentFullName (student){
return student.name + " " + student.lastName
}

const print = () => {
  console.log("hellooooo from the console")
}

  return (
  
  <div style={{marginLeft:30}}>
  <h1 className="proba"> hello from React! </h1>;
   <h2>hello from me!!</h2>
   <p>5 + 5</p>
   <p>the result is: {5 +5 - number}</p>
   {element}
   <h2>Hello, {studentFullName(student)}</h2>
   <button onClick ={print}>Click me</button>
   <AppClass />
   <Ime />
   <Hello/>
   <Macedonija/>
   <Hobi/>
   <OmilenoHobi />
   <Slika/>
   </div>
  );
}

export default App;
