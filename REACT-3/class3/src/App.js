
import { Sport } from "./components/Sport";
import { Sport2 } from "./components/Sport2";
import { Player } from "./components/Players";
import { StudentClass } from "./components/StudentsClass";
import { CommentsClass } from "./components/Comments";
import { Car } from "./components/Car";
import { User } from "./components/User";

function App() {
  let player = {
    firstName: "Katerina",
    rating: 5,
    print: function () {
      console.log(`name: ${player.firstName} - rating: ${player.rating}`);
    },
  };

  let sportsAndHumans = [
    { name: "Filip", sport: "Football" },
    { name: "Elena", sport: "Tenis" },
    { name: "Kiko", sport: "Handbal" },
    { name: "Tino", sport: "Futsal" },
  ];

  const student = {
    name: "Elena",
    lastName: "Angelova",
    index: 123456,
  };

  const comments = [
    { id: 1, author: "Mario", body: "aaaaaaaaaaaa",  },
    { id: 2, author: "Marijan", body: "aaaaaaaaaaaa" },
    { id: 3, author: "Marin", body: "aaaaaaaaaaaa" },
    { id: 4, author: "Mirko", body: "aaaaaaaaaaaa" },
  ];

  const cars = [
    { brand: "Ford", model: "Focus", year: 2010 },
    { brand: "Opel", model: "Astra", year: 2015 },
    { brand: "Tesla", model: "Model S", year: 2022 },
  ];

  const cars2 = ["ford", "tesla", "opel"];

  let user1 = {
    name: "Liljana",
    age: 26,
    adress: "Skopje"
  };

  let user2 = {
    name: "Laura",
    age: 30,
    adress: "Bitola"
  };

  return (
    <div className="App">
      {/*<Sport name="Katerina" sport="Tenis" />}
      
      

      {{sportsAndHumans.map((object, key) => {
        return <Sport key={key} name={object.name} sport={object.sport} />;
      })}}

     
      
    */  }
      {<Car cars={cars} />}
      {<User user1={user1} user2={user2} showUser={true} /> }
      <User user2={user2} showUser={true} />
      <Sport />
      {<Sport2 sports={sportsAndHumans} /> }
       <Player player={player} />
       {<StudentClass student={student} /> }
       {<CommentsClass comments={comments} userComments= {true}/> }
      
    </div>
  );
}

export default App;

// npm install prop-types --save

//props (properties)
//eden od najvaznite koncepti na react
//prenesuvanje na podatoci od edna vo druga komponenta (od parent -child)
//prop tipes (se osiguruvame deka nema da ima error)