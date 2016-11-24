import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './reducers.js';

import 'bootstrap/dist/css/bootstrap.css';

import {CustomRouter} from './Routes.jsx';

const render = () => {

    ReactDOM.render(
        <CustomRouter store={store} />
        , document.getElementById('reactApp'));

};

// store.subscribe(() => {
//     console.debug('Subscribe invoked');
//     //render();
// });

render();
