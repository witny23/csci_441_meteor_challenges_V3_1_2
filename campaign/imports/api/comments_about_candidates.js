import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';
import PropTypes from 'prop-types';

// the following is creating access to the ddp collection.
// this must be imported in the server/main.js so the server can access the mongoDB
export const Comments_About_Candidates_Collection_Access =
                        new Mongo.Collection('comments_about_canditates_collection');


export const Calculate_comment_rank = (passed_ordered_comment_collection) => {
// console.log("Comments_About_Candidates_Collection_Access ");
    // going to return a new passed_ordered_comment_collection array with new properties
    // rank is 1st, 2nd, etc, position is 1, 2, 3, etc
    // this will be called from imports/ui/CandidateList.js
    // remember, the passed_ordered_comment_collection is already in order (1st to last)
    let rank = 1; // when we iterate the collection, the first has a rank of 1
                    // we just need to increment by 1 for subsequent places
    return passed_ordered_comment_collection.map((comment, index) => {
        // one at a time, assign each passed_ordered_comment_collection element to comment
        // index - optional argument that provides the array index of the element

        // time to increment rankings
      if(index !== 0 && passed_ordered_comment_collection[index - 1].total_comment_votes > comment.total_comment_votes) {
        // did the previous candidate have more votes than current
        rank++;     // if so, add one to the rank of current candidate
      }               // if they are tied, they both get the same rank


      return {    // return the new object we are creating
        ...comment,  // ES6 object spread operator, the comment object was passed in
        rank,     // ES6 object property shorthand for the variable rank
                  // could have been rank: rank;
        position: numeral(rank).format('0o'), // http://numeraljs.com/
      };
    });
};
Calculate_comment_rank.propTypes = {
  passed_ordered_comment_collection: PropTypes.object.isRequired,
};