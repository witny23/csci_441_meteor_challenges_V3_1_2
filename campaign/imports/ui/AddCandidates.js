import React from 'react'; // we need this for jsx and we are referencing React.components


export default class AddCandidates extends React.Component {// jsx requires uppercase when working with components
  //by default react components only need to define one method and it is not the constructor
  //it is a render method - this returns the jsx that is returned to the screen
  render(){
    return (
      <div>
        <p>Add Candidates Component Placeholder</p>
      </div>
    )
  }

};