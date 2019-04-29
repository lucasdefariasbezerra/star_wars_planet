import * as planetActions from '../components/planets/planetAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const planetMock = {
    name: 'Cato Neimoidia',
    climate: 'temperate, moist',
    population: '10000000',
    terrain: 'mountains, fields, forests, rock arches',
    films: []
};

const store = mockStore({
    planet: {},
    films: []
});

describe('planetAction', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should handle fetch', () => {
        fetchMock.get('https://swapi.co/api/planets/3/', { body: planetMock, headers:
        { 'content-type': 'application/json' }}, 200);

        const planetAction = {
            type: 'FETCH_PLANET',
            payload: planetMock
        };

        return store.dispatch(planetActions.fetchData(3)).then(() => {
            const receivedAction = store.getActions()[0];
            expect(receivedAction).toEqual(planetAction);
        });
    });

    it('should handle clear', () => {
        const { type } = planetActions.clearFilms();
        expect(type).toEqual('CLEAR_FILMS');
    });
});