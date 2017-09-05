import { ADD_PERSON, REMOVE_PERSON, EDIT_PERSON } from '../actionTypes';

/**
 * This is an action creator
 * @param {Person object} person 
 */
export const addPerson = (person) => {
    console.log('----Action Creator for addPerson----')
    return {
        type: ADD_PERSON,
        payload: person
    }
}

/**
 * This is an action creator
 * @param {id of a person} person 
 */
export const removePerson = (id) => {
    return {
        type: REMOVE_PERSON,
        payload: id
    }
}

/**
 * This is an action creator
 * @param {id of a person} person 
 */
export const editPerson = (id) => {
    return {
        type: EDIT_PERSON,
        payload: id
    }
}