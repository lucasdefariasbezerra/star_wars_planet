export const fetchData = (id) => {
    const url = `https://swapi.co/api/planets/${id}/`;
    return dispatch => {
        return fetch(url).then(response => response.json())
            .then(body => {
                const { films } = body;
                dispatch(mapPlanet(body));
                console.log(' films ', films);
                if (films.length > 0) {
                    const requestList = mapRequest(films);
                    dispatch(mapFilms(requestList));
                }
            });
    };
};

const mapRequest = (films) => {
    return films.map(film => fetch(film));
};

export const mapPlanet = (planet) => {
    return {
        type: 'FETCH_PLANET',
        payload: planet
    };
};

export const mapFilms = (films) => {
    console.log('films promise ', films);
    return dispatch => {
        films.forEach(film => {
            dispatch(resolvePromise(film, 'FETCH_FILMS', 'obj'));
        });
    };
};

export const clearFilms = () => {
    return {
        type: 'CLEAR_FILMS',
        data: []
    };
};

const resolvePromise = (fetch, action, field) => {
    console.log('on resolve');
    return fetch.then(result => result.json())
    .then(data => {
        return {
            type: action,
            payload: field === 'obj' ? data : data[field]
        };
    });
};
