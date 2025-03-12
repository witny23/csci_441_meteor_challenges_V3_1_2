import React from 'react';// we need this for jsx and we are referencing React.Component

// need to export Instructions class
export default class Instructions extends React.Component{ // jsx requires uppercase when working with components
  // by default react components only need to define one method and it is not the constructor
  // it is a render method - this returns the jsx that is returned to the screen
  render(){
    return (
      <div>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice creating React Components
      </p>
      <h2>Part 1: ES6 Class Challenge (vids 15a &amp; 15b)</h2>
      <ul>
        <li>create an imports/ui/AddCandidates.js file and then in that file:
          <ul>
            <li>export a default AddCandidates class that extends React Component</li>
            <li>render/return a placeholder using div as the container and a paragraph tag for the placeholder</li>
          </ul>
        </li>
        <li>client/main.js:
          <ul>
            <li>import the default export from AddCandidates.js</li>
            <li>in the let jsx variable: place the imported placeholder component between the form and the renderCandidates(candidates)</li>
          </ul>
        </li>
      </ul>
    </div>
    );
  }
};