import React from 'react'; 

import {Comments_About_Candidates_Collection_Access} from '../api/comments_about_candidates.js';


export default class CommentAddAnother extends React.Component {

  processFormDataFunction(event){
    event.preventDefault();
    let new_comment = event.target.formInputReplyAttribute.value;
  
    if(new_comment){
      event.target.formInputReplyAttribute.value = '';
      Comments_About_Candidates_Collection_Access.insert({
        comment: new_comment,
        comment_up_votes: 0,
        comment_down_votes: 0,
        total_comment_votes: 0,
/* Make sure the Candidate_candidate_obj_prop is using the same name given in Candidate.js */
				candidate_id_in_comment_collection: this.props.Candidate_candidate_obj_prop._id
      });
    };
  };
  

  render(){
    return (
      <div className='comment-addition-container'>
        <form className='comment-addition-container__form' onSubmit={this.processFormDataFunction.bind(this)}>
          <input className='comment-addition-container__input' type='text' name='formInputReplyAttribute' placeholder='Comments welcome' />
          <button className='comment-addition-container__add-comment-button'>Add Comment</button>
        </form>
      </div>
    )
  }

};
