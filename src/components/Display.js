import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div id="resultPanel">
    <p>{total || next}</p>
    <span>
      {next && (total || '0')}
      {' '}
      {operation || null}
    </span>
  </div>
);

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
