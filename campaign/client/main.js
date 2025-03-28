import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import Instructions from '../imports/ui/Instructions.js'; 
import TitleBar from './../imports/ui/TitleBar.js'; 
import AddCandidates from './../imports/ui/AddCandidates.js';
import Footer from './../imports/ui/Footer.js';

import Candidate from './../imports/ui/Candidate.js';  // part 3 import


Meteor.subscribe("candidates_collection");


const renderCandidates = (candidateObject) => {
  let candidateInfo = candidateObject.map((candidate) => {
{/* Part 3: Return the Candidate component */}
    return <Candidate key={candidate._id} candidate_prop={candidate} />;
{/* Part 3: Move the following to imports/ui/AddCandidates.js */}
    // return (
    //   <p key={candidate._id}>
    //   <button onClick={() => { 
    //     Candidates.remove({_id: candidate._id})
    //   }}>X</button> 
    //   <button onClick={() => { 
    //     Candidates.update({_id: candidate._id}, {$inc: {votes: 1}})
    //   }}>+1</button> 
    //   <button onClick={() => {  
    //     Candidates.update({_id: candidate._id}, {$inc: {votes: -1}})
    //   }}>-1</button>

    //   {' ' + candidate.name} has {candidate.votes} vote[s] {' '}

    //   </p>
      
    // );
  });
  return candidateInfo;
};

{/* Part 2: Move the following to imports/ui/AddCandidates.js */}
// const processFormDataFunction = (event) => {
//   event.preventDefault();
//   let candidateName = event.target.formInputNameAttrubute.value;

//   if(candidateName){
//     event.target.formInputNameAttrubute.value = '';
//     Candidates.insert({
//         name: candidateName,
//         votes: 0,
//     });
//   };
// };


Meteor.startup(() => {
  Tracker.autorun(() => { 

    let candidates = Candidates.find().fetch();
    let title = 'The big Campaign';
    footer_content = 'my footer';
    let jsx = (
      <>
        <Instructions />

        <hr></hr>
        <TitleBar title_prop={title}/>
{/* Part 1: move the following form to imports/ui/AddCandidates.js */}
        {/* <form onSubmit={processFormDataFunction}>
          <input type='text' name='formInputNameAttrubute' placeholder='Candidate Name' />
          <button>Add Candidate</button>
        </form> */}

        <AddCandidates/>
        {renderCandidates(candidates)}
        <Footer footer_prop={footer_content}/>
      </>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});