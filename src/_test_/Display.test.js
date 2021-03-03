import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Display component', () => {
  test('should render successfully to the DOM', () => {
    render(<Display />);
  });

  test('should render correct', () => {
    const tree = renderer.create(<Display />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
