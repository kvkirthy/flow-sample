import React from 'react';
import chai, { expect } from 'chai'
import {mount, shallow} from 'enzyme';
import WelcomePage from '../../app/WelcomePage/WelcomePage.jsx';
import {store} from '../../reducers.js';
 
 describe('Ul element Presence', () => {
	const wrapper = mount(<WelcomePage store={store} />);
    
  it('Component should render', () => {
      expect(wrapper).to.exist;
  });
    
  it('Checking whether h1 is present', () => {
		expect(wrapper.find('h1')).to.have.length(1);
  });
  it('Checking whether span is present', () => {
		expect(wrapper.find('span')).to.have.length(2);
  });
 })