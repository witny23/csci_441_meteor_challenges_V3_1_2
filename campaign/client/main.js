import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import {Thoughts_Collection_Access} from './../imports/api/user_posts.js';

// Meteor.subscribe is a client-side function that tells the server to send specific data to the client. 
// It is used to access collections that were published on the server.
Meteor.subscribe("user_posts_collection");
Meteor.subscribe("random_thoughts");


const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    console.log(post.topic + " " + post.color);
    return <span key={post._id} style={{color: post.color}}>{post.topic}<br/></span>;
  });

  return formattedPosts;
};
// new named function below
const renderThoughts = function (passed_thoughts) {
  console.log(passed_thoughts);
  let formattedThoughts = passed_thoughts.map(function(one_thought){
    console.log(one_thought.color);
    return <span key={one_thought._id} style={{color: one_thought.color}}>{one_thought.thought}<br/></span>;
  });

  return formattedThoughts;
};

const process_Topic_FormDataFunction = function(event){

  event.preventDefault() 
  let newTopic = event.target.formInputNameAttribute.value;
  let chosenFont = event.target.formInputFontColorAttribute.value;
  if (newTopic && chosenFont){
    event.target.formInputNameAttribute.value = ''; 
    event.target.formInputFontColorAttribute.value = ''; 
    UP_Collection_Access.insert({
      topic: newTopic,
      color: chosenFont,
    });
  } else {
    event.target.formInputNameAttribute.placeholder = 'Topic Required'; 
    event.target.formInputFontColorAttribute.placeholder = 'Color Required'; 
  }
};

// new named function below
const process_Thought_FormDataFunction = function(event){

  event.preventDefault() 
  let newThought = event.target.formInputThoughtAttribute.value;
  let chosenFont = event.target.formInputFontColorAttribute.value;
  if (newThought && chosenFont){
    event.target.formInputThoughtAttribute.value = ''; // clear input box
    event.target.formInputFontColorAttribute.value = ''; // clear input box
    Thoughts_Collection_Access.insert({
      thought: newThought,
      color: chosenFont,
    });
  } else {
    event.target.formInputThoughtAttribute.placeholder = 'Thought Required'; // show feedback
    event.target.formInputFontColorAttribute.placeholder = 'Color Required'; // show feedback
  }
};

Meteor.startup(async function () {

  Tracker.autorun(function(){
    const allPostsInDB = UP_Collection_Access.find().fetch();
    // challenge code below
    const allThoughtsInDB = Thoughts_Collection_Access.find().fetch();
    let title = 'DB Practice';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <h2>Instructions</h2>
        <p>The purpose of this challenge is to practice rendering db info into the browser. To that end,
            accomplish the following:
        </p>
        <ul>
          <li>In api/user_posts.js: 
            <ul><li>create a collection called random_thoughts</li>
            <li> Export as Thoughts_Collection_Access</li>
            </ul>
          </li>
          <li>In server/main.js:
            <ul>
              <li>import Thoughts_Collection_Access (you need to import the collection you've defined in api/user_posts.js so you can publish it)</li>
              <li>implement Meteor.publish for your random_thoughts (you should publish the collection so that the client can subscribe to it and access the data)</li>
              <li>Assign the allowAllOperations (down at the bottom) to Thoughts_Collection_Access (this will allow unrestricted operations on the collection, which is fine for a learning exercise, but in a production app, you would want to control what operations users can perform (e.g., insert, update, remove))</li>
            </ul>
          </li>
          <li>In client/main.js:
            <ul>
              <li>import Thoughts_Collection_Access</li>
              <li>Meteor.subscribe("&lt;collection name&gt;") so that the client has access to it</li>
              <li>Create a form to obtain random thoughts from the user</li>
              <li>Create a function similar to processFormDataFunction to enter random thoughts into db</li>
              <li>Create a function similar to renderPosts to render the random thoughts as imported</li>
              <li>Create a table with two columns. Use one column to render current topics and the other to render random thoughts</li>
            </ul>
          </li>
          <li>Bonus:
              <ul>
                <li>Create a means to change the style of anything (e.g., background-color) based on user input</li>
              </ul>  
          </li>
        </ul>

        <form onSubmit={process_Topic_FormDataFunction}>
          <input type='text' name='formInputNameAttribute' placeholder='Post Topic'/>
          <input type='text' name='formInputFontColorAttribute' placeholder='Font color for post'/>
          <button>Add Post</button>
        </form>
        <form onSubmit={process_Thought_FormDataFunction}>
          <input type='text' name='formInputThoughtAttribute' placeholder='Random Thought'/>
          <input type='text' name='formInputFontColorAttribute' placeholder='Font color for thought'/>
          <button>Add Thought</button>
        </form>
        <br />
        <table>{/* table style is controlled by css */}
          <tbody>
          <tr><th>Posted topics</th><th>Random thoughts</th></tr>
          <tr><td>{renderPosts(allPostsInDB)}</td><td>{renderThoughts(allThoughtsInDB)}</td></tr>
          
          
          </tbody>
          
        </table>


      </div>
    );

    ReactDOM.render(jsx, document.getElementById('content'));

  });




});