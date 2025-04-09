import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <div className='content clearfix'>
      <img className='float_right' src='images/campaign.png' alt='representation of candidate comments' />
      <h1>Instructions</h1>
      <p>The purpose of this challenge is to debug and complete code using knowledge gained and lessons learned up to this point.
      </p><br />
      <h2>Part 1: Comments about Candidates with style  (vid 35a) </h2>
      <p>You team member decided to completely revamp the application. They felt the random naming of various files, variables, scss selectors,
        etc. were getting out of hand. Unfortunately, they did not complete everything they started and they need your help.
        They have left you some notes to help with the process. These notes can be found below and in their respective files.
      </p><br />
      <p>Goal: Allow users to comment on candidates. Up down vote those comments (order them), put some style
        in the comments, allow comments to contain links.
      </p><br />
      <p>Files that need help:</p>
      <ul>
        <li>imports/ui/CandidateList.js
            <ul>
              <li>Obtain candidate comments, rank them, then send them as a prop to Candidate.js</li>
            </ul>
        </li>
        <li>imports/ui/Candidate.js
            <ul>
              <li>If a candidate is deleted, delete all comments about a candidate</li>
              <li>Place the CommentAddAnother (i.e., Add Comment) component below the candidate actions</li>
              <li>Place the CommentList component below the CommentAddAnother component</li>
            </ul>
        </li>
        <li>imports/ui/CommentAddAnother.js
            <ul>
              <li>ensure prop names used between Candidate.js and CommentAddAnother.js match</li>
            </ul>
        </li>
        <li>imports/ui/CommentList.js
            <ul>
              <li>renderAllComments</li>
            </ul>
        </li>
        <li>imports/ui/Comment.js
            <ul>
              <li>If a link is provided as a comment, make it into a clickable link that opens in a new tab</li>
            </ul>
        </li>
        <li>imports/ui/CandidateAddAnother.js
            <ul>
              <li>Add appropriate classNames as created in _candidateForm.scss</li>
            </ul>
        </li>
      </ul><br />
      <p>Helpful code to be used in the project's directory if you need to check db entries</p>
      <ul>
        <li>meteor mongo</li>
        <li>db.comments_about_canditates_collection.find()</li>
        <li>db.comments_about_canditates_collection.deleteMany(&#123;comment_up_votes: 0 &#125;)</li>
        <li>db.candidates_collection.find()</li>
      </ul>
    </div>
    );
  }
};