import React from 'react';
import RowItem from '../components/shared/rowItem';
import { shallow } from 'enzyme';

let wrapper;
const props = {
    columns: 1,
    imageSrc: 'image.png'
};

describe('</RowItem>', () => {
    beforeEach(() => {
        wrapper = shallow(
            <RowItem { ...props} />
        );
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});