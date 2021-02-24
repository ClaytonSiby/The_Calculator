import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div id="resultPanel">
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
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
