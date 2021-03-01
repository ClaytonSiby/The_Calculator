import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from '../assets/button.module.css';

const Button = ({
  buttonName, clickHandler, color, wide,
}) => {
  const handleClick = () => clickHandler(buttonName);
  return (
    <button
      type="button"
      style={{ background: color ? 'orange' : color, width: wide ? '50%' : '25%' }}
      className={buttonStyles.maxWidth}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  buttonName: '',
  clickHandler: undefined,
  wide: false,
  color: false,
};

export default Button;
