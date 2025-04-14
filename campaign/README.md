vid 35a: comment, link, and style: Challenge start

GOALS

    practice with components, db comm and links


    35a - video gitHub 35a - reply and link challenge.mp4

    
INSTRUCTIONS

    Found on main.html when program is running or in imports/ui/Instructions.js



Stop runaway node or mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe


Instructions
The purpose of this challenge is to debug and complete code using knowledge gained and lessons learned up to this point.


Part 1: Comments about Candidates with style (vid 35a)
You team member decided to completely revamp the application. They felt the random naming of various files, variables, scss selectors, etc. were getting out of hand. Unfortunately, they did not complete everything they started and they need your help. They have left you some notes to help with the process. These notes can be found below and in their respective files.


Goal: Allow users to comment on candidates. Up down vote those comments (order them), put some style in the comments, allow comments to contain links.


Files that need help:

imports/ui/CandidateList.js
    Obtain candidate comments, rank them, then send them as a prop to Candidate.js
imports/ui/Candidate.js
    If a candidate is deleted, delete all comments about a candidate
    Place the CommentAddAnother (i.e., Add Comment) component below the candidate actions
    Place the CommentList component below the CommentAddAnother component
imports/ui/CommentAddAnother.js
    ensure prop names used between Candidate.js and CommentAddAnother.js match
imports/ui/CommentList.js
    renderAllComments
imports/ui/Comment.js
    If a link is provided as a comment, make it into a clickable link that opens in a new tab
imports/ui/CandidateAddAnother.js
    Add appropriate classNames as created in _candidateForm.scss

Helpful code to be used in the project's directory if you need to check db entries

meteor mongo
db.comments_about_canditates_collection.find()
db.comments_about_canditates_collection.deleteMany({comment_up_votes: 0 })
db.candidates_collection.find()