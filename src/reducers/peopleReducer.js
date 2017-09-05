import { ADD_PERSON } from '../actionTypes';

/**
 * This is our people reducer
 */
export default (state = [], action) => {
    console.log('----Reducer called----')
    switch (action.type) {
        case ADD_PERSON:
            console.log('----Reducer ADD_PERSON called----')
            let personToAdd = action.payload;
            personToAdd.id = state.length + 1;
            return [
                ...state,
                Object.assign({}, personToAdd)
            ];
        default:
            console.log('----Reducer default called----')
            return state;
    }
}