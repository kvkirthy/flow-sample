import React from 'react';
import WelcomePage from './WelcomePage.jsx';
import Titlebar from '../titlebar/Titlebar.jsx';

export const WelcomePageContainer = () => {
    return (<div>
        <Titlebar></Titlebar>
        <WelcomePage></WelcomePage>
    </div>);
};