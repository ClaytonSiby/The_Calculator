import { render } from '@testing-library/react';
import App from '../components/App';
import renderer from 'react-test-renderer';

describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer.create(<App />).toJSON();
    expect(test).toMatchSnapshot();
  })
});
