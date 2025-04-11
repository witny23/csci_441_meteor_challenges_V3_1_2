import React from 'react';
import Candidate from './Candidate.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';


export default class CandidateList extends React.Component {

    renderCandidates() {
      if (this.props.candidate_obj_prop.length === 0){
        return (
          <div className='single-block-item-style'>
            <p className = 'single-block-item-style__message'>Add a new candidate to get started</p>
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
    candidate_obj_prop: PropTypes.array.isRequired,
};