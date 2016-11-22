import React from 'react';
import {connect} from 'react-redux';

class WelcomePage extends React.Component {
    constructor() {
        super();       
    }

    componentDidMount() {
        this.props.dispatchPlaceholder();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-block">
                            <div className="row">
                                <span className="col-sm-4">&nbsp; </span>
                                <h1 className="col-sm-1">{this.props.welcomePage}</h1>
                                <span className="col-sm-4">&nbsp; </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        welcomePage: state.welcomePageReducer
    };
};

const mapDistpatchToProps = (dispatch) => {
    return {
        dispatchPlaceholder: () => dispatch({
            type: "sample"            
        })
    };
};

export default connect(mapStateToProps, mapDistpatchToProps)(WelcomePage);