import React from 'react';
import PlanetCard from '../components/planets/planetCard';
import {BrowserRouter as Router} from 'react-router-dom';
import { shallow } from 'enzyme';

let wrapper;
const props = {
    planet: {population: 'Planet Test', climate: 'Arid', terrain: 'Desert' },
    films: [ { title: 'test', director: 'lewis test', producer: 'lewis producer' },
            { title: 'test', director: 'lewis test', producer: 'lewis producer' }]
};

describe('</PlanetCard>', () => {
    beforeEach(() => {
        wrapper = shallow(
            <Router>
                <PlanetCard { ...props} />
            </Router>
        );
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should match props', () => {
        expect(wrapper).toMatchSnapshot();
        const cardContent = wrapper.dive().dive();
        const assertPopulation = cardContent
                        .find('CardDescription')
                        .at(0)
                        .props()
                        .children
                        .reduce((text, current) => text.concat(current));

        const assertClimate = cardContent
                        .find('CardDescription')
                        .at(1)
                        .props()
                        .children
                        .reduce((text, current) => text.concat(current));

        const assertTerrain = cardContent
                        .find('CardDescription')
                        .at(2)
                        .props()
                        .children
                        .reduce((text, current) => text.concat(current));
        expect(assertPopulation.trim()).toEqual('Population : Planet Test');
        expect(assertClimate.trim()).toEqual('Climate : Arid');
        expect(assertTerrain.trim()).toEqual('Terrain : Desert');
    });
});