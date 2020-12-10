import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import ByUsername from './containers/ByUsername';
import Page404 from './containers/Page404';
import Signin from './containers/Signin';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="tweets/:username" component={ByUsername} />
        <Route path="404" component={Page404} />
        <Route path="/signin" component={Signin} />
        <Redirect from="*" to="404" />
    </Route>
);