import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const initialState = { total: null, next: null, operation: null };
  const [state, setState] = useState(initialState);

  const handleClick = btnName => {
    setState(calculate(state, btnName));
  };

  const { total, next, operation } = state;

  return (
    <div id="mainContainer">
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
