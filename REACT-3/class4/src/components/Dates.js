import {useState} from "react"

export const Dates = () => {
    const [dates, setDates] = useState([])
    
    const addDate = () => {
        let date = new Date().toString(); 
        let newDates = [...dates];
        newDates.push(date);
        setDates(newDates)
    }
    
    return (
        <div>
            {dates.map((date, i) => {
                return <p key={i}> {date}</p>;
            })}
            <button onClick={addDate}>Add Date</button>
        </div>
    )
}