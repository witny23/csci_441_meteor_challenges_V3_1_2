import React from 'react';
import Candidate from './Candidate.js';
import PropTypes from 'prop-types';


// const renderCandidates = (candidateObject) => {
//     let candidateInfo = candidateObject.map((candidate) => {
//       return <Candidate key={candidate._id} candidate_prop={candidate} />;
//     });
//     return candidateInfo;
//   };

export default class CandidateList extends React.Component {

    renderCandidates() {
        let candidateInfo = this.props.candidate_obj_prop.map((candidate) => {
            return <Candidate key={candidate._id} candidate_prop={candidate} />;
        });
        return candidateInfo;
    };

  render(){
    return (
      <>
        {/* <p>Candidate List Placeholder</p> */}
        {this.renderCandidates()}
      </>
    );
  }
};

CandidateList.propTypes = {
    candidate_obj_prop: PropTypes.array.isRequired,
};