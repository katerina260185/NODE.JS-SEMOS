import { Korisnik } from "./Korisnik";

//prva komponenta
export const Homepage = () => {
  return (
    <div>
      <h1>Welcome Katerina</h1>
      <h1>Here are your full information!</h1>
      <Korisnik />
    </div>
  );
};