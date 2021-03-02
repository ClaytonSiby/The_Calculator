import { render } from '@testing-library/react';
import Button from '../components/Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
  test('render Button component without errors', () => {
    render(<Button />);
  });

  test('makes sure the output renders consistently', () => {
    const test = renderer.create(<Button />).toJSON();
    expect(test).toMatchSnapshot();
  })
});
