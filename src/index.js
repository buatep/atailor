import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Hi from './components/hi';
import App from './App';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path='/' component={App}/>
            <Route/>
            <Route/>
            <Redirect/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
