import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EpisodeDetails = () => {
  const [episode, setEpisode] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then((data) => setEpisode(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!episode) {
    return <p>Loading episode details...</p>;
  }

  return (
    <div>
      <h2>Episode: {episode.id}</h2>
      <p>Episode name: {episode.name}</p>
      <p>Air date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
      <p>Create: {episode.created}</p>

      <p>All Characters in this episode:</p>
      <ul>
        {episode.characters.map((characterUrl, i) => (
          <li key={i}>
            <a href={characterUrl}>{characterUrl}</a>
          </li>
        ))}
      </ul>
     
      

    </div>
  );
};