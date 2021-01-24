import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/admin';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </Fragment>
        )
    }
}
