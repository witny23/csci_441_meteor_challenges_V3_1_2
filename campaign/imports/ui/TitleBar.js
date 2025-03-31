import React from 'react'; 



export default class TitleBar extends React.Component{
  renderModerator() {
    if (this.props.moderator_prop) {  // check for the existance of the prop (not the length b/c no length is not exist)
      return (
        <p>Candidate Moderator: {this.props.moderator_prop}</p>
      );
    } else {
      return <p>Candidate Moderator: unknown</p>;
    }
  };
  
  render(){
    return (
      <>
        <h1>{this.props.title_prop}</h1>
        {this.renderModerator()}
      </>
    );
  }
};