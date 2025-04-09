import React from 'react';
import PropTypes from 'prop-types';
import Instructions from './Z_Instructions.js';
import TitleBar from './TitleBar.js';
import CandidateAddAnother from './CandidateAddAnother.js';
import CandidateList from './CandidateList.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render(){
   return (
     <>
        <Instructions /><br />
        <TitleBar App_title_prop={this.props.main_title_prop} App_moderator_prop={this.props.main_moderator_prop}/>
        <div className='wrapper'>
          <CandidateAddAnother />
          <CandidateList App_candidate_obj_prop={this.props.main_candidate_obj_prop}/>
        </div>
        <Footer App_footer_obj_prop={this.props.main_footer_obj_prop} />
      </>

    );
  }
};

App.propTypes = {
    main_title_prop: PropTypes.string.isRequired,
    main_candidate_obj_prop: PropTypes.array.isRequired
  };