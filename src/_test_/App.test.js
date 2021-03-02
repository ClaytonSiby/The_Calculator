import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../components/App';

describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer.create(<App />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
