import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";


export const Episode = () => {
  const [infoEpisode, setInfoEpisode] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=> res.json())
    .then((data)=> setInfoEpisode(data.episode))
    .catch((err) => alert(err))
  }, [id])

return (
    <div>
      <h1>Episodes connected with character ID: {id}</h1>
      {infoEpisode.map((epi,i)=>{
         const episodeId = epi.slice(epi.lastIndexOf("/") + 1);
        return(
          <div key={i}>
            <li >
           <Link to={`/episode/${episodeId}`}>{epi}</Link>
            
            </li>
          </div>
        )
      })}
      



      </div>
     
)

}