import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home component', () => {
  test('renders the DOM without errors', () => {
    const test = renderer.create(<Home />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
