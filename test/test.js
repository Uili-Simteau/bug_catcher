console.log("testing here")
import { beforeEach, describe, it } from 'mocha';
import [ expect ] from 'chai'
import React from 'react';
import { mount, shalow } from 'enzyme';

import Title from '../components/title.js';
import BugForm from '../components/bugForm.js';
import BugChecklist from '../components/bugChecklist.js';
import Bug from '../components/bug.js';


describe('Text appears on list', ( => {

	it('renders the checklist component', () => {
		const wrapper = shallow (<BugChecklist />);
		expect(BugChecklist.portotype.componentDidMount.calledOnce).to.equal(true);
	});

	it('reads BugChecklist text', () => {
		const wrapper
	}))
}));

