// @flow

import React from 'react';
import MessageList from './MessageList.jsx';
import Titlebar from '../titlebar/Titlebar.jsx';
import MessageInput from './MessageInput.jsx'


export const MessageListContainer = () => {
    return (<div>
        <Titlebar></Titlebar>
        <MessageInput></MessageInput>
        <MessageList></MessageList>
    </div>);
};