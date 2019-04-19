import React from 'react';
import ActionButton from '../components/shared/actionButton';
import { shallow } from 'enzyme';

let wrapper;
const props = {
    event: () => {},
    parameters: '',
    iconType: '',
    size: 'big',
    color: 'green',
    side: '',
    disabled: false,
    text: 'Hi Test'
};

describe('</ActionButton>', () => {
    beforeEach(() => {
        wrapper = shallow(<ActionButton {... props}/>);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should match props', () => {
        expect(wrapper.props().size).toEqual('big');
        expect(wrapper.props().color).toEqual('green');
        expect(wrapper.dive().text()).toEqual('<Icon />Hi Test');
    });

    it('should execute click', () => {
        wrapper.props().onClick();
    });

    it('should not render the text', () => {
        const newProps = { ... props, text: '' };
        const textWrapper = shallow(<ActionButton { ... newProps }/>);
        expect(textWrapper.dive().text()).toEqual('<Icon />');
    });

});