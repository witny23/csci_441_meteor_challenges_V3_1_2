import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component{

  render(){
    return (
      <div className='footer'>
        <div className='footer-wrapper'>{/* if we used wrapper, bg would be grey */}
          <p>{this.props.footer_obj_prop}</p>
        </div>
      </div>
    );
  }
};

Footer.propTypes = {
    footer_obj_prop: PropTypes.string.isRequired,
};