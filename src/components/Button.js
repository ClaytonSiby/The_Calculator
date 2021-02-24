import PropTypes from 'prop-types';

const Button = ({ buttonName, clickHandler }) => {
  const handleClick = () => clickHandler(buttonName);
  return (
    <button type="button" className="btnInput" onClick={handleClick}>
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
