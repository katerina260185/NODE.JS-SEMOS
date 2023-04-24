import { useState, useEffect } from "react"
import axios from "axios"

export const FavoriteQuote = ()=>{

    const [someNum, setSomeNum] = useState("")
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=> setTodos(res.data))
        .catch((err)=> alert(err))

    }, [])

    function randomNumber (){
     const num =  (Math.floor((Math.random() * 200) + 1))
         return setSomeNum(num)    
    }

    const randomTitle = todos.find((todo) => todo.id === someNum)?.title;

    return(
        <div>
            <button onClick={randomNumber}>give me random number</button>
            <p>{someNum}</p>
            <h4>Title: {someNum}</h4>
            <p>{randomTitle}</p>
          
           
        </div>
    )
}