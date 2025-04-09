import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';


// to create a collection we use the new constructor function
export const Candidates = new Mongo.Collection('candidates_collection');
                                // candidates_collection will be the name of the collection


export const Calculate_rank_and_position_for_candidates = (candidate_collection) => {
    // going to return a new candidates_collection array with new properties
    // rank is 1st, 2nd, etc, position is 1, 2, 3, etc
    // this will be called from client/main.js
    // remember, the candidates_collection is already in order (1st to last)
    let rank = 0; // when we iterate the collection, the first has a rank of 1
                    // we just need to increment by 1 for subsequent places

    return candidates_collection.map((candidate, index) => {
        // one at a time, assign each candidates_collection element to candidate
        // index - optional argument that provides the array index of the element
        // console.log(candidate.name + ' ' + candidate.votes + ' ' + index);

        // time to increment rankings
        if(index !== 0 && candidates_collection[index - 1].votes > candidate.votes) {
                        // did the previous candidate have more votes than current
            rank++;     // if so, add one to the rank of current candidate
        }               // if they are tied, they both get the same rank


        return {             // return the new object we are creating
            ...candidate,    // ES6 object spread operator, the candidate object was passed in
            rank,            // ES6 object property shorthand for the variable rank
                             // could have been rank: rank;
            position: numeral(rank).format('0o'), // http://numeraljs.com/
        };
    });
};