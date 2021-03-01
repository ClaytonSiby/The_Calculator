import { render } from '@testing-library/react';
import Display from '../components/Display';

describe('Display component', () => {
  test('renders successfully without raising errors', () => {
    render(<Display />);
  });
});
