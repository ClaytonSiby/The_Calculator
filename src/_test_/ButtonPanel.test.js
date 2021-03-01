import { render, screen } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

describe('ButtonPanel Component', () => {
  test('renders successfully without raising errors', () => {
    render(<ButtonPanel />);
    screen.debug();
  });
});
