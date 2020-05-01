import {
    createStore
} from 'redux';
import controlForm from './reducer';

let store = createStore(controlForm,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;