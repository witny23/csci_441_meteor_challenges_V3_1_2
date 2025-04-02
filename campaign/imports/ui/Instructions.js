import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice implementing scss techniques in our application
      </p>
      <h2>Part 1: Centering content  (vid 26a) </h2>
      <li>The TitleBar Component's content is centered. Do the same for the content rendered 
            from the AddCandidates and the CandidateList components</li>
      <h2>Part 2: Stylize each Candidate Component element as rendered by the CandidateList (vid 26a)</h2>
      <li>Create a imports/client/styles/components/_singleItem.scss partial (will be used to control look of 
            rendered Candidate Component):
          <ul>
            <li>Create a class selector to be used for each list item (name of your choice). 
              Then: 
              <ul>
                <li>change the background color to the color of your choice</li>
                <li>create a border</li>
                <li>space elements out with a small margin using rem</li>
                <li>space out the contents in each container with padding (use rem)</li>
              </ul>
            </li>
            
          </ul>
      </li>
      <li>imports/client/styles/_main.scss
          <ul>
            <li>import _singleItem.scss</li>
          </ul>
      </li>
      <li>Place a className="name of the class you just created" on the appropriate form element.  
      </li>
      <li>Place the same className='...' on the individual candidate element rendered in the list.</li>
      <li>Place the same className='...' on the message that encourages a new candidate (only shows up with no candidates)</li>
      <li>Test to ensure everything is loading as intended.</li>
      <hr/><hr/>
    </>
    );
  }
};