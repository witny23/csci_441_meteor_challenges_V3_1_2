import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js';


// convert the following line into an ES6 function
Meteor.publish("candidates", function() {
  return Candidates.find();
});

// convert the following line into an ES6 function
Meteor.startup(async function(){


  // convert the following line into an ES6 function
  let multiply = function (x,y){
    return x * y;               // convert the following line into an ES6 function
  }
  console.log(multiply(10,5));

  // convert the following line into an ES6 function
  function squareNamed(x,y){return x*y}; // named function that produces same result
  console.log(squareNamed(10,5));

  
  // problem - arrow functions do not support the named function syntax
  // all arrow functions are anonymous functions which means you must use the let variable syntax

  // with the arrow function problem in mind, create an ES6 addition 
  //  function (using statement syntax - squigglies and a return statement) 
  //  that returns the sum of two numbers. Then call your function and log the result


  




  // create an ES6 subtraction function (using expression syntax - one line of code, 
  //  no squigglies, no return statement) that returns the difference of two numbers. 
  //  Then call your function and log the result


  




  // the following is an ES5 Example which will be used in the next challenge
  let numbers = [2, 4, 6, 8];

  let goOdd = numbers.map(function(number){
    return number -1;
  });
  console.log(goOdd);

  // using ES6 expression syntax, create a named function called goDouble 
  //  that maps the numbers array and returns an array with all numbers doubled
  //  call and log the named function


  






  









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
  Candidates.allow(allowAllOperations);
});
