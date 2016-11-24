// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Message } from './MessageList.actions.js';
import { GetMessageList} from './MessageList.actions.js';

type MessageListProps = {
    messages?: Array<Message>,
    dispatch: (input:any) => void
}

const renderMessageList = (messages?: Array<Message>) => {
    console.debug(`renderMessageList invoked`)

    if (messages == null) {
        return;
    }
    console.debug(`Available messages ${messages.length}`)
    
    return messages.map(item => <li>{item.MessageTitle}</li>)
}


const MessageList = (props: MessageListProps) => {
    const fetchMessageList = () => {
        if (props.dispatch != null) {
            props.dispatch(GetMessageList('angularjs'));
        }
    }

    return (
        <div>
            <h1>Number of results {(props.messages != null)? props.messages.length: -1}</h1>
            <button onClick={fetchMessageList}>Get Messages</button>
            <ul>
                {renderMessageList(props.messages)}
            </ul>
        </div>);
}

export default connect((state)=>{
    return{
        messages: state.MessageListReducer
    };
})(MessageList);
