import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div class='content'>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice implementing scss techniques in our application
      </p>
      <h2>Part 1: Create a footer component  (vid 27a) </h2>
      <ul>
        <li>Create an imports/ui/Footer.js file. In that file:
          <ul>
            <li>create a class component that returns a footer that originated in the client/main.js</li>
            <li>require the footer text prop to be a string</li>
          </ul>
        </li>
        <li>client/main.js
            <ul>
              <li>pass a footer prop of "The great campaign!" (or something similar) to the App component</li>
            </ul>
        </li>
        <li>imports/ui/App.js
            <ul>
              <li>write the code needed to have the app component render the footer component</li>
            </ul>
        </li>
      </ul>
      <h2>Part 2: Stylize the footer component (vid 27a)</h2>
      <ul>
        <li>Create an imports/client/styles/components/_footer.scss partial
            <ul>
              <li>Create a class selector to be used to color the footer </li>
              <li>Create a class selector to be used to center the footer and make it the same width as the form/list</li>
            </ul>
        </li>
        <li>Write the code needed to apply the partial's style to the footer.</li>
      </ul>
      <hr/><hr/>
    </div>
    );
  }
};