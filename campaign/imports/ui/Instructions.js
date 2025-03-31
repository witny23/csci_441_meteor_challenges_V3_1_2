import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p>The purpose of these challenges is to practice sorting the candidates based on votes as returned
        from the mongoDB
      </p>
      <h2>Part 1: Sorting the mongoDB entries (vid 22a)</h2>
      <li>client/main.js:
          <ul>
            <li>Around line 18, modify let candidates_in_db = Candidates.find().fetch(); so that the 
              candidates will be sorted by votes with the most on top.
            </li>
            <li>Take a look at Candidate.js to see how Candidates mongoDB was altered with update 
              and remove. Notice, two objects are passed in for the update. The candidate's id and their 
              votes. In our case, we do not care about the id, we just want to order by votes when we 
              use the find() function.
            </li>
            <li>Reference: <a href="https://docs.meteor.com/api/collections.html#sortspecifiers" target="_blank">
                  Meteor Sort Specifiers</a></li>
          </ul>
        </li>
        <li>mongoDB cmd line reference - a cmd line means to sort (won't work in your code but the same 
          concepts are applied.
          <ul>
            <li>In a new terminal, check out what is in your mongoDB by entering meteor mongo. 
              Once it is up and running, db.candidates_collection.find() will return your collection.
            </li>
            <li>db.candidates_collection.find().sort(&#123;votes: 1&#125;) will order the entries 
              in ascending order</li>
          </ul>
        </li>
      
 
    </>
    );
  }
};