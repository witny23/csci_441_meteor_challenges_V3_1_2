import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';


// to create a collection we use the new constructor function
export const Candidates_Collection_Access = new Mongo.Collection('candidates_collection');
                                // candidates_collection will be the name of the collection
                
export const Calculate_position = (passed_ordered_candidate_collection) => {
    // going to return a new passed_ordered_candidate_collection array with new properties
    // rank is 1st, 2nd, etc, position is 1, 2, 3, etc
    // this will be called from client/main.js
    // remember, the passed_ordered_candidate_collection is already in order (1st to last)
    let rank = 1; // when we iterate the collection, the first has a rank of 1
                    // we just need to increment by 1 for subsequent places
    return passed_ordered_candidate_collection.map((comment, index) => {
        // one at a time, assign each passed_ordered_candidate_collection element to comment
        // index - optional argument that provides the array index of the element
        // time to increment rankings
        if(index !== 0 && passed_ordered_candidate_collection[index - 1].total_votes > comment.total_votes) {
        // did the previous candidate have more votes than current
        rank++;     // if so, add one to the rank of current candidate
        }               // if they are tied, they both get the same rank


        return {    // return the new object we are creating
            ...comment,  // ES6 object spread operator, the comment object was passed in
            rank,
            position: numeral(rank).format('0o'), // http://numeraljs.com/
        };
    });
};
                                
