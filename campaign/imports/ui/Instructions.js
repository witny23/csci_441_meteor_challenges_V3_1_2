import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content'>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice implementing CSS Flexible Box Layout techniques in our application
      </p>
      <h2>Part 1: Stylize the Candidate component  (vid 31a) </h2>
      <p>Using _candidate.scss and Candidate.js, recreate the image below.</p>
      <img src='images/candidate.jpg' alt='image of completed challenge'/>
      <hr/><hr/>
    </div>
    );
  }
};