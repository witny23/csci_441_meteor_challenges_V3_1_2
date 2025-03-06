// import {named export} from '...';
import {Mongo} from 'meteor/mongo';




// we want the collection to be available outside of this .js so we export it
export const UP_Collection_Access = new Mongo.Collection('user_posts_collection');
// this can now be imported in our server/main.js

