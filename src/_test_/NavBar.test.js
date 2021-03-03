import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  test('render successfully to the DOM', () => {
    const test = renderer.create(<NavBar />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
