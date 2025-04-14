import React from 'react'; 
import PropTypes from 'prop-types';
import {Candidates_Collection_Access} from '../api/candidates.js'; 

import {Comments_About_Candidates_Collection_Access}
                        from './../api/comments_about_candidates.js';
import CommentAddAnother from './CommentAddAnother.js';
import CommentList from './CommentList.js';

export default class Candidate extends React.Component{
  render(){
    let single_candidate_class_name =
        `candidate-container
         candidate-container--position-${this.props.CandidateList_candidate_prop.rank}`;
    
    return (
        <>
        <div className={single_candidate_class_name}
             key={this.props.CandidateList_candidate_prop._id}>
            <div className='candidate-container__candidate-element'>
                <div>
                    <h2 className='candidate-container__candidate-name'>
                        {this.props.CandidateList_candidate_prop.name + ': '}
                        {this.props.CandidateList_candidate_prop.position + ' place: '} </h2>
                    <p className='candidate-container__votes candidate-container__margin-left'>
                        {this.props.CandidateList_candidate_prop.total_votes} total vote[s] {'('}
                        {this.props.CandidateList_candidate_prop.up_votes} up {' '}&amp;{' '}
                        {this.props.CandidateList_candidate_prop.down_votes} down{')'} 
                    </p><br />
                </div>
                <div className='candidate-container__actions'>
                    <button className='candidate-container__candidate-action-buttons 
                                        candidate-container__candidate-action-buttons--round' onClick={() => { 
                        Candidates_Collection_Access.remove({_id: this.props.CandidateList_candidate_prop._id})
 {/* challenge code ***********************************************************/}    
                // if the candidate is deleted, the comments about the candidate should be deleted
                // to do so, iterate (with .map) the comments and delete them one at a time,
                //   use the comment_prop sent from the candidateList.js

                






                    }}>X</button> 
                    <button className='candidate-container__candidate-action-buttons 
                                        candidate-container__candidate-action-buttons--round' onClick={() => { 
                        Candidates_Collection_Access.update({_id: this.props.CandidateList_candidate_prop._id}, {$inc: {total_votes: 1}})
                        Candidates_Collection_Access.update({_id: this.props.CandidateList_candidate_prop._id}, {$inc: {up_votes: 1}})
                    }}>+1</button> 
                    <button className='candidate-container__candidate-action-buttons 
                                        candidate-container__candidate-action-buttons--round' onClick={() => {  
                        Candidates_Collection_Access.update({_id: this.props.CandidateList_candidate_prop._id}, {$inc: {total_votes: 1}})
                        Candidates_Collection_Access.update({_id: this.props.CandidateList_candidate_prop._id}, {$inc: {down_votes: 1}})
                    }}>-1</button>
                </div>
                    
            </div>
            <div className='candidate-container__margin-left'>
{/* obtain the CandidateList_candidate_prop from CandidateList.js and pass it as a prop to CommentAddAnother.js */}

{/* obtain the CandidateList_comment_prop_array from CandidateList.js and pass it as a prop to CommentList.js*/}


            </div>


        </div> 
        </>  
      );
  }
};

Candidate.propTypes = {
    CandidateList_candidate_prop: PropTypes.object.isRequired,
    CandidateList_comment_prop_array: PropTypes.array.isRequired,
};

