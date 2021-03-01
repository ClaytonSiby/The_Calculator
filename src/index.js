import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
