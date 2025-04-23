import React from 'react';
import {Link} from 'react-router-dom';

export const NotFound = () => {
  
  return (
    <div className='content'>
      <h1>Page Not Found</h1>
      <br></br>
      <Link to="/">Lost? Head to Login</Link>
    </div>
  )
};