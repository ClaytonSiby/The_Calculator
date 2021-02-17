import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div>
    <h1>
      The result is:
      { result }
    </h1>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'O',
};

export default Display;
