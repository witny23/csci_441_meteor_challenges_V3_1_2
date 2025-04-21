import React from 'react';
import Candidate from './Candidate.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import {Comments_About_Candidates_Collection_Access, Calculate_comment_rank}
                        from '../api/comments_about_candidates.js';


export default class CandidateList extends React.Component {

    renderCandidates() {

      if (this.props.App_candidate_obj_prop.length === 0){
        return (
          <div className='candidate-container'>
            <p className = 'candidate-container__no-candidates-message'>Add a new candidate to get started</p>
          </div>
        );
      } else {
          let candidateInfo = this.props.App_candidate_obj_prop.map((candidate) => {
/* Obtain all the comments about 1 candidate (sorted by most first) and save them in a variable 
    Comments_About_Candidates_Collection_Access.find and candidate_id_in_comment_collection: ... 
      will be helpful (found in CommentAddAnother.js) 
    client/main.js line 13 is a good example of the code needed
*/
            let Single_Candidate_Comments =
               Comments_About_Candidates_Collection_Access.find({candidate_id_in_comment_collection: candidate._id},
                                                                  {sort: {total_comment_votes: -1}}).fetch();
 /* rank the comments using Calculate_comment_rank */         
            let ranked_comments = Calculate_comment_rank(Single_Candidate_Comments);

  /* provide the ranked comments as a prop to Candidate.js */ 
            return <Candidate key={candidate._id} CandidateList_candidate_prop={candidate} 
                          CandidateList_comment_prop_array={ranked_comments}/>;
          });
          return candidateInfo;
      }

    };

  render(){
    return (
      <>
        <FlipMove delay={500 /* this is in milliseconds */}
            leaveAnimation='accordionVertical'
            maintainContainerHeight={true} /*stops the footer from
                                            hopping on top of the last
                                            topic when it is removed*/ >
          {this.renderCandidates()}
        </FlipMove>
      </>
    );
  }
};

CandidateList.propTypes = {
  App_candidate_obj_prop: PropTypes.array.isRequired,
};