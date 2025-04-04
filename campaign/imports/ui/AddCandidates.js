import React from 'react'; 
import {Candidates} from './../api/candidates.js';

export default class AddCandidates extends React.Component {

  processFormDataFunction(event){
    event.preventDefault();
    let candidateName = event.target.formInputNameAttrubute.value;
  
    if(candidateName){
      event.target.formInputNameAttrubute.value = '';
      Candidates.insert({
          name: candidateName,
          votes: 0,
      });
    };
  };
  

  render(){
    return (
      <div className='singleItemStyle'>
        <form onSubmit={this.processFormDataFunction.bind(this)}>
          <input type='text' name='formInputNameAttrubute' placeholder='Candidate Name' />
          <button className='button'>Add Candidate</button>
        </form>
      </div>
    )
  }

};
