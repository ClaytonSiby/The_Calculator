import operate from '../logic/operate';

describe('Operate logic', () => {
  test('it operates on two numbers in accordance with the operation input', () => {
    expect(operate(6, 3, '÷')).toEqual('2');
  });

  test('the return value is a string', () => {
    const returnValue = operate(12, 2, 'x');
    expect(returnValue.constructor).toBe(String);
  });

  test('does not return anything else other than a string value', () => {
    const returnValue = operate(12, 2, 'x');
    expect(returnValue.constructor === Number).toBeFalsy();
  });
});
