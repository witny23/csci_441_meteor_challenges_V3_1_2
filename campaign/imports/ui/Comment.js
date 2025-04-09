import React from 'react';
import {Comments_About_Candidates_Collection_Access} from '../api/comments_about_candidates.js';
import PropTypes from 'prop-types';


export default class Comments extends React.Component{

  render(){
    let single_comment_class_name =
    `comment-container 
     comment-container--position-${this.props.comment_prop_obj.rank}`;

    let possible_link = this.props.comment_prop_obj.comment;
/* check if comment containes a link. If it does, make it into a clickable link that opens in a new tab */
    if (possible_link.includes('http')){
      possible_link = <a href={possible_link} target='_blank'>{possible_link}</a>;
    };
    
    return (
      <>
        <div className={single_comment_class_name}
             key={this.props.comment_prop_obj._id} >
          <div className='comment-container__topic-element'>
            <div>
              <p className='comment-container__stats'>{this.props.comment_prop_obj.total_comment_votes} vote[s], {''} 
                      {this.props.comment_prop_obj.comment_up_votes} up {' '} 
                      {this.props.comment_prop_obj.comment_down_votes} down
              </p> {''/* single space before button hack */}
              <h4 className='comment-container__topic-element'>{possible_link}</h4>
            </div>
            <div className='comment-container__actions'>
              <button className='comment-container__comment-action-buttons comment-container__comment-action-buttons--round' onClick={() => {  // anonymous arrow function
                Comments_About_Candidates_Collection_Access.update({_id: this.props.comment_prop_obj._id},
                  {$inc: {comment_up_votes: 1, total_comment_votes: 1}})}}>+1</button>
              <button className='comment-container__comment-action-buttons comment-container__comment-action-buttons--round' onClick={() => {
                Comments_About_Candidates_Collection_Access.update({_id: this.props.comment_prop_obj._id},
                  {$inc: {comment_down_votes: 1, total_comment_votes: 1}})}}>-1</button>
              <button className='comment-container__comment-action-buttons comment-container__comment-action-buttons--round' onClick={() => {
                Comments_About_Candidates_Collection_Access.remove({_id: this.props.comment_prop_obj._id})
              }}>X</button>
            </div>

          </div>
        </div>
      </>
    );
  }
};
Comments.propTypes = {
  comment_prop_obj: PropTypes.object.isRequired,
};
