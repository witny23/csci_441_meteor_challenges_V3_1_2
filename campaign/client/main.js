import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Calculate_rank_and_position_for_candidates, Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';

import App from '../imports/ui/App.js';


Meteor.subscribe("candidates_collection");



Meteor.startup(() => {
  Tracker.autorun(() => { 

    let candidates_in_db = Candidates.find({}, {sort: {votes: -1}}).fetch();
    let title = 'The big Campaign';
    let moderator = 'Grace Hopper';
    let footer = 'Join the Campaign!';

    let positioned_candidates = Calculate_rank_and_position_for_candidates(candidates_in_db);

    ReactDom.render(<App  main_title_prop={title} 
                          main_moderator_prop={moderator} 
                          main_candidate_obj_prop={positioned_candidates}
                          main_footer_obj_prop={footer}
                          />, 
                        document.getElementById('content'));
  });

});