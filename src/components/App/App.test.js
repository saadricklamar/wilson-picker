import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('App', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<App/>)
    instance = wrapper.instance();
    jest.spyOn(instance, 'generateColors')
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a default state', () => {
    expect(wrapper.state()).toHaveProperty('colors')
    expect(wrapper.state()).toHaveProperty('lockedColors')
    expect(wrapper.state()).toHaveProperty('projectID')
  });
  it("should invoke generate colors", () => {
    instance.componentDidMount();
    expect(instance.generateColors).toHaveBeenCalled();
  });

})

