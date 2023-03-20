
import './App.css';
import { Navigation } from './components/Navigation';
import {Routes, Route} from "react-router-dom"
import { Posts } from './components/Posts';
import { Comments } from './components/Comments';
import { Comment } from './components/Comment';
import {Homepage} from "./components/Homepage"
import { Users } from './components/Users';
import {UserDetails} from "./components/UserDetails"
import { Albums } from './components/Albums';
import {API_URL} from "./utils/constants"
import { useEffect, useState } from "react";
import { Galery } from './components/Galery';
import {Animation} from "./components/Animation"
import { Episode } from './components/Episode';
import {EpisodeDetails} from "./components/EpisodeDetails"

function App() {

  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  useEffect(() => {
   // console.log("calling useEffect");
    fetch(API_URL + "albums")
      .then((res) => res.json())
      .then((result) => setAlbums(result));


    fetch(API_URL + "photos")
      .then((res) => res.json())
      .then((result) => setPhotos(result))
      .catch((err) => alert(err));
    //console.log(selectedPhoto);

  }, [selectedPhoto]);


  function deleteAlbum(album) {
    console.log(album);
    // .filter ni vrakja niza so elementite koi go ispolnuvaat uslovot (item.id !== album.id)
    // .find ni vrakja eden element onoj sto prv kje go najde vo nizata
    setAlbums([...albums.filter((item) => item.id !== album.id)]);
  }

  function closePhoto() {
    setSelectedPhoto("");
  }


  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/comments" element={<Comments/>}/>
        <Route path="/comment/:commentId" element={<Comment/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user/:userId" element={<UserDetails/>}/>
        <Route
          path="/albums"element={<Albums albums={albums} deleteAlbum={deleteAlbum} />}
        />
        <Route
          path="/galery"
          element={
            <Galery
              listOfPhotos={photos}
              setSelectedPhoto={setSelectedPhoto}
              selectedPhoto={selectedPhoto}
              closePhoto={closePhoto}/>}/>
           <Route path="/animation" element={<Animation/>}/>
           <Route path="/character/:id" element={<Episode/>}/>
          <Route path="/episode/:id" element = {<EpisodeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
