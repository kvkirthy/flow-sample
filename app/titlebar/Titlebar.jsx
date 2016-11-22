import React from 'react';
import {Link} from 'react-router';

let Titlebar = (store, context) => {
    return (<div className="navbar navbar-default ">
        <div className="container-fluid">
            <div className="navbar-header">
                <span className="navbar-brand">{context.store.getState().titlebar}</span>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="#">Link1</Link>
                    </li>
                    <li>
                        <Link to="#">Link2</Link>
                    </li>
                    <li>
                        <Link to="#">Link3</Link>
                    </li>
                </ul>

            </div>
        </div>
    </div>);

};

Titlebar.contextTypes = {
    store: React.PropTypes.object
};

export default Titlebar;