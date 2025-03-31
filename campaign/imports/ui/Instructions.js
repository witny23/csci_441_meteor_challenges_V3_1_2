import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice jsx conditionals and to develop a 
        component (app) responsible for rendering other components (i.e., TitleBar, AddCandidates, CandidateList).
      </p>
      <h2>Part 1: JSX Conditionals (vid 20a)</h2>
      <li>client/main.js:
          <ul>
            <li>in the Tracker.autorun, create a moderator variable (e.g., let moderator = 'Grace Hopper';)</li>
            <li>Pass the moderator variable as a prop to the TitleBar component</li>
          </ul>
        </li>
        <li>imports/ui/TitleBar.js:
          <ul>
            <li>In the TitleBar Component, create a renderModerator() method that checks for the 
              existence of the moderator prop. Return the prop if it exists, return a "moderator unknown" if it does not.</li>
            <li>update the render()'s return to include the moderator. </li>
            <li>test as needed</li>
          </ul>
        </li>
      
      <h2>Part 2: Create App Component to render other components </h2>
      <ul>
        <li>in the client/main.js file:
          <ul>
            <li>move/copy the jsx variable's components (i.e., TitleBar, AddCandidates, CandidateList) 
              to the App Component's return statement</li>
            <li>In ReactDom.render(jsx,... change jsx to your app component. Pass all the props that were 
              previously passed to TitleBar, AddCandidates, and CandidateList to the App Component
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>in the imports/ui/App.js file:
          <ul>
            <li>Update the props being passed to the TitleBar, AddCandidates, and CandidateList Components.
              Hint -- these props are being passed from client/main.js and need to be passed on to their
              respective components
            </li>
            <li>test to make sure everything works</li>
          </ul>
        </li>
      </ul>
      <hr></hr>

 
    </>
    );
  }
};