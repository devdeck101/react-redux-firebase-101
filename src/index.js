import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import configureStore from './store';


/**
 * Initial state created only for testing purpose
 */
const initialState = {
    people: [
        {
            id: 1,
            firstName: 'Louis',
            lastName: 'Vuitton',
            bio: 'A French fashion designer and businessman.'
        },
        {
            id: 2,
            firstName: 'Neymar',
            lastName: 'Júnior',
            bio: 'A football player.'
        },
        {
            id: 3,
            firstName: 'Félix',
            lastName: 'Khoury',
            bio: 'Funny character: Famous phrase: "Eu não tenho vocação para a pobreza”'
        }
    ]
}

const store = configureStore(initialState);

/**
 * 1. Create actions
 * 2. Create Action Creator
 * 3. Create Reducer
 * 4. Create store
 * 5. Provide the store
 */


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
