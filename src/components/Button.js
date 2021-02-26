import PropTypes from 'prop-types'
import buttonStyles from '../assets/button.module.css'

const Button = ({ buttonName, clickHandler, color, wide }) => {
  const handleClick = () => clickHandler(buttonName)
  return (
    <button
      type='button'
      style={{ background: color ? 'orange' : color, width: wide ? '50%' : '25%' }}
      className={buttonStyles.maxWidth}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  )
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Button
