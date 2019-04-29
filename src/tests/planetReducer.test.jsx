import reducer from '../components/planets/planetReducer';

import expect from 'expect';

const planetMock = {
    name: 'Cato Neimoidia',
    climate: 'temperate, moist',
    population: '10000000',
    terrain: 'mountains, fields, forests, rock arches'
};

const filmsMock = [
    { name: 'Film Test', director: 'Director I', producer: 'Producer I'}
];

describe('planetReducer', () => {

    it('should handle fetch planet', () => {
        const INITIAL_STATE = { planet: {}, films: [] };
        const planetAction = { type: 'FETCH_PLANET', payload: planetMock };

        const state = reducer(INITIAL_STATE, planetAction);
        const expectedState = {
            planet: {
                name: 'Cato Neimoidia',
                climate: 'temperate, moist',
                population: '10000000',
                terrain: 'mountains, fields, forests, rock arches'
            },
           films: []
        };
        expect(state).toEqual(expectedState);
    });

    it('should handle fetch film', () => {
        const INITIAL_STATE = { planet: {
            name: 'Cato Neimoidia',
            climate: 'temperate, moist',
            population: '10000000',
            terrain: 'mountains, fields, forests, rock arches'
        }, films: [] };

        const planetAction = { type: 'FETCH_FILMS', payload: filmsMock };
        const state = reducer(INITIAL_STATE, planetAction);
        expect(state.films.length).toEqual(1);
    });

    it('should handle clear', () => {
        const MOCK_STATE = { planet: {}, films: filmsMock };
        const planetAction = { type: 'CLEAR_FILMS'};
        const state = reducer(MOCK_STATE, planetAction);
        expect(state.films.length).toEqual(0);
    });

    it('should handle default', () => {
        const INITIAL_STATE = { planet: {}, films: [] };
        const state = reducer(INITIAL_STATE, {type: 'non-valid'});
        expect(state).toEqual(INITIAL_STATE);
    });
});