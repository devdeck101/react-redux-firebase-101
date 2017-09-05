import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';

export default combineReducers({
    people: peopleReducer
    //other reducers
})
