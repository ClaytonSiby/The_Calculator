import PropTypes from 'prop-types';

const Math = ({ addNumbers }) => (
  <div>
    <h5>
      Add 3 to 4 result is:
      <strong>
        {' '}
        { addNumbers(3, 4) }
        {' '}
      </strong>
    </h5>
  </div>
);

Math.propTypes = {
  addNumbers: PropTypes.func.isRequired,
};

export default Math;
