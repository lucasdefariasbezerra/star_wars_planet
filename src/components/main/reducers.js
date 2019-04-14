import { combineReducers } from 'redux';
import PlanetReducer from '../planets/planetReducer';

const rootReducer = combineReducers({
    data: PlanetReducer
});

export default rootReducer;