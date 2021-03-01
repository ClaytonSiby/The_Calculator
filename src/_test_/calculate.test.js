import calculate from '../logic/calculate';

describe('calculate logic', () => {
  test('make calculations on the object passed to it based on the button input', () => {
    const opObject = { total: 12, next: 3, operation: '+' };
    const btnName = '=';
    const answer = calculate(opObject, btnName);
    expect(answer.total).toBe('15');
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
});
