import {Meteor} from 'meteor/meteor';
// Meteor import allows access to Meteor.startup, which ensures the 
// server finishes processing before running the code inside the startup function.

import {UP_Collection_Access} from './../imports/api/user_posts.js';
// Provides access to UP_Collection_Access collection to interact with the database.




// Meteor.publish() is used on the server side to specify which data is available to the client. 
// This publication allows the client to subscribe to the 'user_posts_collection' data.
Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
});


Meteor.startup(async function(){








  console.log(await UP_Collection_Access.find().fetch());
  // await ensures each insertAsync() completes before moving to the next line.
  // .find() returns everything
  // .fetch() is a pointer to some documents in the DB
  // to get an array of the documents you use .fetch()








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

  // Assign the allowAllOperations rules to collection.
  UP_Collection_Access.allow(allowAllOperations);

});

