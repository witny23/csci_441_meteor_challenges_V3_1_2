import React from 'react'; 
import PropTypes from 'prop-types';


export default class Footer extends React.Component{
  render(){
    return (
      <>
        <hr />
        <h1>{this.props.footer_prop}</h1>
      </>
    );
  }
};



Footer.propTypes = {
    footer_prop: PropTypes.string.isRequired,
};