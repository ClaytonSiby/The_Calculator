import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/styles.module.css';
import display from '../assets/display.module.css';

const Display = ({ total, next, operation }) => (
  <div className={`${styles.flexContainer} ${display.displayComp}`}>
    <p>
      <span>{ total || '0' }</span>
      <br />
      <span>
        {' '}
        {operation || null}
        {' '}
        { next }
      </span>
    </p>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

export default Display;
