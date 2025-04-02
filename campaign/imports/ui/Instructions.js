import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content'>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice implementing BEM techniques in our application
      </p>
      <h2>Part 1: Stylize the titleBar  (vid 29a) </h2>
      <ul>
        <li>imports/client/styles/components/_titlebar.scss
          <ul>
            <li>using bem, create a moderator element to be used in titleBar.js</li>
            <li>set the font size to 11 px using rem and font-weight to 300</li>
            <li>apply the class to imports/ui/TitleBar.js &lt;p&gt; moderator (known and unknown)</li>
          </ul>
        </li>

      </ul>

      <hr/><hr/>
    </div>
    );
  }
};