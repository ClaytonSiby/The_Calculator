import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let result;

  switch (operation) {
    case '-':
      result = numOne.minus(numTwo).toString();
      break;
    case '+':
      result = numOne.plus(numTwo).toString();
      break;
    case 'X':
      result = numOne.times(numTwo).toString();
      break;
    case '÷':
      result = numOne.div(numTwo).toString();
      break;
    case '%':
      result = (numOne.div(numTwo).times(1)).toString();
      break;
    default:
  }

  return result;
};

export default operate;
