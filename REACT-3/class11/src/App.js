
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { depositBalance, withdrawBalance,} from "./redux/actions/balanceActions";
import { changeCredit } from "./redux/actions/creditRatingAction";
import { Salary } from "./components/Salary";
import { dodadiVrednost, namaliVrednost } from "./redux/actions/vrednostAction";

function App() {
  // const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => state.balanceReducer.balance);
  const creditRating = useSelector((state) => state.creditReducer.creditRating);
  const dispatch = useDispatch();
  const dispatchTwo = useDispatch();
  //const[pocetnaVrednost, setPocetnaVrednost] = useState(0);
  const pocetnaVrednost = useSelector((state)=> state.vrednostReducer.pocetnaVrednost);
  const[inputVrednost, setInputVrednost]= useState(1);

  const handleDeposit = () => {
    // setBalance(balance + Number(value));
    dispatch(depositBalance(value));
  };

  

  const handleWithdraw = () => {
    console.log(value);
    // setBalance(balance - Number(value));
    dispatch(withdrawBalance(value));
  };


  const zgolemi = ()=>{
    //setPocetnaVrednost(pocetnaVrednost + 1)
    dispatchTwo(dodadiVrednost(inputVrednost))
    //dispatchTwo(dodadiVrednost(pocetnaVrednost +1))

  }

  const namali = ()=>{
    //setPocetnaVrednost(pocetnaVrednost - Number(inputVrednost))
    //setPocetnaVrednost(pocetnaVrednost - 1)
    dispatchTwo(namaliVrednost(inputVrednost))
  }
  return (
    <div className="App">
      <h1>My bank account</h1>
      <h1>Balance: {balance} </h1>
      <h1>Credit rating: {creditRating}</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>
      <Salary />
      <hr />
      <div>
        <button onClick={() => dispatch(changeCredit(creditRating + 1))}>
          Increment my credit rating
        </button>
        <button onClick={() => dispatch(changeCredit(creditRating - 1))}>
          Decrement my credit rating
        </button>
      </div>
      <hr></hr>
      <div>
        <h1>Pocetna vrednost: {pocetnaVrednost} </h1>
        
        <input
        type="number"
        value={1}
        onChange={(e)=> setInputVrednost(e.target.value)} 
        /> <br/>
        <button onClick={zgolemi}>zgolemi za 1</button>
        <button onClick={namali}>namali za 1</button>

      </div>
    </div>
  );
}

export default App;

//REDUX
// biblioteka za state menagment,
// koi se zaednicki za site komponenti nesto kako useContext, 
//samo sto ova ne e staticno tuku cesto se menuva
// STORE kade ke se cuva state
//REDUCER odgovorno za vrakanje na nov state - obicna funkcija sto ke generira nov state
//ACTION ke mu kaze na REDUCEROT sto da napravi so state, sto da promeni
//DISPATCH nestoto sto ke ja natera da se izvrsi ACTION (kopce)