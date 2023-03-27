import {useState} from "react"

export const StateTutorial = () => {

    //inputValue e property sto go koristime, setInputValue e funkcija so koja go menuvame inputVanue
    const[inputValue, setInputValue] = useState("katerina")

    const onChange = (event) => {
   // console.log(event.target.value)
    //const newValue = event.target.value;
    //setInputValue(newValue)
    setInputValue(event.target.value)
    //console.log(inputValue)
}
    return(
        <div>
        <h1>State !</h1>
        <input onChange={onChange} palcehlder="enter your name"></input>
        <h2>{inputValue}</h2>
        </div>
        

    )
}