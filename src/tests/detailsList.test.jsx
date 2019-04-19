import React from 'react';
import DetailsList from '../components/shared/detailsList';
import { shallow } from 'enzyme';

let wrapper;
const props = {
    list: [ { title: 'test', director: 'lewis test', producer: 'lewis producer' },
            { title: 'test', director: 'lewis test', producer: 'lewis producer' }]
};

describe('</DetailsList>', () => {
    beforeEach(() => {
        wrapper = shallow(
            <DetailsList { ...props} />
        );
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have length of two', () => {
        expect(wrapper.find('ListItem')).toHaveLength(2);
    });
});