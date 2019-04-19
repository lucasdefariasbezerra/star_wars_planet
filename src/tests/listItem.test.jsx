import React from 'react';
import ListItem from '../components/shared/listItem';
import { shallow } from 'enzyme';

let wrapper;
const props = {
    item: { title: 'test', director: 'lewis test', producer: 'lewis producer' }
};

describe('</ListItem>', () => {
    beforeEach(() => {
        wrapper = shallow(
            <ListItem { ...props} />
        );
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should match props', () => {
        const title = wrapper.dive().find('FeedLabel').at(1).props().content;
        const feedChildren = wrapper.find('FeedSummary').props().children;
        const summaryText = feedChildren.reduce((text, item) => text.concat(item.concat(' ')));
        expect(title).toEqual('test');
        expect(summaryText.trim()).toEqual('director: lewis test  producer:  lewis producer');
    });


});