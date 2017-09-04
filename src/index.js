import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


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

/**
 * 1. Create store
 * 2. Create the action creator
 * 3. Create the reducers
 * 4. Provide the store to the application
 * 5. Remove people={initialState.people} from the <App />
 */


ReactDOM.render(<App people={initialState.people} />, document.getElementById('root'));
registerServiceWorker();
