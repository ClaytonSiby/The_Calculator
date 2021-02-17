import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <Display result={(4 + 5).toString()} />
      <ButtonPanel />
    </>
  );
}

export default App;
