// @flow

import React from 'react';
import MessageList from './MessageList.jsx';
import Titlebar from '../titlebar/Titlebar.jsx';

export const MessageListContainer = () => {
    return (<div>
        <Titlebar></Titlebar>
        <MessageList></MessageList>
    </div>);
};