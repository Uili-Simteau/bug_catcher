import Reeact from 'react'
import { mount, shalow } from 'enzyme'

describe('', ( => {

	it('calls componentDidMount', () => {
		const wrapper = mount (<Foo />);
		expect(Foo.portotype.componentDidMount.calledOnce).to.equal(true);
	})
}));

