import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Candidates} from './../imports/api/candidates.js'; 
import {Instructions} from '../imports/ui/Instructions.js';

Meteor.subscribe("candidates");


const renderCandidates = function (candidateObject) {
  let candidateInfo = candidateObject.map(function(candidate){
    return <p key={candidate._id}>{candidate.name} has {candidate.votes} vote[s]</p>;
  });
  return candidateInfo;
};

const processFormDataFunction = function (event) {
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


Meteor.startup(function(){
  Tracker.autorun(function(){ 


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