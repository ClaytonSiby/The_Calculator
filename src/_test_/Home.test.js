import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  test('renders the DOM without errors', () => {
    render(<Home />);
  });
});
