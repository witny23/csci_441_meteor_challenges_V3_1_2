import React from 'react';
import PropTypes from 'prop-types';
import Instructions from './Instructions.js';

import TitleBar from './TitleBar.js';
import AddCandidates from './AddCandidates.js';
import CandidateList from './CandidateList.js';




export default class App extends React.Component {
  render(){
   return (
     <>
        <Instructions />
        {/* Return the TitleBar, AddCandidates, CandidateList with the appropriate props passed to the components  */}
        <TitleBar title_prop={this.props.main_title_prop} moderator_prop={this.props.main_moderator_prop}/>
        <AddCandidates/>
        <CandidateList candidate_obj_prop={this.props.main_candidate_obj_prop}/>
      </>

    );
  }
};

App.propTypes = {
    // this is going to throw an error then it will work.
    main_title_prop: PropTypes.string.isRequired,
    main_candidate_obj_prop: PropTypes.array.isRequired
  };