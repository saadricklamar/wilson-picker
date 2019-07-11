import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';
import { shallow } from 'enzyme';

describe('Projects', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<Projects/>)
    instance = wrapper.instance()
    jest.spyOn(instance, 'fetchPalettes')
    jest.spyOn(instance, 'fetchProjects')
    

  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toHaveProperty('projects')
    expect(wrapper.state()).toHaveProperty('palettes')
    expect(wrapper.state()).toHaveProperty('title')
    expect(wrapper.state()).toHaveProperty('paletteName')
    expect(wrapper.state()).toHaveProperty('projectID')
  });

  it("componentDidMount should call fetches", () => {
    instance.componentDidMount();
    expect(instance.fetchPalettes).toHaveBeenCalled();
    expect(instance.fetchProjects).toHaveBeenCalled();
  });

})