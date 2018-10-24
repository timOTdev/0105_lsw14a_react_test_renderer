import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('shallow renders without crashing', () => {
    shallow(<App />); // notice this only renders App and will not render any child components
  });

  it('renders the display', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('.display') // returns an array
    const elements2 = wrapper.find('h1.display')
    expect(elements.length).toBe(1); // checks for a classname of display
    expect(elements2.length).toBe(1); // checks for an h1 with a classname of display
  })

  it('should be off by default', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.isOn).toBe(false); // checks for items on state
  })

  it('should have a toggle button', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('button.toggle-bn'); // checks for a button with class of toggle-bn
    expect(elements.length).toBe(1);
  })

  it('should display the state of the switch', () => {
    const wrapper = shallow(<App />);
    const display = wrapper.find('h1.display');
    expect(display.text()).toBe('Off')
  })

  describe('toggle button', () => {
    it('should toggle state on click', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance(); // checks for a button with class of toggle-bn
      const button = wrapper.find('button.toggle-bn')
      expect(instance.state.isOn).toBe(false); // off by default
      button.simulate('click');
      expect(instance.state.isOn).toBe(true);
      button.simulate('click');
      expect(instance.state.isOn).toBe(false);
    })
  })
});

/*

- does it render? ✅
- does it render the right UI(data?) => UI ✅
- check/access/change state ✅
- check/access/change props
- fire events

  Specs
  - should be "off" by default ✅
  - should have a toggle button ✅
  - click the toggle button should toggle the switch ✅
  - should display the correct state (on/off) of the switch
*/