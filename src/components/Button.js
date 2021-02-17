import PropTypes from 'prop-types';

const Button = ({ buttonName }) => {
    return (
        <button>{ buttonName }</button>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
}

export default Button;
