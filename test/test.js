import test from 'mocha'
import Reeact from 'react'
import { mount, shalow } from 'enzyme'

import Title from '../components/title.js'
import BugForm from '../components/bugForm.js'
import BugChecklist from '../components/bugChecklist.js'
import Bug from '../components/bug.js' 


describe('Text appears on list', ( => {

	it('looks for list component', () => {
		const wrapper = mount (<BugChecklist />);
		expect(BugChecklist.portotype.componentDidMount.calledOnce).to.equal(true);
	})
}));

