import React from 'react'; 



export default class TitleBar extends React.Component{
  renderModerator() {
    if (this.props.moderator_prop) { 
      return (
        <p>Candidate Moderator: {this.props.moderator_prop}</p>
      );
    } else {
      return <p>Candidate Moderator: unknown</p>;
    }
  };
  
  render(){
    return (
      <div className='wrapper'>
        <div className="title-bar">
          <h1>{this.props.title_prop}</h1>
          {this.renderModerator()}
        </div>
      </div>

    );
  }
};