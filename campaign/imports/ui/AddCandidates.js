import React from 'react'; 
import {Candidates} from './../api/candidates.js'; // Part 2 import

export default class AddCandidates extends React.Component {
// Part 2 custom method
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
      <>
        {/* <p>Add Candidates Component Placeholder</p> */}
        {/* Part 2 */}
        <form onSubmit={this.processFormDataFunction.bind(this)}>
          <input type='text' name='formInputNameAttrubute' placeholder='Candidate Name' />
          <button>Add Candidate</button>
        </form>
      </>
    )
  }

};
