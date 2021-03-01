import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  test('render Button component without errors', () => {
    render(<Button />);
    screen.debug();
  });
});
