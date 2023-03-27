import axios from "axios"
import {useState, useEffect} from "react"

export const Todos =()=> {
const[todos, setTodos]= useState([]);

useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=> setTodos(res.data))
    .catch((err)=>alert(err))
}, []);


    return (
        <div>
{todos.map((todo, i)=> {
    return (
        <div key={i}>
            <p>ID: {todo.id}</p>
            <p>UserID: {todo.userId}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed}</p> <hr/>
        </div>
    )
})}
        </div>
    )
}