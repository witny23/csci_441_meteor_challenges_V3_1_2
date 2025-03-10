import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Candidates} from './../imports/api/candidates.js'; 
import {Instructions} from '../imports/ui/Instructions.js';

Meteor.subscribe("candidates_collection");


const renderCandidates = (candidateObject) => {
  let candidateInfo = candidateObject.map((candidate) => {
    return (
      <p key={candidate._id}>
      <button onClick={() => { 
// on the following line, remove a candidate from the db 
      

      }}>X</button> 
      <button onClick={() => { 
// on the following line, add a vote for the candidate 
      

      }}>+1</button> 
{/* In the following lines, create a button that will remove a vote from the candidate */ }




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
    let title = 'The big Campaign';

    let jsx = (
      <div>
        {Instructions}

        <hr></hr>
        <h1>{title}</h1>
        <form onSubmit={processFormDataFunction}>
          <input type='text' name='formInputNameAttrubute' placeholder='Candidate Name' />
          <button>Add Candidate</button>
        </form>
        {renderCandidates(candidates)}
      </div>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});