import React from 'react';
import ReactDOM from 'react-dom';
import Palette from './Palette';
import { shallow } from 'enzyme';


describe('Palette', () => {
  let wrapper;
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})