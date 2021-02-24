import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = btnName => clickHandler(btnName);
  return (
    <div id="buttonWrapper">
      <div className="group-one">
        <Button className="btnComponent" buttonName="AC" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="+/-" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="%" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="÷" clickHandler={handleClick} />
      </div>

      <div className="group-two">
        <Button className="btnComponent" buttonName="7" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="8" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="9" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="x" clickHandler={handleClick} />
      </div>

      <div className="group-three">
        <Button className="btnComponent" buttonName="4" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="5" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="6" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="-" clickHandler={handleClick} />
      </div>

      <div className="group-four">
        <Button className="btnComponent" buttonName="1" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="2" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="3" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="+" clickHandler={handleClick} />
      </div>

      <div className="group-five">
        <Button className="btnComponent" buttonName="O" clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="." clickHandler={handleClick} />
        <Button className="btnComponent" buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
