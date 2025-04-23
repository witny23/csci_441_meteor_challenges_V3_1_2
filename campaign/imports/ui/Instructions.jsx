import React from 'react';
import NavLinks from './NavLinks.jsx';

export const Instructions = () => {
    return (
    <div className='content'>
      <NavLinks />
      <h1>Instructions</h1>
      <p>The purpose of this challenges is practice the first steps of authentication (vids 03b - 05a) and 
          sending a user to another location with useNavigate() (useNavigate allows the programmer to
          send the user to another location rather than allowing the user to go to another location 
          by clicking on a Link). 
      </p>    
      <p>Assume you are working on a team and you have been asked to complete the following: 
      </p>
      <h2>Part 1: Install  </h2>
      <p>In the terminal: meteor add accounts-password <br></br>
            - accounts-password is being added to meteor vs specifically to your project</p>      
      <h2>Part 2: Signup.jsx - Accounts.createUser</h2>
      <ol>
        <li>Write the code needed to allow a user to signup</li>
        <li>test with the following in the browser's console:
            <ul>
              <li>require('meteor/meteor').Meteor.userId()</li>
              <li>require('meteor/accounts-base').Accounts.logout()</li>
              <li>require('meteor/meteor').Meteor.userId()</li>
            </ul>
        </li>
        <li>Once they have signed up, utilize navigate (let navigate = useNavigate();)
            to send the user to /App
        </li>
      </ol>
      <h2>Part 3: Login.jsx - Meteor.loginWithPassword</h2>
      <ol>
        <li>Write the code needed to allow an existing user to login</li>
        <li>test with the following in the browser's console:
            <ul>
              <li>require('meteor/meteor').Meteor.userId()</li>
              <li>require('meteor/accounts-base').Accounts.logout()</li>
              <li>require('meteor/meteor').Meteor.userId()</li>
            </ul>
        </li>
        <li>Once they have logged in, utilize navigate (let navigate = useNavigate();)
            to send the user to /App
        </li>
      </ol>
    </div>
    );
};