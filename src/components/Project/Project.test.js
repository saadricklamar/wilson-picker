import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';
import { shallow } from 'enzyme';


describe('Project', () => {
  let wrapper;
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})