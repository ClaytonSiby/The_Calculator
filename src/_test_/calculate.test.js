import calculate from '../logic/calculate';

describe('calculate logic', () => {
  test('make calculations on the object passed to it based on the button input', () => {
    const opObject = { total: 12, next: 3, operation: '+' };
    const btnName = '=';
    const answer = calculate(opObject, btnName);
    expect(answer.total).toBe('15');
  });

  test('assign the button input value to total if the value is in range (0 - 9)', () => {
    const opObject = { total: '', next: '', operation: '' };
    const btnName = '3';
    const answer = calculate(opObject, btnName);
    expect(answer.total).toBe('3');
  });

  test('clears the values in an object if button input is equal to "AC"', () => {
    const opObject = { total: 12, next: 3, operation: '+' };
    const btnName = 'AC';
    const answer = calculate(opObject, btnName);
    Object.values(answer).forEach(val => {
      expect(val).toEqual(null);
    });
  });

  test('returns a mutated object in accordance with the button input', () => {
    const opObject = { total: 12, next: 4, operation: '+' };
    const btnName = 'x';
    const answer = calculate(opObject, btnName);
    expect(answer.next === opObject.next).toBeFalsy();
  });

  test('returns the percentage output for the value passed in to it', () => {
    const objectOp = { total: '2', next: '', operation: '' };
    const answer = calculate(objectOp, '%');
    expect(answer.total).toBe('0.02');
  });
});
