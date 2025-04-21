import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content'>
      <h1>Instructions</h1>
      <p>The purpose of this challenges is practice React Routes and &#60;Link&#62; (vids 02a, 02b) 
      </p>
      <h2>Part 1: React Routes  </h2>
      <ol>
        <li>Currently, the main.js is rendering the Instructions component and the App component. We would
          rather that they render separately based on their own route. To this end, utilize 
          BrowserRouter, Routes, and Route to permit rendering based on the component's path. Set up the
          Instructions component as the default root directory (i.e., http://localhost:3000/)</li>
          <li>Create a NotFound.js that exports a functional component returns a not found message</li>
          <li>Test each route in the url to make sure they work</li>
      </ol>
      
      <h2>Part 2: &#60;Link&#62;</h2>
      <ol>
        <li>Create a NavLinks.js that exports a nav bar with links to the Instructions Component and the 
          App Component. 
        </li>
        <li>Put these links at the top of the Instructions and App Components</li>
        <li>Test as needed.</li>
      </ol>
     <br />
      <br></br><br></br><hr/><hr/>
    </div>
    );
  }
};