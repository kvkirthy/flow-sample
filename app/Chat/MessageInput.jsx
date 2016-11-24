// @flow

import React from 'react';
import {connect} from 'react-redux';

type MessageProps = {
    messageText: string,
    dispatch: () => void    
}

const MessageInput = (props: MessageProps) => {
    return(<input type="text"/>);
};

export default connect()(MessageInput);