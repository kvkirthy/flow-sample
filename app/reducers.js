import {createStore, combineReducers, applyMiddleware} from 'redux';
import titlebarReducer from './titlebar/titlebarReducer.js';
import welcomePageReducer from './welcomePage/welcomePageReducer.js';
import {counterReducer} from './Counter/counterReducer.js';
import {MessageListReducer} from './Chat/MessageListReducer.js';
import thunkMiddleware from 'redux-thunk';

// generator placeholder for reducer import. do NOT delete

// Combine multiple reducers from various functionalities.
const allReducers = combineReducers({
    welcomePageReducer,
    MessageListReducer
    ,counterReducer
    ,titlebar: titlebarReducer 
    // generator placeholder for reducer object. do NOT delete
});

export const store = createStore(allReducers, applyMiddleware(thunkMiddleware));
