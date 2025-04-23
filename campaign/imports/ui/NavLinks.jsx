import React from 'react';
import { Link } from 'react-router-dom';


export default NavLinks = () => {


  return (
      <>
        <nav>
          <Link to="/">Instructions</Link> | <Link to="/Login">Login</Link> | <Link to="/Signup">Signup</Link> | <Link to="/App">App</Link>
        </nav>
        <br></br>
      </>
    )
  
  }