import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content'>
      <h1>Instructions</h1>
      <p>The purpose of this challenges is to debug and complete code using knowledge gained and lessons learned up to this point.
      </p>
      <h2>Part 1: Rank and position  (vid 33b) </h2>
      <p>A team member of yours has fallen ill. They intended to replicate the following image but hadn't 
          completed their work. Since you are awesome, your task is to debug their code and finish their work. 
          The following is an image of their vision for implementing rank and place. Don't forget, the console 
          is a great resource when debugging.
      </p><br />
      <img src='images/rank_place.jpg' alt='representation of rank and place added to candidates' />
      <br></br><br></br><hr/><hr/>
    </div>
    );
  }
};