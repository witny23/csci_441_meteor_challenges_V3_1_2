import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks.jsx';

export const Signup = () => {


  const [error_state, setError] = useState('');
 
  const [formData_state, setFormData] = useState({
    email: "",
    password: ""
  })

  let navigate = useNavigate();


  function submitForm(event){
    event.preventDefault();   

    Accounts.createUser({email: formData_state.email, password: formData_state.password}, (errorCallbackObject) => {
      console.log('signup callback error', errorCallbackObject);
    }); 

    navigate("/App");
                                  
  }
  // We can check if Signup works by using the following in the console:
      // require('meteor/meteor').Meteor.userId()
      // require('meteor/accounts-base').Accounts.logout()  - logs user out
      // require('meteor/meteor').Meteor.userId() - check if they are logged out  

  return (
    <div className='content'>
      <NavLinks />
      <h1>Signup here!</h1>
      {error_state ? <p>{error_state}</p> : undefined}
      <br></br>
      <form onSubmit={submitForm}>
        <input  type='email'
                placeholder='Email'  
                value={formData_state.email}
                onChange={(e) => setFormData({...formData_state, email: e.target.value})}/>

        <input  type='password' 
                placeholder='Password' 
                value={formData_state.password} 
                onChange={(e) => setFormData({...formData_state, password: e.target.value})}
                />
        <button>Create Account</button>
      </form>
    </div>
  )

}