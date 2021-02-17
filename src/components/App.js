import React, { Fragment } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <Fragment>
      <Display result={ (4 + 5).toString()}/>
      <ButtonPanel />
    </Fragment>
  );
}

export default App;
