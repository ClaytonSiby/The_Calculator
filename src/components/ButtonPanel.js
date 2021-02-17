import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="group-one">
      <Button buttonName="AC" />
      <Button buttonName="+/-" />
      <Button buttonName="%" />
      <Button buttonName="÷" />
    </div>

    <div className="group-two">
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="X" />
    </div>

    <div className="group-three">
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" />
    </div>

    <div className="group-4">
      <Button buttonName="1" />
      <Button buttonName="2" />
      <Button buttonName="3" />
      <Button buttonName="+" />
    </div>

    <div className="group-5">
      <Button buttonName="O" />
      <Button buttonName="." />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
