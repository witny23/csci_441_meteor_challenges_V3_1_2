import React from 'react'; 
import {Candidates_Collection_Access} from '../api/candidates.js';

export default class CandidateAddAnother extends React.Component {

  processFormDataFunction(event){
    event.preventDefault();
    let candidateName = event.target.formInputNameAttrubute.value;
  
    if(candidateName){
      event.target.formInputNameAttrubute.value = '';
      Candidates_Collection_Access.insert({
          name: candidateName,      
          up_votes: 0,  
          down_votes: 0,
          total_votes: 0,
          /* not directly used but it is a nice piece of info to have stored in the collection */
          date_added: new Date(), //https://docs.mongodb.com/manual/reference/method/Date/
      });
    };
  };
  

  render(){
    return (
/* Add the appropriate classNames as created in _candidateForm.scss */
      <div className=''>
        <form className='candidate-addition-container__form' onSubmit={this.processFormDataFunction.bind(this)}>
          <input className='candidate-addition-container__input' type='text' name='formInputNameAttrubute' placeholder='Candidate Name' />
          <button className='candidate-addition-container__add-candidate-button'>Add Candidate</button>
        </form>
      </div>
    )
  }

};

