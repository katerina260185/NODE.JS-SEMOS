
import './App.css';
import { Navigation } from './components/Navigation';
import {Routes, Route} from "react-router-dom"
import { Posts } from './components/Posts';
import { Comments } from './components/Comments';
import { Comment } from './components/Comment';
import {Homepage} from "./components/Homepage"
import { Users } from './components/Users';
import {UserDetails} from "./components/UserDetails"

function App() {
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

      </Routes>
    </div>
  );
}

export default App;
