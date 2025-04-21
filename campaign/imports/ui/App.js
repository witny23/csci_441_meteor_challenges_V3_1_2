import React from 'react';
import TitleBar from './TitleBar.js';
import AddCandidates from './AddCandidates.js';
import CandidateList from './CandidateList.js';

export default App = (props) => {

   return (
     <>
        <TitleBar title_prop={props.main_title_prop} moderator_prop={props.main_moderator_prop}/>
        <div className='wrapper'>
          <AddCandidates/>
          <CandidateList candidate_obj_prop={props.main_candidate_obj_prop}/>
        </div>
      </>

    );
};