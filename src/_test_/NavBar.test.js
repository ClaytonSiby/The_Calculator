import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  test('render successfully to the DOM', () => {
    render(<NavBar />);
  });
});
