import { createStore } from 'redux';
import rootReducer from '../reducers';

/**
 * Our store
 */
export default (initialState={}) => {
    return createStore(rootReducer, initialState);
}