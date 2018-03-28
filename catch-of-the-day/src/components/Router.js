import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './storePicker';
import App from './App';
import React from 'react';
import NotFound from './NotFound';
const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route exact path="/store/:storeId" component={App} />
        <Route exact component={NotFound} />
        </Switch>
        </BrowserRouter>
);

export default Router;