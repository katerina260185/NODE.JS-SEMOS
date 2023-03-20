import {useEffect, useState} from "react"
import {Link} from "react-router-dom"



export const Animation = () => {
  const [caracters, setCaracters] = useState([]);

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then((res)=> res.json())
    .then((data)=> setCaracters(data.results))
    .catch((err) => alert(err))
  }, [])
  
  const filteredCaracters = caracters.filter(c => c.id);


    return (
    
      <div>
      
      {filteredCaracters.map (c => {
        return(
          <div key={c.id}> 
          <p>ID:{c.id}</p>
          <p>Name:{c.name}</p>
          <p>Status:{c.status}</p>
          <img src={c.image} alt="img"></img> <br></br>
          <p>location name: {c.location.name} </p> 
          <p> <a href={c.location.url}>More info about character</a></p>
          <Link to={`/character/${c.id}`}>All episodes of {c.name}</Link> <br></br>
          <hr></hr>
          </div>        
          )
      })}
      </div>
    )     
  };

  
  