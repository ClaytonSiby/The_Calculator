import operate from './operate';

const calculate = (calculatorDataObject, buttonName) => {
  let { total, next, operation } = calculatorDataObject;
  const operators = ['+', '-', 'X', '÷', '='];
  const regexp = /[0-9]/.test(buttonName);

  if (buttonName === '+/-') {
    if (total && !next) {
      total = operate(total, -1, 'X');
    } else if (next) {
      next = operate(next, -1, 'X');
    }
  }

  if (buttonName === 'AC') {
    total = null; next = null; operation = null;
  }

  if (regexp) {
    if (!total || total === '0') {
      total = buttonName;
    } else if (total && total !== '0' && !next && !operation) {
      total += buttonName;
      if (buttonName === '0' && total === '0') {
        total += total;
      }
    } else if (total && operation && (!next || next === '0')) {
      next = buttonName;
    } else if (total && next && operation && next !== '0') {
      next += buttonName;
    }
  }

  if (operators.includes(buttonName)) {
    const newOperation = buttonName === '=' ? null : buttonName;
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = newOperation;
    } else if (total && !next) {
      operation = newOperation;
    }
  }

  if (buttonName === '%') {
    if (total && !next) {
      total = operate(total, 100, '÷');
    } else if (next) {
      next = operate(next, 100, '÷');
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      total = '0.';
    } else if (total && !next && total.indexOf('.') === -1) {
      total += '.';
    } else if (next && next.indexOf('.') === -1) {
      next += '.';
    }
  }

  return { total, next, operation };
};

export default calculate;
