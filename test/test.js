import Reeact from 'react'
import { mount, shalow } from 'enzyme'

describe('Text appears on list', ( => {

	it('looks for list component', () => {
		const wrapper = mount (<Foo />);
		expect(Foo.portotype.componentDidMount.calledOnce).to.equal(true);
	})
}));

