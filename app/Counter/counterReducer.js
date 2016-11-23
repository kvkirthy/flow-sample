// @flow

import type {CounterAction} from './CounterAction.js';

export const counterReducer = (state: number=0, action: CounterAction): number => {

    console.info(state);
    console.log(action.offset);
    switch(action.type){
        case "INCREMENT":
            return state + action.offset;
        case "DECREMENT":
            return state - action.offset;
        default:
            return state;
    }
};