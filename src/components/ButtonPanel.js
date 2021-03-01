import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../assets/styles.module.css';
import btnPanelStyles from '../assets/btnPanel.module.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = btnName => clickHandler(btnName);
  return (
    <div className={styles.flexContainer}>
      <div className={btnPanelStyles.fixedHeight}>
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button color buttonName="÷" clickHandler={handleClick} />
      </div>

      <div className={btnPanelStyles.fixedHeight}>
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button color buttonName="x" clickHandler={handleClick} />
      </div>

      <div className={btnPanelStyles.fixedHeight}>
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button color buttonName="-" clickHandler={handleClick} />
      </div>

      <div className={btnPanelStyles.fixedHeight}>
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button color buttonName="+" clickHandler={handleClick} />
      </div>

      <div className={btnPanelStyles.fixedHeight}>
        <Button wide buttonName="0" clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button color buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
