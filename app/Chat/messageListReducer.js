// @flow

import type {Message} from './MessageList.actions.js';

export const MessageListReducer = (state: Array<Message>= [], action: {type: string, messages: Array<Message>}):MessageList => {
    console.debug(`Message List Reducer Invoked ${action.type}`);
    switch(action.type){
        case "RESULT":
            console.debug(`Reducer returned ${action.messages.length}`);
            return action.messages;
        default: 
            return state;
    }
}