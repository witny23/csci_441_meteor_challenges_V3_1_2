import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice develop a component (CandidateList) responsible 
        for rendering a list from another component (Candidate).
      </p>
      <h2>Part 1: Move the functionality for rendering each candidate from client/main.js 
        to a newly created CandidateList.js component (vid 19a)</h2>
        <h3>Big Challenge - do so w/o looking at the detailed instructions below</h3>
      <ul>
        <li>create an imports/ui/CandidateList.js file and then in that file:
          <ul>
            <li>create a CandidateList component that returns 'candidate list placeholder'</li>
          </ul>
        </li>
        <li>client/main.js:
          <ul>
            <li>import the exported CandidateList component and place the component just below the 
              current candidate list (in the jsx variable) and verify that it works</li>
            <li>The CandidateList component will need the candidates_in_db object. Therefore, create a candidate_prop
              and use it to pass the candidates_in_db to the CandidateList component </li>
          </ul>
        </li>
        <li>imports/ui/CandidateList.js:
          <ul>
            <li>import the Candidate component</li>
            <li>from  client/main.js, copy the const renderCandidates = (candidateObject) =&gt; &#123;... 
              named function to the Candidate list component</li>
            <li>because the renderCandidates function is inside of the component object, it needs to be changed into a method
              that can be called from within the component. To this end, alter as needed. hint -- renderCandidates() &#123;..., 
              and candidateObject.map &gt; this.props.candidate_obj_prop.map
            </li>
            <li>replace placeholder with a call to the renderCandidates method</li>
            <li>test to ensure that the list is rendering (possibly both lists if you copied vs removed the functionality from client/main.js)</li>
          </ul>
        </li>
      </ul>

      <h2>Part 2: Require the candidate_obj_prop as an array in CandidateList.js </h2>
      <ul>
        <li>test to make sure it works</li>
      </ul>
    </>
    );
  }
};