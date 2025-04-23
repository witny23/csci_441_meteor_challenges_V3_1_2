import React from 'react'; 
import PropTypes from 'prop-types';
import {Candidates} from './../api/candidates.js'; 

export default class Candidate extends React.Component{
  render(){
    return (
        
        <div className='single-block-item-style'
            key={this.props.candidate_prop._id}>
            <div className='candidate'>
                <div>
                    <h2 className='candidate__name'>{' ' + this.props.candidate_prop.name} </h2>
                    {'rank: ' + this.props.candidate_prop.rank}
                    <p className='candidate__votes'>
                        {this.props.candidate_prop.position + ' place '}
                        with {this.props.candidate_prop.votes} vote[s] {' '}
                    </p>
                </div>
                <div className='candidate__actions'>
                    <button className='button button--round' onClick={() => { 
                        Candidates.remove({_id: this.props.candidate_prop._id})
                    }}>X</button> 
                    <button className='button button--round' onClick={() => { 
                        Candidates.update({_id: this.props.candidate_prop._id}, {$inc: {votes: 1}})
                    }}>+1</button> 
                    <button className='button button--round' onClick={() => {  
                        Candidates.update({_id: this.props.candidate_prop._id}, {$inc: {votes: -1}})
                    }}>-1</button>
                </div>

            </div>
        </div>   
      );
  }
};

Candidate.propTypes = {
    candidate_prop: PropTypes.object.isRequired,
};


