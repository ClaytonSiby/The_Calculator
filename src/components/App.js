import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const handleClick = () => calculate();
  return (
    <>
      <Display />
      <ButtonPanel />
      <button type="button" style={{ display: 'none' }} onClick={handleClick}>
        Click
      </button>
    </>
  );
}

export default App;
