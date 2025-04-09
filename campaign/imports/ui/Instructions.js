import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content'>
      <h1>Instructions</h1>
      <p>The purpose of this challenges is to debug and complete code using knowledge gained and lessons learned up to this point.
      </p>
      <h2>Part 1: Gold and Silver  (vid 34a) </h2>
      <p>A team member is still ill. They intended to replicate the following image but hadn't 
          completed their work. Since you are still awesome, your task is to finish their work. 
          The following is an image of their vision for implementing the background color of gold
          and silver for first and second place. Notes left by your team member are as follows:
      </p>
      <br />  
      <ul>
        <li>To do:<ul>
          <li>Create gold and silver variables in imports/client/styles/base/_reset.scss</li>
          <li>In the render() of imports/ui/Candidate.js class, create a variable that will be used to hold
            the current class name of the first div and a class name that includes 
            the position of the candidate (don't forget the back ticks so I can use jsx).
          </li>
          <li>In the imports/client/styles/base/_singleItem.scss partial, create two selectors (one for each position). Set the background
            of the first one to gold and set the background of the second one to silver.
          </li>
          <li>Feeling sick and cant remember if there is something else to do. Maybe it was to lighten up 
            the colors with a function in an scss file.
          </li>
          </ul></li>
      </ul>
      <br />
      <img src='images/gold_silver.png' alt='representation of of gold and silver for first and second places' />
      <br></br><br></br><hr/><hr/>
    </div>
    );
  }
};