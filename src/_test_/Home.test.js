
import Home from '../components/Home';
import renderer from 'react-test-renderer'

describe('Home component', () => {
  test('renders the DOM without errors', () => {
    const test = renderer.create(<Home />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
