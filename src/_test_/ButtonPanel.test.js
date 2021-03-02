import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

describe('ButtonPanel Component', () => {
  test('renders successfully without raising errors', () => {
    render(<ButtonPanel />);
  });

  test('output renders consistently', () => {
    const test = renderer.create(<ButtonPanel />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
