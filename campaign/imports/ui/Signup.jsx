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
                placeholder='Email'  />

        <input  type='password' 
                placeholder='Password' 
                />
        <button>Create Account</button>
      </form>
    </div>
  )

}