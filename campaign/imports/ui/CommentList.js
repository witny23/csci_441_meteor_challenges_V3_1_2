import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class CommentList extends React.Component {

  renderAllComments(){
{/* obtain the comment_prop array from Candidate.js 
      iterate through the comments using map
      send the individual comment._id and comment to Comment.js as props
      aprox line 21 in CandidateList.js is a good example
*/}

      return this.props.Candidate_comment_prop_array.map((single_comment) => {        
        return <Comment key={single_comment._id} comment_prop_obj={single_comment}/>
      });
  }
  render(){
    return (
      <>
        <FlipMove delay={500 /* this is in milliseconds */}
                  leaveAnimation='accordionVertical'
                  maintainContainerHeight={true} /*stops the footer from
                                                  hopping on top of the last
                                                  topic when it is removed*/ >
          {this.renderAllComments()}
        </FlipMove>
      </>
    )
  }

};

CommentList.propTypes ={
  Candidate_comment_prop_array: PropTypes.array.isRequired,
};
