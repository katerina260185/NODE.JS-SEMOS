import { useDispatch, } from "react-redux";
import {useState} from "react"
import { dodadiInputVrednost, dodadiMomentalnaVrednost, dodadiVrednostAsync } from "../action/vrednostAction";

export const Dodadi = ()=> {
    const momentalnaVrednost = 200;
    const [inputVrednost, setInputVrednost] = useState(10);
    
    //const inputVrednost =  useSelector((state)=> state.inputVrednost)

   // const inputVrednost = useSelector((state)=> state.pocetnaVrednost)
    const dispatch = useDispatch()

    return (
        <div>  
            <h1>Input vrednost: {inputVrednost}</h1>
            <input
            type="number"
            value={inputVrednost}
            onChange={(e)=> setInputVrednost(e.target.value)} 
            />
            <hr/>
            <h3>Momentala vrednost: {momentalnaVrednost}</h3>
            <button onClick={()=> dispatch(dodadiMomentalnaVrednost(momentalnaVrednost))}>dodadi momentalna vrednost</button>

            <button onClick={()=> dispatch(dodadiInputVrednost(inputVrednost))}>dodadi input vrednost</button>

            <button onClick={()=> dispatch(dodadiVrednostAsync(inputVrednost))}>dodadi input vrednost posle 3 sekundi </button>

        </div>
    )
}