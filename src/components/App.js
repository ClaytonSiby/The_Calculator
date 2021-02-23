import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const resultObject = calculate(this.state, btnName);
    this.setState(resultObject);
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div id="mainContainer">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
