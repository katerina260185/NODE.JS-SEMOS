import { Location } from "./Location";
import { User2Context } from "../App";
import React from "react";


//vtora komponenta
export const Korisnik = () => {
  const constexObject = React.useContext(User2Context);
  const user = constexObject.user;
  console.log(user);
  return (
    <div>
      <p>name: {user.name}</p>
      <p>surname: {user.surname}</p>
      <p>Job Position: {user.jobPosition}</p>
      <p>Hobby: {user.hobby}</p>
      <p>EMBG: {user.embg}</p>
      <Location />
    </div>
  );
};