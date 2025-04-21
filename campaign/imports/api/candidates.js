import {Mongo} from 'meteor/mongo';


// to create a collection we use the new constructor function
export const Candidates_Collection_Access = new Mongo.Collection('candidates_collection');
                                // candidates_collection will be the name of the collection
                

                                