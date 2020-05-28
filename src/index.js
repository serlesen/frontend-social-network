import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Images from "./components/Images/Images";
import Users from "./components/Users/Users";
import ProtectedRoute from "./layouts/ProtectedRoute";
import CleanLayoutRoute from "./layouts/CleanLayout";

ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/"><Redirect to="/messages"/></Route>
                <CleanLayoutRoute path="/login" component={Login}/>
                <ProtectedRoute path="/messages" component={Messages}/>
                <ProtectedRoute path="/images" component={Images}/>
                <ProtectedRoute path="/users" component={Users}/>
            </Switch>
        </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
