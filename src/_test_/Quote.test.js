import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote component', () => {
  test('renders the DOM UI successfully', () => {
    render(<Quote />);
  });
});
