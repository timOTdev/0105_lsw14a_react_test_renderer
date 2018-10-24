import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shallow renders without crashing', () => {
    shallow(<App />); // notice this only renders App and will not render any child components
  });
});