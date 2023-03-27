// vo edna komponenta
import {useState} from "react";

import { Dropdown } from "./Dropdown"
//import { Input } from "./Input"


export const Login = ()=> {
   // const apps = [
   // "Facebook", "Instagram", "Twitter"
  //  ]
   //const[selectedValue, setSelectedValue] = useState ("Facebook")
   const initialValues = {user:"", password:"", comment:""}
   const[values, setValues] = useState(initialValues)
   const[pass, setPass] = useState ("password")
   const [isTextarea, setIsTextarea] = useState(false);
   const[textarea, setTextarea] = useState("")
  
  
   // ja zema sodrzinata od input za site od ednas
   const handleChange = (event)=> {
   const{name, value} = event.target
   setValues({...values, [name]: value})
}

    const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(values);
    setValues({...values});
}

function showPass () {
    setPass(pass === "password" ? "text" : "password");
}

function changeTextarea (){
    setIsTextarea(!isTextarea)
}

function showValues () {
   // let userValue = values.user + values.password + values.comment
   // window.alert(userValue)
   window.alert("user: " + values.user + " " + "password: "+ values.password + " " + "comment: " + values.comment)

}
    return(
    <div id="login">
        
            <form onSubmit={handleSubmit} />
                    <input
                    type="text"
                    placeholder="user"
                    name="user"
                    value={values.user}
                    onChange={handleChange}
                    />
                    <br/>

                    <input 
                    type={pass}
                    placeholder="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    />
                    <span onClick={showPass} ><i className={pass === "password" ? "fas fa-eye-slash" : "fas fa-eye"}></i></span>
                    
                    <br/>

                    {isTextarea ? (
                    <textarea
                    type="textarea"
                    cols = "50"
                    rows ="20"
                    placeholder="comment"
                    name="comment"
                    value={values.comment}
                    onChange={handleChange}
                    />
                    ) : (
                    <input type="text" 
                    placeholder="comment" 
                    value={values.comment} 
                    onChange={handleChange} /> )}
                    <button onClick={changeTextarea}>change</button>
    
                    <br/>
                    <Dropdown/>
                    <br/> 
                
                <button className="action-button" onClick={showValues}>submit</button>

        </div>
    )

}