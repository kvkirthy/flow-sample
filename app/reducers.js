import {createStore, combineReducers} from 'redux';
import titlebarReducer from './titlebar/titlebarReducer.js';
import welcomePageReducer from './welcomePage/welcomePageReducer.js';
import {counterReducer} from './Counter/counterReducer.js';
// generator placeholder for reducer import. do NOT delete
console.log(counterReducer);
// Combine multiple reducers from various functionalities.
const allReducers = combineReducers({
    welcomePageReducer
    ,counterReducer
    ,titlebar: titlebarReducer 
    // generator placeholder for reducer object. do NOT delete
});

export const store = createStore(allReducers);
