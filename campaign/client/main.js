import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import Instructions from '../imports/ui/Instructions.js'; 
import TitleBar from './../imports/ui/TitleBar.js'; 
import AddCandidates from './../imports/ui/AddCandidates.js';
// import Candidate from './../imports/ui/Candidate.js'; 
import CandidateList from '../imports/ui/CandidateList.js';


Meteor.subscribe("candidates_collection");


{/* move the following to the CandidateList.js component */}
// const renderCandidates = (candidateObject) => {
//   let candidateInfo = candidateObject.map((candidate) => {
//     return <Candidate key={candidate._id} candidate_prop={candidate} />;
//   });
//   return candidateInfo;
// };

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
        {/* {renderCandidates(candidates_in_db)} */}
        <CandidateList candidate_obj_prop={candidates_in_db}/>
      </>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});