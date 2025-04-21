import React from 'react';
import {createRoot} from 'react-dom/client';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import Instructions from '../imports/ui/Instructions.js';
import App from '../imports/ui/App.js';
import {Candidates_Collection_Access} from '../imports/api/candidates.js'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';


Meteor.subscribe("candidates_collection");


Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  Tracker.autorun(() => { 

    let candidates_in_db = Candidates_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
    let title = 'The big Campaign';
    let moderator = 'Grace Hopper';
    
    let jsx = (
      <>
        <Instructions />
        <App 
          main_title_prop={title} 
          main_moderator_prop={moderator}
          main_candidate_obj_prop={candidates_in_db}
        />

      </>
          
    );
    root.render(jsx);
  });
  


});