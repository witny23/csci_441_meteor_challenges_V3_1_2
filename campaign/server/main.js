import {Meteor} from 'meteor/meteor';
// Meteor import allows us access to Meteor.startup which waits for the server
// to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
// this gives us access to the UP_Collection_Access object so we can interact with the DB

// promise: an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// async function: Marks a function as asynchronous, allowing the use of 'await' inside it which will make the function "pause" until the promise is resolved or rejected.
Meteor.startup(async function(){
  // challenge code should go below

  






  // 'await' is used here to wait for the asynchronous 'find().fetch()' operation to complete before logging the collection data.
  console.log(await UP_Collection_Access.find().fetch());
});
