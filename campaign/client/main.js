import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';
// Meteor.subscribe is a client-side function that tells the server to send specific data to the client. 
// It is used to access collections that were published on the server.
Meteor.subscribe("user_posts_collection");



const renderPosts = function (passed_posts) {
    console.log(passed_posts);
    let formattedPosts = passed_posts.map(function(post){
      return <p key={post._id}>{post.topic}</p>;
    });
  
    return formattedPosts;
  };
  
  const processFormDataFunction = function(event){
    // the event (sometimes e) parameter is a default event handler object that is
    // passed in by the browser when an event occurs
    // this is an important argument becuase it allows us to access the topic name
    // which we need in order to insert a new topic into the db
    event.preventDefault() // stops the page from reloading
    let newTopic = event.target.formInputNameAttribute.value;
    // event.target grabs the target element - the form in this case which lets
    // us grab any of its inputs by referencing it by name (.formInputNameAttribute)
    // .value gets us the value
    if (newTopic){
      event.target.formInputNameAttribute.value = ''; // clear input box
      UP_Collection_Access.insert({
        topic: newTopic,
      });
  
    };
  };
  Meteor.startup(async function () {
    
  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(function(){
    const allPostsInDB = UP_Collection_Access.find().fetch();
    let title = 'DB Practice';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <h2>Instructions</h2>
        <p>The purpose of this challenge is to practice rendering db info into the browser. To that end,
            accomplish the following:
        </p>
        <ul>
          <li>In api/user_posts.js: create a collection called random_thoughts. Export as needed.</li>
          <li>In client/main.js:
            <ul>
              <li>import the db object</li>
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
        <form onSubmit={processFormDataFunction}>
          <input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button>Add Topic</button>
        </form>
        {renderPosts(allPostsInDB)}
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('content'));

  });




});