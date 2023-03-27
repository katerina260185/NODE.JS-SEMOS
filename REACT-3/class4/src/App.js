import { FavoriteColor } from "./components/FavoriteColor";
import { StateTutorial } from "./components/StateTutorial";
import { Dates } from "./components/Dates";
import {useState, useEffect} from "react";
import { Counter } from "./components/Counter";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  // useEffect is called on first load
  // useEffect is called when some of the states are changed
  // but only those that are included in the array []

  useEffect(() => {
    console.log("Inside useEffect");
  }, [password]);

  return (
    <div >

{<StateTutorial />}
{<FavoriteColor/>}
  {<Dates/>}
  {<Counter/>}

  <input
        type="text"
        placeholder="enter username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="enter password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="enter comment"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />

      <p>username: {username}</p>
      <p>password: {password}</p>
      <p>Comment: {comment}</p>

    </div>
  )
}

export default App;


//useState, useEffect, useContext