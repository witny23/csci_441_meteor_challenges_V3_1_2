import {Meteor} from 'meteor/meteor';
// Meteor import allows us access to Meteor.startup which waits for the server
// to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
// this gives us access to the UP_Collection_Access object so we can interact with the DB


Meteor.startup(async function(){






  console.log(await UP_Collection_Access.find().fetch());
  // await ensures each insertAsync() completes before moving to the next line.
  // .find() returns everything
  // .fetch() is a pointer to some documents in the DB
  // to get an array of the documents you use .fetch()








  // The following allows the client to insert, remove, and update data from the collection
  // Allowing all inserts from the client is a Security risk
  // Anyone can open the browser console and run:
  // UP_Collection_Access.insert({ topic: "Hacked!", votes: 9999 });

  UP_Collection_Access.allow({
    insert(userId, doc) {
      return true; // Anyone can insert
    },
    remove(userId, doc) {
      return true; // Anyone can remove
    },
    update(userId, doc, fieldNames, modifier) {
      return true; // Anyone can update
    },
  });
});

