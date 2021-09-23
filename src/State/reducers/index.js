import { combineReducers } from "redux";
import departmentsReducer from './departmentsReducer';
import eventsReducer from './eventsReducer';
import initiativesReducer from './initiativesReducer';
import resourcesReducer from './resourcesReducer';
import coordReducer from './coordReducer';
import leaderReducer from './leaderReducer';
import profReducer from './profReducer';

const reducers = combineReducers({
    departments: departmentsReducer,
    events: eventsReducer,
    initiatives: initiativesReducer,
    resources: resourcesReducer,
    coords: coordReducer,
    leaders: leaderReducer,
    profs: profReducer,
});

export default reducers;

