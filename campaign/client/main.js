import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Candidates} from './../imports/api/candidates.js'; 
import Instructions from '../imports/ui/Instructions.js'; // default export so no {}

import TitleBar from './../imports/ui/TitleBar.js'; // default export so no {}
import AddCandidates from './../imports/ui/AddCandidates.js';

Meteor.subscribe("candidates_collection");


const renderCandidates = (candidateObject) => {
  let candidateInfo = candidateObject.map((candidate) => {
    return (
      <p key={candidate._id}>
      <button onClick={() => { 
        Candidates.remove({_id: candidate._id})
      }}>X</button> 
      <button onClick={() => { 
        Candidates.update({_id: candidate._id}, {$inc: {votes: 1}})
      }}>+1</button> 
      <button onClick={() => {  
        Candidates.update({_id: candidate._id}, {$inc: {votes: -1}})
      }}>-1</button>

      {' ' + candidate.name} has {candidate.votes} vote[s] {' '}

      </p>
      
    );
  });
  return candidateInfo;
};

const processFormDataFunction = (event) => {
  event.preventDefault();
  let candidateName = event.target.formInputNameAttrubute.value;

  if(candidateName){
    event.target.formInputNameAttrubute.value = '';
    Candidates.insert({
        name: candidateName,
        votes: 0,
    });
  };
};



Meteor.startup(() => {
  Tracker.autorun(() => { 


    let candidates = Candidates.find().fetch();
    // let title = 'The big Campaign';

    let jsx = (
      <div>
        <Instructions />

        <hr></hr>
        {/********** swap out the old h1 with the TitleBar components  ***************/}
        {/*<h1>{title}</h1>*/}
        <TitleBar/>

        <form onSubmit={processFormDataFunction}>
          <input type='text' name='formInputNameAttrubute' placeholder='Candidate Name' />
          <button>Add Candidate</button>
        </form>
        <AddCandidates/>
        {renderCandidates(candidates)}
      </div>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});