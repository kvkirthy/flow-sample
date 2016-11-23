// @flow

import React from 'react';
import Counter from './Counter.jsx';
import Titlebar from '../titlebar/Titlebar.jsx';

export const CounterContainer = () => {
    return (<div>
        <Titlebar></Titlebar>
        <Counter Offset={4}></Counter>
    </div>);
};