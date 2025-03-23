import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Candidates} from './../imports/api/candidates.js'; 
import Instructions from '../imports/ui/Instructions.js'; // default export so no {}
import TitleBar from './../imports/ui/TitleBar.js'; // default export so no {}
import AddCandidates from './../imports/ui/AddCandidates.js'; // default export so no {}
import Candidate from './../imports/ui/Candidate.js';  // default export so no {}

Meteor.subscribe("candidates_collection");


{/* move the following to the CandidateList.js component */}
const renderCandidates = (candidateObject) => {
  let candidateInfo = candidateObject.map((candidate) => {
    return <Candidate key={candidate._id} candidate_prop={candidate} />;
  });
  return candidateInfo;
};



Meteor.startup(() => {
  Tracker.autorun(() => { 

    let candidates_in_db = Candidates.find().fetch();
    let title = 'The big Campaign';
    let jsx = (
      <>
        <Instructions />

        <hr></hr>
        <TitleBar title_prop={title}/>


        <AddCandidates/>
        {renderCandidates(candidates_in_db)}
      </>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});