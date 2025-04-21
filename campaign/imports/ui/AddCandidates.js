import React, { useState } from 'react';  
import {Candidates_Collection_Access} from './../api/candidates.js';

export default  AddCandidates = () => {

  const [candidateName_state, setCandidateName] = useState('');


  const processFormDataFunction = (event) => {  
    event.preventDefault(); 
    if(candidateName_state){  
      Candidates_Collection_Access.insert({     
          name: candidateName_state,
          votes: 0,
      });
      setCandidateName('');  
    };
  };
  return (
    <div className='single-block-item-style'>
      <form className='form' onSubmit={processFormDataFunction}>
      <input  type='text' 
              value={candidateName_state}
              placeholder='Candidate Name'
              onChange={event => setCandidateName(event.target.value)} />
              
        <button className='button'>Add Candidate</button>
      </form>
    </div>
    )


};

