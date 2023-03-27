import {useState} from "react";

export const Counter = () => {
    const[counter, setCounter] = useState(1);

 const Zgolemi = () =>{
    setCounter((counter)=> {
        return counter +1;

    })
}

const Namali = () =>{
    setCounter((counter)=> {
        return counter -2;

    })

}
const Resetiraj = () =>{
    setCounter((counter)=> {
        return counter = 0;

    })

}
    
    return(

        <div>
            <h1>{counter}</h1>

            <button onClick={Zgolemi}>zgolemi</button>
            <button onClick={Namali}>namali</button>
            <button onClick={Resetiraj}>resetiraj</button>

        </div>
    )
}
/*
 
       <button onClick={setCounter (0)}>resetiraj</button>      

*/