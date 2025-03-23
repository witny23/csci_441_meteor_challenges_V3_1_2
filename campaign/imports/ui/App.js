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

      </>

    );
  }
};
