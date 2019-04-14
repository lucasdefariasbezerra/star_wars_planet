const INITIAL_STATE = {
    planet: {},
    films: []
 };

export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case 'FETCH_PLANET':
            return { ...state, planet: action.payload };
        case 'FETCH_FILMS':
            return { ...state, films: state.films.concat(action.payload) };
        case 'CLEAR_FILMS':
        return { ...state, films: [] };
         default:
             return state;
     }
 };