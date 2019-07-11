import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';



describe('Project', () => {
  let wrapper;
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})