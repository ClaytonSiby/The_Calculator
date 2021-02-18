import operate from './operate';

const calculate = (calculatorDataObject, buttonName) => {
  let { total, next, operation } = calculatorDataObject;

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else if (buttonName === '=') {
    if (next && total) {
      total = operate(total, next, operation);
    }
  } else if (['+', '-', '÷', 'X', '%'].includes(buttonName)) {
    total = operate(total, next, operation);
  }

  return { total, next, operation };
};

export default calculate;
