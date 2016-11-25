// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Message } from './MessageList.actions.js';
import { GetMessageList } from './MessageList.actions.js';

type MessageListProps = {
    messages?: Array<Message>,
    dispatch: (input: any) => void
}

const renderMessageList = (messages?: Array<Message>) => {
    console.debug(`renderMessageList invoked`)

    if (messages == null) {
        return;
    }
    console.debug(`Available messages ${messages.length}`)
    let counter: number = 1;
    return messages.map(item => {
        counter += 1;
        return (
            <tr key={counter}>
                <td>{item.MessageTitle}</td>
                <td>{item.Author}</td>
            </tr>
        );
    })
}

const MessageList = (props: MessageListProps) => {

    let redditTopicValue: string = '';

    const fetchMessageList = () => {
        if (props.dispatch != null) {
            props.dispatch(GetMessageList(redditTopicValue));
        }
    }

    const onRedditTopicChange = (event) => {        
        redditTopicValue = event.target.value;
    }

    return (
        <div>
            <h3>Search for topics on Reddit</h3>
            <p>This is a sample built for demonstrating Flowtype features.</p>
            <form className="form-inline">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-addon"> Reddit Topic</div>
                        <input className="form-control" onChange={onRedditTopicChange} id="redditTopic" type="text" />
                    </div>
                </div>
                <span>&nbsp;</span>
                <button onClick={fetchMessageList} className="btn btn-primary">Get Messages</button>
                <br />
                <br />

                <div>Number of results {(props.messages != null) ? props.messages.length : -1}</div>
                               
                <div className="bg-info">
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td><strong>Topic</strong></td>
                                    <td><strong>Author</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                {renderMessageList(props.messages)}
                            </tbody>
                        </table>
                    </div>

                </div>
            </form>

        </div>);
}

export default connect((state) => {
    return {
        messages: state.MessageListReducer
    };
})(MessageList);
