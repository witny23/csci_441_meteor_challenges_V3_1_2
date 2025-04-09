import React from 'react'; 



export default class TitleBar extends React.Component{
  render_moderator() {
    if (this.props.App_moderator_prop) { 
      return (
        <p className='title-bar__moderator'>Candidate Moderator: {this.props.App_moderator_prop}</p>
      );
    } else {
      return <p className='title-bar__moderator'>Candidate Moderator: unknown</p>;
    }
  };
  
  render(){
    return (
      <div className='wrapper'>
        <div className="title-bar">
          <h1>{this.props.App_title_prop}</h1>
          {this.render_moderator()}
        </div>
      </div>

    );
  }
};