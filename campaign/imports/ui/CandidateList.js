import React from 'react';
import Candidate from './Candidate.js';
import PropTypes from 'prop-types';


export default class CandidateList extends React.Component {

    renderCandidates() {
      if (this.props.candidate_obj_prop.length === 0){
        return (
          <div className='singleItemStyle'>
            <p>Add a new candidate to get started</p>
          </div>
        );
      } else {
          let candidateInfo = this.props.candidate_obj_prop.map((candidate) => {
            return <Candidate key={candidate._id} candidate_prop={candidate} />;
          });
          return candidateInfo;
      }

    };

  render(){
    return (
      <>
        {this.renderCandidates()}
      </>
    );
  }
};

CandidateList.propTypes = {
    candidate_obj_prop: PropTypes.array.isRequired,
};