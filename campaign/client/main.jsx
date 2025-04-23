import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDom from 'react-dom'; // using createRoot instead
import {Meteor} from 'meteor/meteor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import {Calculate_rank_and_position_for_candidates, Candidates_Collection_Access} from '../imports/api/candidates.js'; 
import { Instructions } from '../imports/ui/Instructions.jsx';
import { App } from '../imports/ui/App.jsx';
import { NotFound } from '../imports/ui/NotFound.jsx';
import { Signup } from '../imports/ui/Signup.jsx';
import { Login } from '../imports/ui/Login.jsx';


Meteor.subscribe("candidates_collection");


Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  Tracker.autorun(() => { 

    let title = 'The big Campaign';
    let moderator = 'Grace Hopper';
    let candidates_in_db = Candidates_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
    let positioned_candidates = Calculate_rank_and_position_for_candidates(candidates_in_db);

    const routes = (  

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Instructions />} />
          <Route path="/App" element={<App 
                                        main_title_prop={title} 
                                        main_moderator_prop={moderator}
                                        main_candidate_obj_prop={positioned_candidates}
                                      />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    );

    // hint - when you create routes you will no longer render the jsx variable
    root.render(routes);
  });
  


});