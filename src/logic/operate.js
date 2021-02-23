import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result;

  switch (operation) {
    case '-':
      result = numOne.minus(numTwo);
      break;
    case '+':
      result = numOne.plus(numTwo);
      break;
    case 'X':
      result = numOne.times(numTwo);
      break;
    case '÷':
      if (numTwo === 0) {
        result = 'Cannot divide by zero';
      }
      result = numOne.div(numTwo);
      break;
    case '%':
      result = numTwo ? numTwo.div(100) : numOne.div(100);
      break;
    default:
  }

  return result.toPrecision().toString();
};

export default operate;
