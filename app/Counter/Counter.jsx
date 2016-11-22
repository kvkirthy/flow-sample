// @flow
import React from 'react';
import { connect } from 'react-redux';

import type {CounterAction, Increment, Decrement } from './CounterAction.js';

type CounterProps = {
    Counter: number;
    Offset: number;
    dispatch: (CounterAction) => void;
}

class Counter extends React.Component {

    props: CounterProps;

    static defaultProps: {
        Counter: number;
        Offset: number;
    };

    constructor(props: CounterProps) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        let {dispatch} = this.props;
        dispatch({ type: "INCREMENT", offset: this.props.Offset });
    };

    decrement() {
        let {dispatch} = this.props;
        dispatch({ type: "DECREMENT", offset: this.props.Offset });
    };

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-block">
                            <div className="row">
                                <span className="col-sm-4">&nbsp; </span>
                                <h1 className="col-sm-1">{this.props.Counter}</h1>
                                <div>(Increment by {this.props.Offset})</div>
                                <span className="col-sm-4">&nbsp; </span>
                            </div>
                            <div className="row">
                                <span className="col-sm-4"><button className="col-sm-12 btn btn-primary" onClick={this.increment}> + </button></span>
                                <h1 className="col-sm-1">&nbsp;</h1>
                                <span className="col-sm-4"> <button className="col-sm-12 btn btn-primary" onClick={this.decrement}> - </button> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Counter.defaultProps = { Offset: 2, Counter: 5 };

export default connect((state) => {
    return {
        Counter: state.counterReducer
    }
})(Counter);