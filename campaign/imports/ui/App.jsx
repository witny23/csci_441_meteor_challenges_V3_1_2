import React from 'react';
import TitleBar from './TitleBar.jsx';
import AddCandidates from './AddCandidates.jsx';
import CandidateList from './CandidateList.jsx';
import NavLinks from './NavLinks.jsx';

export const App = (props) => {

   return (
     <div className='content'>
        <NavLinks />
        <TitleBar title_prop={props.main_title_prop} moderator_prop={props.main_moderator_prop}/>
        <div className='wrapper'>
          <AddCandidates/>
          <CandidateList candidate_obj_prop={props.main_candidate_obj_prop}/>
        </div>
      </div>

    );
};