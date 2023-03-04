import {useState} from "react";


export const Homework = () => {
    const initialValues = {username:"",lastname:"", email:"", password:"", age:""}
    const[formValue, setFormValues] = useState(initialValues)
    const[hideValues, setHideValues] = useState(false) // boolean
    
// ja zema sodrzinata od input
    const handleChange = (event)=> {
        const{name, value} = event.target
        setFormValues({...formValue, [name]: value})
   
    }

// ja skladira sodrzinata od input
    
        const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(formValue);
        setFormValues({...formValue});
    }

    const hideSubmit = () => {
    // setFormValues(!formValue)
    setHideValues(!hideValues)

    }
    return(
        
        <div>
            <form onSubmit={handleSubmit} />
            <input
            type="text"
            name="username"
            placeholder="username"
            value={formValue.username}
            onChange={handleChange}
            
            />
            <br/>
            <input
            type="text"
            name="lastname"
            placeholder="last name"
            value={formValue.lastname}
            onChange={handleChange}

            />
            <br/>
            <input
            type="text"
            name="email"
            placeholder="e-mail"
            value={formValue.email}
            onChange={handleChange}

            />
            <br/>
            <input
            type="text"
            name="password"
            placeholder="password"
            value={formValue.password}
            onChange={handleChange}

            />
            <br/>
            <input
            type="text"
            name="age"
            placeholder="age"
            value={formValue.age}
            onChange={handleChange}

            />
            <br/>
            <button onClick={hideSubmit}>{hideValues ? "hide result" : "show result"}</button>
            
            <div>
                
                <table>
                    <thead>
                    <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>e-mail</th>
                 <th>password</th>
                 <th>age</th>
             </tr>
                    </thead>
                    <tbody>
                    { hideValues && 
                    <tr>
                 <th>{formValue.username}</th>
                 <th>{formValue.lastname}</th>
                 <th>{formValue.email}</th>
                 <th>{formValue.password}</th>
                 <th>{formValue.age}</th>
             </tr>
}
                    </tbody>
                </table>
                
            </div>


          
        </div>

        
    )
}