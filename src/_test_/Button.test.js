import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Button', () => {
  test('render Button component without errors', () => {
    render(<Button />);
  });

  test('makes sure the output renders consistently', () => {
    const test = renderer.create(<Button />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
