// import {Meteor} from 'meteor/meteor';

import {Candidates_Collection_Access} from '../imports/api/candidates.js'; 

/* challenge code ***********************************************************/
import { Comments_About_Candidates_Collection_Access } from '../imports/api/comments_about_candidates.js';



Meteor.publish("candidates_collection", () => {
  return Candidates_Collection_Access.find();
});

Meteor.publish("comments_about_canditates_collection", () => {
  return Comments_About_Candidates_Collection_Access.find();
});


Meteor.startup(async () => {

  
  // The following method allows the client to insert, remove, and update data from the collection.
  // **WARNING**: Allowing all operations from the client is a security risk, as any user can modify the data.
  // For example, someone can run: UP_Collection_Access.insert({ topic: "Hacked!", votes: 9999 });

  const allowAllOperations = {
    insert(userId, doc) {
      return true; // Anyone can insert
    },
    remove(userId, doc) {
      return true; // Anyone can remove
    },
    update(userId, doc, fieldNames, modifier) {
      return true; // Anyone can update
    },
  };

  // Assign the allowAllOperations rules to both collections.
  Candidates_Collection_Access.allow(allowAllOperations);
  Comments_About_Candidates_Collection_Access.allow(allowAllOperations);
});
