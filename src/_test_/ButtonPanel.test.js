import {render} from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';
import renderer from 'react-test-renderer';

describe('ButtonPanel Component', () => {
  test('renders successfully without raising errors', () => {
    render(<ButtonPanel />);
  });

  test('output renders consistently', () => {
    const test = renderer.create(<ButtonPanel />).toJSON();
    expect(test).toMatchSnapshot();
  })
});
