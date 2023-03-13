import {useState} from "react";

export const Newmovie = ()=>{
    const addNewMovie = {title:"", genre:"", rating:""}
   const[newMovie, setnewMovie] = useState(addNewMovie);

// ja zema sodrzinata od input za site od ednas
    const handleChange = (event)=> {
    const{name, value} = event.target
    setnewMovie({...newMovie, [name]: value})

}

    const handleSubmit =(e)=> {
    e.preventDefault();
    //console.log(newMovie);
    setnewMovie({...newMovie});
}

function showMovie (){
    console.log(newMovie)
}
   return(
    <div>
                    <form onSubmit={handleSubmit} />
                    <input
                    type="text"
                    placeholder="title"
                    name="title"
                    value={newMovie.title}
                    onChange={handleChange}
                    />
                    <br/>

                    <form onSubmit={handleSubmit} />
                    <input
                    type="text"
                    placeholder="genre"
                    name="genre"
                    value={newMovie.genre}
                    onChange={handleChange}
                    />
                    <br/>

                    <form onSubmit={handleSubmit} />
                    <input
                    type="text"
                    placeholder="rating"
                    name="rating"
                    value={newMovie.rating}
                    onChange={handleChange}
                    />
                    <br/>

                    <button className="action-button" onClick={showMovie}>submit</button>
    </div>
   )
}