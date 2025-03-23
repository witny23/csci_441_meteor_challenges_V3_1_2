import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice binding and requiring props
      </p>
      <h2>Part 1: Move the candidate form (vids 17a &amp; 17b)</h2>
      <ul>
        <li>client/main.js:
            <ul>
              <li>Move the Add Candidate (around line 69) to imports/ui/AddCandidates.js return statement (replace the placeholder)</li>
            </ul>
        </li>
      </ul>
      <h2>Part 2: Relocate the processFormDataFunction (vids 17a &amp; 17b)</h2>
      <ul>
        <li>client/main.js:
            <ul>
              <li>Relocate the processFormDataFunction (around line 38) to imports/ui/AddCandidates.js into
                  the AddCanditates component as a custom method (processFormData(event) vs const processFormDataFunction = (event) =&gt;).
              </li>
            </ul>
        </li>
        <li>imports/ui/AddCandidates.js:
            <ul>
              <li>Import &#123;Candidates&#125;</li>
              <li>Update the form's onSubmit as needed</li>
              <li>Once complete, your form should be working</li>
            </ul>
        </li>
      </ul>
      <h2>Part 3: Relocate the x+- candidate buttons to their own file (vid 18a)</h2>
      <ul>
        <li>Create a Candidate.js file. In that file:
            <ul>
              <li>import React, &#123;Candidates&#125; from './../api/candidates.js', and PropTypes from 'prop-types';              </li>
              <li>Create a candidate component</li>
              <li>from client/main.js, move the renderCandidates function return statement into the component's render()</li>

            </ul>
        </li>
        <li>client/main.js:
            <ul>
              <li>import the Candidate.js component</li>
              <li>in the renderCandidates function:
                <ul>
                  <li>return the Candidate component - don't forget to pass the the candidate_prop object
                    and have a key
                  </li>
                </ul>
              </li>
            </ul>
        </li>
        <li>imports/ui/AddCandidates.js:
            <ul>
              <li>update references to the candidate object with the passed prop object</li>
              <li>require candidate_prop</li>
              
            </ul>
        </li>
      </ul>
    </>
    );
  }
};