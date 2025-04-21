import React from 'react';
import Candidate from './Candidate.js';

export default CandidateList = (props) => {

  if(props.candidate_obj_prop.length === 0){
    return (
      <div className='single-block-item-style'>
        <p className = 'single-block-item-style__message'>Add a new candidate to get started</p>
      </div>
    );
  } else {
    let candidateInfo = props.candidate_obj_prop.map((candidate) => {
      return <Candidate key={candidate._id} candidate_prop={candidate} />;
    });
    return candidateInfo;
  }
  
};
