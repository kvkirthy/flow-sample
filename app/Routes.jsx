import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import {Counter} from './Counter/Counter.jsx';
import {WelcomePageContainer } from './WelcomePage/WelcomePageContainer.jsx';
import {CounterContainer } from './Counter/CounterContainer.jsx';
import {MessageListContainer } from './Chat/MessageListContainer.jsx';

import {store} from './reducers.js';
// generator placeholder for component import. do NOT delete


export class CustomRouter extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={hashHistory} path="/">
                    <Route path="/" component={MessageListContainer}></Route>                    
                    {/* generator placeholder for route. do NOT delete */}                    
                </Router>
            </Provider>);
    }
}