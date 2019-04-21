import React from 'react';
import { PlanetFeed } from '../components/planets/planetFeed';
import {BrowserRouter as Router} from 'react-router-dom';
import { shallow } from 'enzyme';

let wrapper;

const props = {
    fetchData: jest.fn(),
    clearFilms: jest.fn(),
    planet: { name: 'tatoine', climate: 'arid', population: 1, terrain: 'desert' },
    films: [{ name: 'test ', director: 'test', producer: 'test'}]
};

describe('</PlanetFeed>', () => {
    beforeEach(() => {
        wrapper = shallow(
        <Router>
                <PlanetFeed { ...props}/>
        </Router>
        );
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should match props', () => {
        const feed = wrapper.dive().dive();
        expect(feed.find('PlanetCard').props().films.length).toEqual(1);
        expect(feed.find('PlanetCard').props().planet.name).toEqual('tatoine');
        expect(feed.find('PlanetCard').props().planet.climate).toEqual('arid');
        expect(feed.find('PlanetCard').props().planet.population).toEqual(1);
        expect(feed.find('PlanetCard').props().planet.terrain).toEqual('desert');
    });

    it('should execute handle', () => {
        const feed = wrapper.dive().dive();
        const button = feed.find('ActionButton');
        const { fetchData, clearFilms} = props;
        button.props().event();
        expect(fetchData).toHaveBeenCalled();
        expect(clearFilms).toHaveBeenCalled();
    });
});