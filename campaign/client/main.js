import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import Instructions from '../imports/ui/Instructions.js'; 
import TitleBar from './../imports/ui/TitleBar.js'; 
import AddCandidates from './../imports/ui/AddCandidates.js';
import CandidateList from '../imports/ui/CandidateList.js';
import App from '../imports/ui/App.js';

Meteor.subscribe("candidates_collection");


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
        <CandidateList candidate_obj_prop={candidates_in_db}/>
      </>
    );
    ReactDom.render(jsx, document.getElementById('content'));
  });

});