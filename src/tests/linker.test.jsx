import React from 'react';
import Linker from '../components/shared/linker';
import {BrowserRouter as Router} from 'react-router-dom';
import { shallow } from 'enzyme';

let wrapper;
const props = {
    componentType: 'BUTTON',
    text: 'Planet',
    url: 'feed',
    event: () => {}
};

describe('</Linker>', () => {
    beforeEach(() => {
        wrapper = shallow(
            <Router>
                <Linker {... props}/>
            </Router>
        );
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should match props', () => {
        expect(wrapper.dive().props().componentType).toEqual('BUTTON');
        expect(wrapper.dive().props().text).toEqual('Planet');
        expect(wrapper.dive().props().url).toEqual('feed');
    });

    it('it should call function', () => {
       wrapper.dive().dive().props().onClick();
    });

});