import calculate from '../logic/calculate';

describe('calculate logic', () => {
  test('make calculations on the object passed to based on the button input', () => {
    const opObject = { total: 12, next: 3, operation: '+' };
    const btnName = '=';
    const answer = calculate(opObject, btnName);
    expect(answer.total).toBe('15');
  });
});
