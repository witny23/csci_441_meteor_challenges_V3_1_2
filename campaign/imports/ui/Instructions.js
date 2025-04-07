import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content'>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice implementing CSS Flexible Box Layout techniques in our application.
        In addition, we will be practicing with object spread operator &amp; and its shorthand.
      </p>
      <h2>Part 1: Flip move  (vid 32a) </h2>
      <p>Go through the FlipMove documentation (<a href='https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/api_reference.md' 
      target='blank'>https://www.npmjs.com/package/react-flip-move</a>) and implement an animation that you think would be cool on the
      candidate list.</p>
      
      <h2>Part 2: ES6 intro to object spread operator &amp; object property shorthand  (vid 33a) </h2>
      <p>Take a look at the challenge in server/main.js</p>
      <br></br><br></br><hr/><hr/>
    </div>
    );
  }
};