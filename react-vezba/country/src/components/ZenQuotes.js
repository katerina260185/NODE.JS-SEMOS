import axios from "axios"
import { useState, useEffect } from "react"

export const ZenQuotes = ()=> {
const[quotes, setQuotes] = useState([])

    useEffect(()=> {
        axios.get("https://type.fit/api/quotes")
        .then((res)=>setQuotes(res.data))
        .catch((err)=> alert(err))
    })
    return(
        <div>
            {quotes.map((quote,i)=> {
                return(
                    <div key={i}>
                        <h4>{quote.author}:</h4>
                        <h3>"{quote.text}"</h3>
                    </div>
                )
            })}


        </div>
    )
}