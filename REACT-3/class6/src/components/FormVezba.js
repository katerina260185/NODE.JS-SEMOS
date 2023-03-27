import { useState } from "react";

export const FormVezba = () => {
    const initialValues = {username:"",lastname:"", contact:""}
    const[formValues, setFormValues] = useState(initialValues)
    const [isSubmit, setIsSubmit] =useState(false)
    const [FormErrors, setFormErrors] = useState({})

    

const handleChange = (event) => {
    const{name, value} = event.target
    // name se odnesuva na name:username, name:password, name:email koi se vo inputot vo return
    setFormValues({...formValues, [name]: value})
}
const handleSubmit = (e) => {
    console.log("Form is submitted");
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /[1-9]/ ;

    if (!values.username) {
        errors.username = "Username is required";
      }
      else if(values.username.length <3 || values.username.length >20) {
        errors.username = "invalid username"
      }
  
      if (!values.lastname) {
        errors.lastname = "Lastname is required";
      } else if (values.lastname.length <5 || values.lastname.length >20) {
        errors.lastname = "invalid lastname";
      }
  
      if (!values.contact) {
        errors.contact = "contact is required";
      } else if (!regex.test(values.contact) || values.contact.length !== 9 ) {
        errors.contact = "Contact must be at less 9 numbers";
      }
  
      return errors;
  };

    return (
        <div className="container">
          {
            isSubmit && Object.keys(FormErrors).length === 0 && (
              <div>Form was submitted</div>
            )
          }
    
          <form onSubmit={handleSubmit}>
            <h3>Registration form</h3>
            <div className="form">
              <div className="field">
                <label>Username</label>
                <input 
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p>{FormErrors.username}</p>


              <div className="field">
                <label>Lastname</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </div>
              <p>{FormErrors.lastname}</p>


              <div className="field">
                <label>contact</label>
                <input
                  type="number"
                  name="contact"
                  placeholder="contact"
                  value={formValues.contact}
                  onChange={handleChange}
                />
              </div>
              <p>{FormErrors.contact}</p>
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      );
    }